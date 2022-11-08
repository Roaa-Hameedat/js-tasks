function shorterInArray (arrayname){
    let  x = arrayname[0].length;
    let y = arrayname[0];
for(i=0; i<arrayname.length; i++)
{
   if( x > arrayname[i].length){
    x=arrayname[i].length;
    y=arrayname[i];
   } }
return y;
}

let arrayname=["roaa","rahmah","wesam","yazeed","aya"];

 document.write(shorterInArray(arrayname));