'use strict';

function double_to_one(collection) {

  //在这里写入代码
  //声明
  var result=[],temp=[],c=0,flag=0;
  //用中间集和获取一维数组
    for(var i=0;i<collection.length;i++){
      if(collection[i].length==undefined){//数字的长度为undefined
       temp[c]=collection[i];
       c++;
      }
      else{
      for(var j=0;j<collection[i].length;j++){
        temp[c]=collection[i][j];
        c++;
      }
      }
    }

  result[0]=temp[0];
  c=1;
  //判断顺序
  for(var i=1;i<temp.length;i++){
    for(var j=0;j<c;j++){
      if(result[j]==temp[i])
        flag=1;
    }
    if(flag==0){
      result[c]=temp[i];
      c++;
    }
    flag=0;
  }

      return result;
}

module.exports = double_to_one;
