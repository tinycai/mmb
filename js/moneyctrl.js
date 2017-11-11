$(function(){
  //定义变量存储pageid
  var pageid=0;
  var pages=0;
  //渲染商品页面
  $.ajax({
    type:"get",
    url:"http://localhost:9090/api/getmoneyctrl",
    success:function(data){
      // console.log(data);
      $(".pro_pic").html(template("tmp1",data));
    }
  })
  
  
  $.ajax({
    type:"get",
    url:"http://localhost:9090/api/getmoneyctrl",
    success:function(data){
      
      pages=Math.ceil(data.totalCount/data.pagesize);
      data.result.forEach(function(e,i){
        e.pages=pages;
      })
      
      $(".page").html(template("tml2",data));
      
      //给下拉框注册点击事件
      $(".page").on("click","select",function() {
        pageid = $(this).val();
  
        //将获取到的页数用于再次渲染
        $.ajax({
          type: "get",
          url: "http://localhost:9090/api/getmoneyctrl",
          data: {
            pageid: pageid
          },
          success: function (data) {
            // console.log(data);
            $(".pro_pic").html(template("tmp1", data));
          }
        })
  
      });
  
      //给上一页注册点击事件
      $(".page").on("click",".up",function(){
        
        pageid--;
        if(pageid<=0){
          pageid=pages-1
        }
        $("option:selected").text(pageid+"/"+pages);
        $.ajax({
          type: "get",
          url: "http://localhost:9090/api/getmoneyctrl",
          data: {
            pageid: pageid
          },
          success: function (data) {
            // console.log(data);
            $(".pro_pic").html(template("tmp1", data));
          }
        })
      })
      
      //给下一页注册点击事件
      
      $(".page").on("click",".down",function(){
        pageid++;
        if(pageid>pages-1){
          pageid=1
        }
        $("option:selected").text(pageid+"/"+pages);
        $.ajax({
          type: "get",
          url: "http://localhost:9090/api/getmoneyctrl",
          data: {
            pageid: pageid
          },
          success: function (data) {
            $(".pro_pic").html(template("tmp1", data));
          }
        })
      })
      
    }
  })
  
  
})