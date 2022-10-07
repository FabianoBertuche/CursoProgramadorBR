
var nomes = ["igor", "jose", "maria"];
var notasA = [7.0, 6.5, 9.5];
var notasB = [ 8.0, 7.0, 8.5];

function media(n1, n2){
  return (n1+n2)/2;
}

function passou(m){
  
  if(m > 7){
    return "Aprovado"
   }else{
    return "cagou"
  }
 
}

for (var index in nomes){
  var result = media(notasA[index],notasB[index])
  console.log(nomes[index]+ " - " +
               notasA[index],notasB[index]+
               " = " + result + " -> " +
               passou(result));
}