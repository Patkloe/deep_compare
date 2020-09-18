function deepcompare(a,b){
 var ver = false;
 var get_type_a = typeof a;
 var get_type_b = typeof b
 if((get_type_a === "object") && (get_type_b === "object")){
  var getkeys_a = Object.keys(a);
  var getkeys_b = Object.keys(b);
  for(var i of getkeys_a){
      var typekeys_a = typeof getkeys_a[i];
        alert("a type, i : " + " " + typekeys_a);
    for(var j of getkeys_b){
      var typekeys_b = typeof getkeys_b[j];
         alert("a type, j : " + " " + typekeys_b);
      if((i === j) && (getkeys_a[i] === "object") && (getkeys_b[j] === "object")){
          alert("i :" + " " + i + " " + "val :" + " " + getkeys_a[i] + " " + " j :" + " " + j + " " + "val :" + " " + getkeys_b[j]);
          deepcompare(getkeys_a[i],getkeys_b[j]);
       }
      else if((i === j) && (getkeys_a[i] === getkeys_b[j]))
          ver = true;
      else if((i === j) && (getkeys_a[i] !== getkeys_b[j]))
          ver = false;
     alert( "i :" + i + " " + "j:" + " " + j );
    }// fin for j
  } // fin for i
    //alert("travail a faire ");
 }//contraire meme type
 else if(a === b)
  ver = true;
 console.log(ver);
}
var x = {1:2, 3:4,5:6, 5:6, 4:{6:8,9:0}};
var y = {1:2, 3:4,5:6, 5:6, 4:{6:8,9:1}};
deepcompare(x,y);
