function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var collection_a = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
  var collection_b = {value: ["a", "d", "e", "f"]};
  for(var i = 0; i < collection_a.length; i++){
      for( var j = 0; j < collection_b['value'].length;j++){
      if(collection_a[i] == collection_b['value'][j]){
      console.log(collection_b['value'][j]);
      }
}
}

module.exports = collect_same_elements;
