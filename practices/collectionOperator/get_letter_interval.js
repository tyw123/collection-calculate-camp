'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  //声明
  number_b+=96;
  number_a+=96;
  var l=number_b-number_a,result=[],temp;

  //把数字跟字母相对应
//  var i=String.fromCharCode(97)

  //根据输入数字，输出字母
  if(number_a==number_b)
  {
    result=[String.fromCharCode(number_a)];
  }
  else
  {
    if(l>0)temp=l=l+1;
    else
     {l=l-1;temp=-l;}
   // var
    for(var i=0;i<temp;i++)
    {
      result[i]=String.fromCharCode(number_a+temp/l*i);
    }
  }



  //返回结果

return result;

}

module.exports = get_letter_interval;
