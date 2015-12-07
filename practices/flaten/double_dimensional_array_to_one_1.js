'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var result=[],c=0;
    for(var i=0;i<collection.length;i++){
      if(collection[i].length==undefined){//数字的长度为undefined,length求的是数组的长度
       result[c]=collection[i];
       c++;
      }
      else{
      for(var j=0;j<collection[i].length;j++){
        result[c]=collection[i][j];
        c++;
      }
      }
    }

    return result;
}

module.exports = double_to_one;
