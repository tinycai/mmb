
$(function(){
  
  //截取路径中的信息
  var search=location.search;
  search=search.slice(1);
  var arr=search.split("&");
  var obj={};
  for(var i=0;i<arr.length ;i++){
    var arr2=arr[i].split("=");
    var key=arr2[0];
    var value=decodeURI(arr2[1]);
    obj[key]=value;
  };
  
  var productid=obj.productid;
  var categoryid=obj.categoryid;
  // console.log(productid);
  
  //分页获取数据
  $.ajax({
    type:"get",
    url:"http://localhost:9090/api/getcategorybyid",
    data:{
      categoryid:categoryid
    },
    success:function(data){
      // console.log(data);
      $(".breadcrumb").html(template("tml",data));
    }
  })
  
  
  //获取商品详情
  $.ajax({
    url:"http://localhost:9090/api/getproduct",
    type:"get",
    data:{
      productid:productid
    },
    success:function(data){
      console.log(data);
      $(".bi_title").html(template("tml2",data));
    }
  })
  
  //获取商品评论
  $.ajax({
    type:"get",
    url:"http://localhost:9090/api/getproductcom",
    data:{
      productid:productid
    },
    success:function(data){
      // console.log(data);
      $(".long_com").html(template("tml3",data));
    }
  })
})