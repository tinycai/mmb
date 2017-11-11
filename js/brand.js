$(function(){
  var obj=getObj();
  var brandtitleid=obj.brandtitleid;
  // console.log(brandtitleid);
  
  //给第二个标签添加a链接
 
  $(".all_ul li:eq(1)").prepend(" <a href=prolist.html?brandtitleid="+brandtitleid+"><p>平板电视产品销量排行</p></a>");
  
  
  $.ajax({
    type:"get",
    url:"http://localhost:9090/api/getbrand",
    data:{
      brandtitleid:brandtitleid
    },
    success:function(data){
      data.brandtitleid=brandtitleid;
      console.log(data);
      $(".list_ul").html(template("tml",data));
      
      //点击第一个标签让他的二级标签显示
      $(".all_ul li:eq(0)").on("click",function(){
        $(".list").toggleClass("hide");
      })
      
      
    }
    
    
  })
  
 
})