'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  var result=[],c=0;
  for(var i=0;i<collection.length;i++)
  {
    if(collection[i]%3==0)
    {
      result[c]=collection[i];
      c++;
    }
  }
  return result;
}

module.exports = choose_multiples_of_three;
