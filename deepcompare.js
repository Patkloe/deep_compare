function deepcompare(a,b){
  var gettype_a = typeof a;
  var gettype_b = typeof b;
  if(gettype_a === gettype_b){
     var getkeys_a = Object.keys(a);
     var getkeys_b = Object.keys(b);
     for(var i in getkeys_a){
         var obj_a = typeof getkeys_a[i]; 
         //object
      for(var j in getkeys_b){
         var obj_b = typeof getkeys_b[j];
         if(i === j){  // a modifier ajouter comparaison proprietes des objets ici
          if ((obj_a!= "object") && (obj_a!= "object")){
           if(getkeys_a[i] === getkeys_b[j])
             return true;
           else 
             return false;
          }
          else
             deepcompare(getkeys_a[i],getkeys_b[j])
         }
         else
           return false;
        
      }
     }
  }
    
  else
    return false;
}
var a = { 1:2, 3:4};
var b = {1:2, 3:5};
    deepcompare(a,b);

