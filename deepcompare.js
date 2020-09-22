function compare(a,b){
 if(a === b)
   return true;
 else
   return false;
}
function deepcompare(x,y){
  var ver;
  var typex = typeof x;
  var typey = typeof y;
  if(typex === "object" && typey === "object"){
       alert("object to work on");
       for(var i in x){
         for(var j in y){
           if( i === j){
             ver = compare(x[i],y[j]);
           }
         } // fin for j
       } // fin for i
  }//fin if
  else{
   ver = compare(x,y);
  }
  console.log(ver);
}
deepcompare({1:2,3:5},{1:2,3:4});
