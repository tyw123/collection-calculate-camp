'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  //声明
  var result=[],temp=[];
  var num=Math.abs(number_b-number_a)+1;//取绝对值
  var step=number_b-number_a>0?1:-1;//三目运算符
  //根据输入填充中间数组
  for(var i=0;i<num;i++)
  {
    temp[i]=number_a+step*i-1;
    result[i]="";
  }
  //字符转换
  for(var i=0;i<temp.length;i++)
  {
  var a=[];
    for(var j=0;temp[i]>0;j++)
    {

      a[j]=(temp[i]-j)%26+97;
      temp[i]=parseInt(temp[i]/26);//JS里的数值计算默认为浮点数，需要强制转换成整型
    }
    for(var z=a.length-1;z>=0;z--)
    {
      result[i]+=String.fromCharCode(a[z]);
    }
  }
  //输出结果
  return result;
}
module.exports = get_letter_interval_2;

