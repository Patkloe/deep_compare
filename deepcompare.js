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
         var typrop_x = typeof x[i];
         for(var j in y){
          var typrop_y = typeof y[j];
           if(( i === j) && (typrop_x === "object") && (typrop_y === "object")){
              deepcompare(x[i],y[j]);
           }
           else if(i === j)
              ver = compare(x[i],y[j]);
              if( ver === false){
                    alert("trouve");
                    break;
              }
         } // fin for j
       } // fin for i
  }//fin if
  else{
   ver = compare(x,y);
  }
  console.log(ver);
}
deepcompare({1:2,3:{4:5},7:{1:5,4:2}},{1:2,3:{4:5},7:{1:5,4:2}});
