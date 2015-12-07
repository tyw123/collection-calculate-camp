'use strict';

function compute_median(collection) {
  //在这里写入代码
  //声明
  var result,num=[],c=0,temp="",x=0;
  for(var i=0;i<collection.length;i++){

    if(">"==collection[i]){
      for(var z=x;z<i-1;z++){
        temp+=collection[z];
        x=i+1;

      }
              num[c]=Number(temp);
              c++;
    }
        if(i==collection.length-1){
          for(var z=x;z<collection.length;z++){
            temp+=collection[z];
          }
             num[c]=Number(temp);
             c++;
         }
       temp="";
  }
  //计算中位值
  if(c%2==0){
    result=(num[c/2]+num[c/2-1])/2;
  }
  else{
    result=num[(c-1)/2];
  }
  //返回结果
  return result;
}

module.exports = compute_median;


