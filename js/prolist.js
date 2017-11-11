$(function(){
  
  
  var obj=getObj();
  var brandtitleid=obj.brandtitleid;
  var pagesize=4;
  var productId=0;
  var arr=[];
  // console.log(brandtitleid);
  //调用后台数据进行渲染
  $.ajax({
    type:"get",
    url:"http://localhost:9090/api/getbrandproductlist",
    data:{
      brandtitleid:brandtitleid,
      pagesize:pagesize
    },
    success:function(data){
      console.log(data);
      data.result.forEach(function(e,i){
        arr.push(e.productImg);
      })
      arr.push(data.result[1].productImg);
      console.log(arr);
      productImg=data.result[0].productImg;
      
      $(".new_ul").html(template("tml",data))
      $(".top").on("click",function(){
        $(".box").toggleClass("hide");
        productId=$(".info").data("productid");
        
      })
    }
  })
  
  
  //获取评论
  $.ajax({
    type:"get",
    url:"http://localhost:9090/api/getproductcom",
    data:{
      productid:productId
    },
    success:function(data){
      data.result.forEach(function(e,i){
        e.productImg=arr[i];
      })
      console.log(data);
      $(".sec_ul").html(template("tml2",data));
      $(".coment").on("click",function(){
        $(".sec_box").toggleClass("hide");
      })
    }
  })
  
})