'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var result=[],c=0,flag=0;
  for(var i=0;i<collection_a.length;i++){
    for(var j=0;j<collection_b.length;j++){
      if(collection_b[j]==collection_a[i])
        flag=1;
    }
    if(flag==0){
        result[c]=collection_a[i];
        c++
    }
    flag=0;
  }
  return result;
}

module.exports = choose_no_common_elements;
