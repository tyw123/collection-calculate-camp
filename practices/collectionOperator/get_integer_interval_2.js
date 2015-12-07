'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  //声明
  var l=number_b-number_a,result=[],temp;
  if(number_a==number_b)
  {
    if(number_a%2==0)
    result=[number_a];
    else
    result=[];
  }
  else
  {
    if(l>0)temp=l=l+1;
    else
     {l=l-1;temp=-l;}
   // var
    for(var i=0;i<temp/2;i++)
    {
      result[i]=number_a+(number_a%2)+2*temp/l*i;
    }
  }
  return result;
}

module.exports = get_integer_interval_2;
