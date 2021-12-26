isPrime(37);
function isPrime(num){
var num;
var i;
if(num==1){
  console.log(num+' is neither prime nor composite');
}
else{
for(i=2;i<num;i++){
if(num%i==0){
    console.log(num+' is not a prime number');
    break;
  }
  else{
    console.log(num+' is a prime number');
    break;
    }
  }
}
}