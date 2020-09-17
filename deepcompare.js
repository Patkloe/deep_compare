function deepcompare(a,b){
 var ver;
 var get_type_a = typeof a;
 var get_type_b = typeof b
 if(get_type_a === get_type_b){
   var get_keys_a = Object.keys(a);
   var get_keys_b = Object.keys(b);
   for(i in get_keys_a){
     var type_a = typeof get_keys_a[i];
     for(j in get_keys_b){
      var type_b = typeof get_keys_b[j];
       if((i === j) && (type_a === "object") && (type_b === "object")){
          deepcompare(get_keys_a[i],get_keys_b[j]);
       }
       else if((i === j) && (type_a === type_b) && (get_keys_a[i] == get_keys_b[j])){
          alert(type_a + type_b);
          ver = true;
       }
       else
          ver = false;
     } // fin for i
   }// fin for j
  console.log(ver);
 }//contraire meme type
 else
 return false;
}
var x = {1:2, 3:4,5:6, 5:6};
var y = {1:2, 3:4,5:6, 5:6};
deepcompare(x,y);
