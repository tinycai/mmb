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
 
  var categoryid=obj.categoryid;
  var pageid=obj.pageid;
  
  //调用接口获取数据
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
  
  
  //商品渲染端口
  $.ajax({
    url: "http://localhost:9090/api/getproductlist",
    type: "get",
    data: {
      categoryid: categoryid,
      pageid: pageid
    },
    success: function (data) {
      $(data.result).each(function (i, e) {
        var temp = e.productImg;
        var start = e.productImg.indexOf("=");
        var end = e.productImg.lastIndexOf("alt");
        var src = temp.slice(start + 2, end - 2);
        $(e)[0].src = src;
      })
      $(".mui-table-view").html(template("tml2", data));
    }
  
  })
  
  
  //分页渲染
  $.ajax({
    type:"get",
    url:"http://localhost:9090/api/getproductlist",
    data:{
      categoryid: categoryid,
      pageid: pageid
    },
    success:function(data){
      var page=Math.ceil(data.totalCount/data.pagesize);
      
      data.page=page;
      data.pageid=pageid;
      console.log(data);
      $(".list_buttons").html(template("tml3",data));
    }
    
  })
  
  
  //分页点击事件
 
  $(".list_buttons").on("click",".dropdown-menu li",function(){
    $(".dropdown-toggle").val($(this).text());
  })
  
})

