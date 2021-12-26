function reverseNum(num){
  var reverse=0;
  var temp=0;

while(num!=0){
  reverse=reverse*10+(num%10);
  num=num/10;
  num=parseInt(num);
}

console.log(reverse);
}

reverseNum(12345)