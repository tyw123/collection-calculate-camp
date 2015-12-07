function count_same_elements(collection) {
  //在这里写入代码
  //声明
  var result=[],temp=[],c=1,flag;
  //初始化中间数组
  for(var i=0;i<collection.length;i++){
    temp[i]={key:collection[0],count:1};
  }

  //判断输入数组
  for(var i=1;i<collection.length;i++){
    flag=0;
    for(var j=0;j<c;j++){
      if(collection[i]==temp[j].key){
        flag=1;
        temp[j].count++;
      }
    }
    if(flag==0){
      temp[c].key=collection[i];
      c++
    }
  }

  for(var i=0;i<c;i++){
    result[i]=temp[i];
  }
  //返回结果
  return result;

}

module.exports = count_same_elements;
