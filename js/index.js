$(function(){
  
  //导航图标渲染
  $.ajax({
    type:"get",
    url:"http://localhost:9090/api/getindexmenu",
    success:function(data){
      console.log(data.result);
      $(data.result).each(function(i,e){
        // console.log($(e));
        // console.log(e.img);
        var temp=e.img;
        //<img src="images/ic_search.png" alt="比价搜索">
        var start=e.img.indexOf("=");
        // console.log(start);
        var end=e.img.lastIndexOf("alt");
        // console.log(end);
        var src=temp.slice(start+2,end-2);
        // console.log(src);
        $(e)[0].src=src;
        // console.log($(e));
      })
      // console.log(data.result);
      $(".nav").html(template("tmp",data));
    }
    
  })
  
  //点击更多显示下面一排的图标
  $(".nav").on("click","li",function(){
    var $this=$(this);
    if($(this).data("index")){
      $this.siblings("li:nth-last-child(-n+4)").toggleClass("hide");
    }
  })
  
  //商品渲染
  $.ajax({
    type:"get",
    url:"http://localhost:9090/api/getmoneyctrl",
    success:function(data){
      // console.log(data);
      $(".pro_pic").html(template("tmp2",data));
      
      $(".pro_pic li").each(function(i,e){
        // console.log($(e));
        $(e).children("a").prepend(data.result[i].productImg2);
        // console.log(data.result[i].productImg2);
      })
      
    }
  })
})