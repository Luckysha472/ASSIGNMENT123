// 1)positive or negative
function positive(){
var d=Number(document.querySelector(".pos").value)
var positive=""
if(d>0){
    positive="positive number"
}
else{
    positive="negative number"
}
document.querySelector(".task1").innerHTML=positive
}

// 2)greatest number
function greatest(){
    var d=Number(document.querySelector(".greatNum1").value)
    var e=Number(document.querySelector(".greatNum2").value)
    var greatNum=""
    if(d>e){
        greatNum=d+" is the Greatest  Number"
    }
    else{
        greatNum=e+" is the Greatest Number"
    }
    document.querySelector(".task2").innerHTML=`<b>${greatNum}</b>`

}
// 3)smallest Number
document.querySelector(".smallNum").addEventListener("click",()=>{
    var a=Number(document.querySelector(".small1").value)
    var b=Number(document.querySelector(".small2").value)
    var c=Number(document.querySelector(".small3").value)
    document.querySelector(".task3").innerHTML=`${Math.min(a,b,c)} is the smallest Number`
})
// 4)odd or even
document.querySelector(".even").addEventListener("click",()=>{
    var f=Number(document.querySelector(".oddEven").value)
    var d=""
    // ternary op
   f%2==0 ? d="Even Number":d="Odd Number"
   document.querySelector(".task4").innerHTML=d
})
// 5)(1 to 5) full form
document.querySelector(".form1").addEventListener("click",()=>{
    var f=Number(document.querySelector(".fullForm").value)
    var d=["one","two","three","four","five"]
    document.querySelector(".task5").innerHTML=d[f-1]
})


// task----2
//1) Enter the bill amount
document.querySelector(".bill2").addEventListener("click",()=>{
    var d=Number(document.querySelector(".bill").value)
    var w=""
    if(d>2000){
       w=d-(d*(10/100))
    }
    else{
        w=d
    }
    document.querySelector(".bill3").innerHTML=`The Bill amount is ${w} `
})
// 2) Apply a hike of 30%
document.querySelector(".hike").addEventListener("click",()=>{
    var a=Number(document.querySelector(".salary").value)
    var b=document.querySelector(".Experience").value
    var c=""
    if(a<30000 && b>3){
       c=a+(a*(30/100))
    }
    else{
        c="Not eligible for getting Hike"
    }
    document.querySelector(".hikeCheck").innerHTML=`The Salary is ${c}`
})
// 3-apply 3 percent service charges
document.querySelector(".click").addEventListener("click",()=>{
    var a=Number(document.querySelector(".Amount").value)
    var b=document.querySelector(".Payment").value
    var c=a
    if(b=="card"){
      c+=a*(8/100)
    }
    else{
        c+=a*(5/100)
    }
    document.querySelector(".gst").innerHTML=`Final Bill Amount is ${c}`
})
// 4-Medical leave
document.querySelector(".Check1").addEventListener("click",()=>{
    var a=Number(document.querySelector(".days").value)
    var b=Number(document.querySelector(".dayAttended").value)
    var b1=Number(document.querySelector(".medicalLeave").value)
    var c=''
    var averageDays=a*0.75
    if(b>averageDays || b1=="Yes"){
        c="You are Eligible for the Leave"
    }
    else{
        c="Not eligible for Leave"
    }
    document.querySelector(".Medical").innerHTML=c
    // another method --(100*attendeddays)/totaldays;
})
// Grade system
document.querySelector(".gradeSystem").addEventListener("click",()=>{
    var a=Number(document.querySelector(".grade").value)
    var b=""
    if(a>=90 && a<=100){
     b="A Grade"
    }
    else if(a>=80 && a<90){
     b="B Grade"
    }
    else if(a>=70 && a<80){
        b="C Grade"
       }
    else if(a>=60 && a<70){
        b="D Grade"
       }
       else if(a>=50 && a<60){
        b="E Grade"
       }
    else{
        b="Fail Aitahh"
    }
    document.querySelector(".system").innerHTML=b

})
// task ---3
document.querySelector(".north").addEventListener("click",()=>{
    document.querySelector(".rec1").style.backgroundColor="green"
    document.querySelector(".rec2").style.backgroundColor="red"
    document.querySelector(".rec3").style.backgroundColor="red"
    document.querySelector(".rec4").style.backgroundColor="red"
  })
  document.querySelector(".south").addEventListener("click",()=>{
    document.querySelector(".rec1").style.backgroundColor="red"
    document.querySelector(".rec2").style.backgroundColor="green"
    document.querySelector(".rec3").style.backgroundColor="red"
    document.querySelector(".rec4").style.backgroundColor="red"
  })
  document.querySelector(".west").addEventListener("click",()=>{
    document.querySelector(".rec1").style.backgroundColor="red"
    document.querySelector(".rec2").style.backgroundColor="red"
    document.querySelector(".rec3").style.backgroundColor="red"
    document.querySelector(".rec4").style.backgroundColor="green"
  })
  document.querySelector(".east").addEventListener("click",()=>{
    document.querySelector(".rec1").style.backgroundColor="red"
    document.querySelector(".rec2").style.backgroundColor="red"
    document.querySelector(".rec3").style.backgroundColor="green"
    document.querySelector(".rec4").style.backgroundColor="red"
  })
  