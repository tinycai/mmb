$(function(){
  $.ajax({
    url:"http://localhost:9090/api/getcategorytitle",
    type:"get",
    success:function(data){
      console.log(data);
      $(".first_cat").html(template("tml",data));
    }
  })

  
  //点击分类标题出现下拉列表
  $(".first_cat").on("click","li",function(){
    var titleId=$(this).data("titleid");
    var $this=$(this);
    // console.log($this);
    //调用后台的数据
    $.ajax({
      type:"get",
      url:"http://localhost:9090/api/getcategory",
      data:{
        titleid:titleId
      },
      success:function(data){
        console.log(data);
        $(".second_cat").html(template("tml2",data));
      }
    })
    $this.children(".second_cat").toggleClass("hide")
  })
  
})