'use strict';
var rank_desc = function(collection){
//三种排序方法，冒泡排序代码最短，插入排序最复杂，选择排序目前看来效率最高
//插入排序
 /* var temp,result=[];
  result[0]=collection[0];
  for(var i=1;i<collection.length;i++){
  //debugger
    temp=collection[result.length];
    //比较temp处在当前集和中的第几大
    if(result.length==1){
      if (temp>result[0]){
        result[1]=temp;
      }
      else{
        result[1]=result[0];
        result[0]=temp;
      }
    }
    else{
      for(var j=0;j<i;j++){
        if(temp<=result[j]){
          for(var z=j;z<i;z++){
            result[z+1]=result[z];
          }
         }
        else{
          result[i]=temp;
        }
      }
    }
  }*/
//选择排序
 /* var result=[],min,num,ec;
  for(var i=0;i<collection.length;i++){
    min=collection[i];num=i;
    for(var j=i+1;j<collection.length;j++){
      if(collection[j]<min){
        min=collection[j];
        num=j;
      }
    }
     ec=collection[num];
     collection[num]=collection[i];
     result[i]=min;
  }*/

  //冒泡排序
    var result=collection,flag=1,temp;
    while(flag){
      flag=0;
      for(var i=0;i<result.length-1;i++){
         if(result[i]>result[i+1]){
          temp=result[i];
          result[i]=result[i+1];
          result[i+1]=temp;
          flag=1;
         }
      }
    }
  return result;
};

module.exports = rank_desc;
