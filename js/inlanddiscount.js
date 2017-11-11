$(function(){
  
  //获取商品数据
  $.ajax({
    type:"get",
    url:"http://localhost:9090/api/getinlanddiscount",
    success:function(data){
      console.log(data);
      $(".in_info").html(template("tml",data));
    }
  })
  
  
  //延迟加载开始
  //给document注册滚动事件
  $(window).scroll(function(){
    //获取滚动的高度
    var t=$(window).scrollTop();
    // console.log($("li").eq(15));
    
    if(t>=$("li:eq(15)").offset().top){
      setTimeout(function(){
        $("li:nth-last-child(-n+4)").removeClass("hide");
      },1000)
      
    }
   
  })
})