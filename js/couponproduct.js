
$(function(){
  var obj=getObj();
  var couponid=obj["couponid"];
  
  
  $.ajax({
    type:"get",
    url:"http://localhost:9090/api/getcouponproduct",
    data:{
      couponid:couponid
    },
    success:function(data){
      console.log(data);
      $(".info_ul").html(template("tml",data));
    }
  })
  
  
  
  //轮播图开始
  
    //拿到渲染图片
  $.ajax({
    type:"get",
    url:"http://localhost:9090/api/getcouponproduct",
    data:{
      couponid:couponid
    },
    success:function(data){
      // console.log(data);
      $(".box_ul").html(template("tml2",data));
      
      
      var index=0;
      //点击左键
      $(".left").on("click",function(e){
        e.stopPropagation();
        index++;
        console.log("左键" + index);
        if(index>=$(".box li").length-1){
          index=-1;
          $(".box ul").stop().animate({
            left:-200*index
          },0)
        }

        $(".box ul").stop().animate({
          left:-200*index
        },500)

       }
      )

      //点击右键
      $(".right").on("click",function(e){
        e.stopPropagation();
        index--;
        console.log("右键" + index);
        if(index<=0){
          index=$(".box li").length-2;
          $(".box ul").animate({
            left:200*index
          },100)
        }
        $(".box ul").stop().animate({
          left:-200*index
        },500)
      })
  
    }
  })
  
  
  //给商品注册点击事件让遮罩层显示
  $(".info_ul").on("click","li",function(e){
    e.stopPropagation();
    $(".mask").fadeIn(500);
    $(document).on("click",function(){
      // console.log(e.clientY);
      // console.log($(".box").offset().top);
      // if(e.clientY<=$(".box").offset().)
      $(".mask").fadeOut(500);
    })
  })
  
  
  
})



