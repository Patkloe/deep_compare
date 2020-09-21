function deepcompare(a,b){
var type_a = typeof a;
var type_b = typeof b;
var ver = false;
var typea;
var typeb;
 if((type_a === "object")&&(type_b === "object")){
    alert("object 1");
    for(var i in a){
     var c = i;
     typea = typeof a[c];
     for(var j in b){
       var d = j
       typeb = typeof b[d];
       alert("a type :"+ " " + typea + " " + "b type : " + " " + typeb);
      if((c === d) && (typea === "object") && (typeb === "object") ){
                  alert("trouve");
                  deepcompare(a[i],b[j]);
      }
      else if((i === j) && (typeof a[i] !== "object") && (typeof b[j] !== "object") && (a[i] === b[j])){
          alert("non object" + " " + true);
          ver = true;
      }
      else if((i === j) && (typeof a[i] !== "object") && (typeof b[j] !== "object") && (a[i] !== b[j])){
          alert(" non object " + " " + false);
          ver = false;
          break;
      }
     } // fin j
    }// fin i
 }// fin if type object
 else if(((type_a !== "object") && (type_b !== "object")) && (a !== b)){
     alert("non object" + " " + false);
     ver = false
 }
 else if(((type_a !== "object") && (type_b !== "object")) && (a == b)) {
     alert("non object" + " " + true);
     ver = true;
 }
 console.log(ver);
}
//deepcompare(1,2);
//deepcompare("a","b");
//deepcompare("a","a");
//deepcompare(1,1);
deepcompare({1:2, 3:{2:5, 6:7}},{1:2, 3:{2:5, 6:8}});

// to implement

/*function deepcompare(a,b){
  if(a === b)
    return true;
  else
    return false;
}
var ver = true;
tab1 = [2,4,7,9];
tab2 = [2,4,7,9];
for(var i = 0; i < tab1.length; i++)
 if(deepcompare(tab1[i],tab2[i]) === false){  
     ver = deepcompare(tab1[i],tab2[i]);
     break;
 }
console.log(ver);*/

