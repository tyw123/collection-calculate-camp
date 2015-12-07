'use strict';

function grouping_count(collection) {

  var result={},begin=[],c=0,flag=0;
  begin[0]={key:collection[0],count:1};

  //init begin
  for(var i=0;i<collection.length;i++)
  {
    begin[i]={key:collection[0],count:1}
  }
  //用begin获取输入集和的信息，赋给temp
  for(var i=1;i<collection.length;i++)
  {
    debugger
    for(var j=0;j<=c;j++)
    {
      //var flag=0;
      if(collection[i]==begin[j].key)
      {
        flag++;
        begin[j].count++;
      }
    }
    if(flag==0)
    {
       // begin[c]={key:collection[i],count:1};
       begin[c+1].key=collection[i];
        c++;
    }
    flag=0;
  }

  //把begin的值赋给result
    for(var i=0;i<=c;i++)
    {
      result[begin[i].key]=begin[i].count;//注意JS中对象键名的赋值方法！！！
    }
  return result;
}

module.exports = grouping_count;
