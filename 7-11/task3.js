


function shorterInArray (arraynames){
    let  x=arraynames[0].length;
    let y =arraynames[0];
for(i=0; i<arraynames.length; i++){
   if(x>arraynames[i+1].length){
    x=arraynames[i+1].length;
    y=arraynames[i+1];
   }
}
return y;
}

let arrayname=["roaa","rahmah","wesam","yazeed","aya"];
var c =shorterInArray(arrayname);

document.write(c);