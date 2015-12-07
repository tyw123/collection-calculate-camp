'use strict';

function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码
  //变量声明
  var result=[],c=0;
  //判断是否相等
  for(var i=0;i<collection_a.length;i++){
    for(var j=0;j<collection_b.length;j++){
      if(collection_b[j]==collection_a[i]){
        result[c]=collection_a[i];
        c++;
      }
    }
  }
  //返回结果
  return result;
}

module.exports = choose_common_elements;
