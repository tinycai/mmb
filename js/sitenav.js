$(function(){
  $.ajax({
    type:"get",
    url:"http://localhost:9090/api/getsitenav",
    success:function(data){
      console.log(data);
      $(".sit_conten_ul").html(template("tml",data));
    }
    
  })
})