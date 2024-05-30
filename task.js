// q----1
document.querySelector(".yes").addEventListener("click",()=>{
    
    let c=Number(document.querySelector(".range1").value)
    let d=Number(document.querySelector(".range2").value)
    for(let num=c;num<=d;num++){
        document.querySelector(".no").innerHTML+=`<p>${num}</p>`;
    }
  
})
// q------2
document.querySelector(".yes2").addEventListener("click",()=>{
  let c=Number(document.querySelector(".multi").value)
  let r=c
  for(let num=1;num<=10;num++){
    document.querySelector(".fivemulti").innerHTML+=`<p>${c}*${num}=${r}</p>`;
    r+=5
  }
})
// q---3
document.querySelector(".ques2").addEventListener("click",()=>{
  let c=Number(document.querySelector(".ques1").value)
  let r=c
  for(let num=1;num<=10;num++){
    document.querySelector(".ques3").innerHTML+=`<p>${c}*${num}=${r}</p>`;
    r+=c
  }
})
// q----4
document.querySelector(".ques43").addEventListener("click",()=>{
let c=Number(document.querySelector(".ques41").value)
let d=Number(document.querySelector(".ques42").value)
let r=0
for(let num=c;num<=d;num++){
     r+=num
  }
  document.querySelector(".ques44").innerHTML=r;
})
// q-----5
document.querySelector(".ques53").addEventListener("click",()=>{
  let c=Number(document.querySelector(".ques51").value)
  let d=Number(document.querySelector(".ques52").value)
  let r=0
  let ki=0
  for(let num=c;num<=d;num++){
       r+=num;
       ki++; 
    }
    document.querySelector(".ques54").innerHTML=r/(ki);
  })
// task-------------------
document.querySelector(".oddeven").addEventListener("click",()=>{
  var f=document.querySelector(".even").value
  if(f%2==0){
    document.querySelector(".ansofoddeven").innerHTML+="Even Number"
  }
  else{
    document.querySelector(".ansofoddeven").innerHTML+="odd Number"

  }
})
// q--------2
document.querySelector(".reverseanumber").addEventListener("click",()=>{
  var d=document.querySelector(".reverse").value
  var string=d.split('').reverse().join('')
  document.querySelector(".reverse1").innerHTML=string
})
// q---------3
document.querySelector(".palinCheck").addEventListener("click",()=>{
  var palindromeNumber=Number(document.querySelector(".paliInput").value)
  var temp=palindromeNumber
  var result=0
  while(temp>0){
    var remove=temp%10
    result=(result*10)+remove
    temp=Math.floor(temp/10)
  }
if(palindromeNumber==result){
  var answer1="The Number is Palindrome"
  document.querySelector(".paliAnswer").innerHTML=answer1
}
else{
  var answer2="The Number is Not A Palindrome"
  document.querySelector(".paliAnswer").innerHTML=answer2
 
}

})
// q---4
document.querySelector(".armCheck").addEventListener("click",()=>{
  var d=document.querySelector(".Armvalue").value
  var temp=d
  var result=0
  while(temp>0){
    var lastValue=temp%10
    result+=lastValue**3
    temp=Math.floor(temp/10)
  }
if(d==result){
  var answer1="The number is Armstrong"
  document.querySelector(".armAnswer").innerHTML=answer1
}
else{
  var answer2="The number is not a Armstrong"
  document.querySelector(".armAnswer").innerHTML=answer2
}
})
// q-----5
document.querySelector(".primeCheck").addEventListener("click",()=>{
  var d=document.querySelector(".primeValue").value
  if(d<=1){
    answer1="Not a prime Number"
    document.querySelector(".primeAnswer").innerHTML=answer1
  }
  else{
    for(var num=2;num<d;num++){
      if(d%num==0){
        answer2="prime not Number"
        document.querySelector(".primeAnswer").innerHTML=answer2
        break
    }
    else{
      answer3="prime Number"
        document.querySelector(".primeAnswer").innerHTML=answer3
        break
    }
    }
  }
})
// q-------6
document.querySelector(".EvenCheck").addEventListener("click",()=>{
  var d=document.querySelector(".OddEvenValue").value
  var sumOFEven=0
  var sumOfOdd=0
  for(var num=1;num<=d;num++){
    if(num%2==0){
      sumOFEven+=num
    }
    else{
      sumOfOdd+=num
    }
  }
  document.querySelector(".sumAnswer").innerHTML+=sumOFEven
  document.querySelector(".sumAnswer1").innerHTML+=sumOfOdd
})
// q---7
document.querySelector(".oddCheck").addEventListener("click",()=>{
  var d=document.querySelector(".oddvalue").value
  for(var num=1;num<=d;num++){
    if(num%2!=0){
      document.querySelector(".oddofAnswer").innerHTML+=`${num}${" "}`
  }
  }
})
// q------8
document.querySelector(".EnterValueCheck").addEventListener("click",()=>{
  var d=document.querySelector(".EnterValue").value
  for(var num=1;num<=d;num++){
    if(num%10!=5){
      document.querySelector(".fiveofAnswer").innerHTML+=`${num}${" "}`
  }
  }
})
// Task-------8
document.querySelector(".desCheck").addEventListener("click",()=>{
  var descendingValue1=document.querySelector(".desValues1").value
  var descendingValue2=document.querySelector(".desValues2").value
  var maximum=max(descendingValue1,descendingValue2)
  var mininum=min(descendingValue1,descendingValue2)
  for(var num=maximum;num>mininum;num--){
    if(num%2!=0){
      document.querySelector(".desAnswer").innerHTML+=num
    }
  }
})
// q---2
document.querySelector(".midCheck").addEventListener("click",()=>{
  var middleValue=document.querySelector(".midValue1").value
  var string=middleValue.tostring()
  var length=(string.length)/2
  for(var num=length;num<string.length;num++){
    document.querySelector(".desAnswer").innerHTML+=string[num]
  }
})