$(function(){
  
    var search=location.search;
    // console.log(search);
    search=search.slice(1);
    var arr=search.split("&");
    // console.log(arr);
    var obj={};
    for(var i=0;i<arr.length ;i++){
      var arr2=arr[i].split("=");
      // console.log(arr2);
      var key=arr2[0];
      var value=decodeURI(arr2[1]);
      obj[key]=value;
    };
  
    var productid=obj.productid;
     // console.log(productid);
  
  $.ajax({
    type:"get",
    data:{
      productid:productid
    },
    url:"http://localhost:9090/api/getmoneyctrlproduct",
    success:function(data){
      console.log(data);
      $(".content").html(template("tml",data));
    }
    
  })
})