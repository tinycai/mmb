$(function(){
  $(".mmb_bottom_nav .back").on("click",function(){
    // console.log(1);
    $("html,body").stop().animate({scrollTop:0},500);
  })
})