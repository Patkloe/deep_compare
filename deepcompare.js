function deepcompare(a,b){
 var ver;
 var get_type_a = typeof a;
 var get_type_b = typeof b
if((get_type_a == "object") &&  (get_type_b == "object")){
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
  //console.log(ver);
 }//contraire meme type
 else if(a!== b)
   ver = false;
}
else if((get_type_a != "object") ||  (get_type_b != "object")){
   ver = false;
}
else if((get_type_a != "object") &&  (get_type_b != "object")){
     if(a == b)
       ver = true;
     else
       ver = false;
}
    console.log(ver);
}
var x = {1:2, 3:4,5:6, 5:6, 9:{1:2, 3:4,5:6, 7:{5:8, 7:9}}};
var y = {1:2, 3:4,5:6, 5:6, 9:{1:2, 3:4,5:6, 7:{5:8, 7:9}}};
deepcompare(x,y);
