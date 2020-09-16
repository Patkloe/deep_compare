function deepcompare(a,b){
  var gettype_a = typeof a;
  var gettype_b = typeof b;
  if(gettype_a === gettype_b)
    return true;
  else
    return false;
}
var a = { 1:2, 3:4};
var b = {5:6, 7:8};
    deepcompare(a,b);
