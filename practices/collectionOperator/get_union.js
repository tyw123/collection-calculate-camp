'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var result=collection_a,temp=0;

  for(var i=0;i<collection_b.length;i++)
  {
    var c=0
    for(var j=0;j<collection_a.length;j++)
    {

      if(collection_a[j]!=collection_b[i])
      {
       // temp[c]=collection_b[j];
        c++;
      }
      else
      {
      continue;
      }

    }
      if(c==collection_a.length)
      {
      result.push(collection_b[i]);
      temp++;
      }
  }
  return result;
}
/*

*/
module.exports = get_union;

