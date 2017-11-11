
function getObj(){
  var search=location.search;
// console.log(search);
  search=search.slice(1);
  var arr=search.split("&");
// console.log(arr);
  var obj={};
  for(var i=0;i<arr.length ;i++) {
    var arr2 = arr[i].split("=");
    // console.log(arr2);
    var key = arr2[0];
    var value = decodeURI(arr2[1]);
    obj[key] = value;
  }
  return obj;
}
