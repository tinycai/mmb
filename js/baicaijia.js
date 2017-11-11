$(function(){
  
  $.ajax({
    type:"get",
    url:"http://localhost:9090/api/getbaicaijiatitle",
    success:function(data){
      console.log(data);
      $(".bai_nav_ul").html(template("tml",data));
  
      //设置区域滚动
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 ,
        scrollX: true,
        scrollY: false, //是否竖向滚动
      });
      
      //设置ul的宽度
      var count=$(".bai_nav_ul li").length;
      var width=$(".bai_nav_ul li").outerWidth;
      $(".bai_nav_ul").width(count*width);
      // console.log($(".bai_nav_ul").width());
      
  
    }
    
  })
  
  //商品列表中的数据载入
  $.ajax({
    type:"get",
    url:"http://localhost:9090/api/getbaicaijiaproduct",
    data:{
      titleid:0
    },
    success:function(data){
      console.log(data);
      $(".bai_content").html(template("tml2",data));
    }
  })
  
  
  //给导航栏注册点击事件
  
  $(".bai_nav_ul").on("tap","li",function(){
    $(this).addClass("now").siblings().removeClass("now");
    var titleId=$(this).children("a").data("id");
    
    //将页面渲染到指定的titleId下
    $.ajax({
      type:"get",
      url:"http://localhost:9090/api/getbaicaijiaproduct",
      data:{
        titleid:titleId
      },
      success:function(data){
        // console.log(data);
        $(".bai_content").html(template("tml2",data));
      }
    })
  })
  


})