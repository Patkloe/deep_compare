function deepcompare(a,b){
  var gettype_a = typeof a;
  var gettype_b = typeof b;
  if(gettype_a === gettype_b){
     var getkeys_a = Object.keys(a);
     var getkeys_b = Object.keys(b);
     for(var i in getkeys_a){
      for(var j in getkeys_b){
        if((i==j) && (getkeys_a[i] === getkeys_b[j]))
            return true;
        return false;
      }
     }
  }
    
  else
    return false;
}
var a = { 1:2, 3:4};
var b = {5:6, 7:8};
    deepcompare(a,b);
