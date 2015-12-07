'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  //声明
  var l=number_b-number_a,result=[],temp;
  if(number_a==number_b)
  {
    result=[number_a];
  }
  else
  {
    if(l>0)temp=l=l+1;
    else
     {l=l-1;temp=-l;}
   // var
    for(var i=0;i<temp;i++)
    {
      result[i]=number_a+temp/l*i;
    }
  }
  return result;
}

module.exports = get_integer_interval;

