$(function(){
  //京东
  var shopId=0;
  var areaId=0;
  $.ajax({
    type:"get",
    url:"http://localhost:9090/api/getgsshop",
    success:function(data){
      console.log(data);
      $(".first_jd").html(template("tml2",data));
      //点击一级分类事件
      $(".first>li").on("click",function(){
    
        $(this).children(".cd_nav_box").toggleClass("hide").parent().siblings().children(".cd_nav_box").addClass("hide");
      })
      
      
      //京东下二级分类的点击事件
      $(".first_jd li").on("click",function(){
         shopId=$(this).data("shopid");
         //加对勾
  
        $(this).find(".gou").removeClass("true").closest("li").siblings().find(".gou").addClass("true");
        //改字
        $(".first-title").html($(this).find(".shopName").html());
        //商品内容渲染
        $.ajax({
          type:"get",
          url:"http://localhost:9090/api/getgsproduct",
          data:{
            shopid:shopId,
            areaid :areaId
          },
          success:function(data){
            // console.log(data);
            $(".cd_info").html(template("tml",data));
          }
        })
      })
    }
    
    
  })
  
  //华北
  $.ajax({
    type:"get",
    url:"http://localhost:9090/api/getgsshoparea",
    success:function(data){
      console.log(data);
      $(".second_hb").html(template("tml3",data));
      
      
      
      $(".second_hb li").on("click",function(){
        areaId=$(this).data("areaid");
        
        $(this).find(".gou").removeClass("true").closest("li").siblings().find(".gou").addClass("true");
        $(".second-title").html($(this).find(".areaName").html());
        //商品内容渲染
        $.ajax({
          type:"get",
          url:"http://localhost:9090/api/getgsproduct",
          data:{
            shopid:shopId,
            areaid :areaId
          },
          success:function(data){
            // console.log(data);
            $(".cd_info").html(template("tml",data));
          }
        })
      })
    }
  })
  
  //商品内容渲染
  $.ajax({
    type:"get",
    url:"http://localhost:9090/api/getgsproduct",
    data:{
      shopid:shopId,
      areaid :areaId
    },
    success:function(data){
      // console.log(data);
      $(".cd_info").html(template("tml",data));
    }
  })
  

  
  
})