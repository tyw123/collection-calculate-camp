'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var result=[],c=0;
  result[c]=collection[0];
  //c++;
  for(var i=1;i<collection.length;i++)
  {
    if(collection[i]!=result[c])
    {
      c++;
      result[c]=collection[i];
      //c++
    }
  }
  return result;
}

module.exports = choose_no_repeat_number;
