function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var collection_a = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
  var collection_b = [["a", "d", "e", "f"]];
  for(var i = 0; i < collection_a.length; i++){
    for( var j = 0; j < collection_b[0].length;j++){
    if(collection_a[i] == collection_b[0][j]){
    console.log(collection_b[0][j]);
    }
}
}
}

module.exports = collect_same_elements;
