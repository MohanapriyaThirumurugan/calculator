const cal=document.createElement("div");
cal.setAttribute("class","container cc")
const para=document.createElement("p")
para.innerText="this is my first application using dom i created the claculator using dom-javaScript and bootstrap and html and css"
para.setAttribute("id","description")
const title=document.createElement("h1")
title.innerHTML="DOM MANIPULATION OF CALCULATOR"
title.setAttribute("id","title")
const rowdiv=document.createElement("div")
rowdiv.setAttribute("class","row ")
const btn=document.createElement("input")
btn.innerHTML="0";
btn.setAttribute("class","col-12 c1")
btn.setAttribute("onclick","send()")
btn.setAttribute("type","text")
btn.setAttribute("id","display")
// btn.setAttribute("id","result")

cal.append(title,para,rowdiv,btn,)
document.body.append(cal)

// 2 row
const rowdiv1=document.createElement("div")
rowdiv1.setAttribute("class","row" )

const btn1=document.createElement("button")
btn1.innerHTML="1"
btn1.setAttribute("class", "col","class")
btn1.setAttribute("onclick","send('1')")

const btn2=document.createElement("button")
btn2.innerHTML="2"
btn2.setAttribute("class", "col","class")
btn2.setAttribute("onclick","send('2')")

const btn3=document.createElement("button")
btn3.innerHTML="3"
btn3.setAttribute("class", "col","class" ,"cc")
btn3.setAttribute("onclick","send('3')")

const btnadd=document.createElement("button")
btnadd.innerHTML="+"
btnadd.setAttribute("class", "col","class" ,"cc")
btnadd.setAttribute("onclick","send('+')")
btnadd.setAttribute("id","add")

//append
rowdiv1.append(btn1,btn2,btn3,btnadd);
cal.append(rowdiv1);
document.body.append(cal)
//3row
const rowdiv2=document.createElement("div")
rowdiv2.setAttribute("class","row")

const btn4=document.createElement("button")
btn4.innerHTML="4"
btn4.setAttribute("class", "col","class" ,"cc")
btn4.setAttribute("onclick","send('4')")

const btn5=document.createElement("button")
btn5.innerHTML="5"
btn5.setAttribute("class", "col","class" ,"cc")
btn5.setAttribute("onclick","send('5')")

const btn6=document.createElement("button")
btn6.innerHTML="6"
btn6.setAttribute("class", "col","class" ,"cc")
btn6.setAttribute("onclick","send('6')")

const btnsub=document.createElement("button")
btnsub.innerHTML="-"
btnsub.setAttribute("class", "col","class" ,"cc")
btnsub.setAttribute("onclick","send('-')")
btnsub.setAttribute("id","subtract")
//append
rowdiv2.append(btn4,btn5,btn6,btnsub);
cal.append(rowdiv2);
document.body.append(cal)
//4 row
const rowdiv4=document.createElement("div")
rowdiv4.setAttribute("class","row")

const btn7=document.createElement("button")
btn7.innerHTML="7"
btn7.setAttribute("class", "col","class" ,"cc")
btn7.setAttribute("onclick","send('7')")

const btn8=document.createElement("button")
btn8.innerHTML="8"
btn8.setAttribute("class", "col")
btn8.setAttribute("onclick","send('8')")

const btn9=document.createElement("button")
btn9.innerHTML="9"
btn9.setAttribute("class", "col","class")
btn9.setAttribute("onclick","send('9')")

const btnh=document.createElement("button")
btnh.innerHTML="0"
btnh.setAttribute("class", "col zero")
btnh.setAttribute("onclick","send('0')")

//append
rowdiv4.append(btn7,btn8,btn9,btnh);
cal.append(rowdiv4);
document.body.append(cal)

//5 row
const rowdiv3=document.createElement("div")
rowdiv3.setAttribute("class","row")

const btnmul=document.createElement("button")
btnmul.innerHTML="*"
btnmul.setAttribute("class", "col","class")
btnmul.setAttribute("onclick","send('*')")

const btndiv=document.createElement("button")
btndiv.innerHTML="/"
btndiv.setAttribute("class", "col","class")
btndiv.setAttribute("onclick","send('/')")

const btneq=document.createElement("button")
btneq.innerHTML="="
btneq.setAttribute("class", "col")
btneq.setAttribute("onclick","calculate()")
btneq.setAttribute("id","equal")

const btnmodules=document.createElement("button")
btnmodules.innerHTML="%"
btnmodules.setAttribute("class", "col")
btnmodules.setAttribute("onclick","send('%')")


//append
rowdiv3.append(btnmul,btndiv,btneq,btnmodules);
cal.append(rowdiv3);
document.body.append(cal)



const rowdiv6=document.createElement("div")
rowdiv6.setAttribute("class","row")

 const btndel=document.createElement("button")
 btndel.innerHTML="del"
 btndel.setAttribute("class", "col",)
 btndel.setAttribute("onclick","del()")

const btnback=document.createElement("button")
btnback.innerHTML="clear"
btnback.setAttribute("class", "col",)
btnback.setAttribute("onclick","Cl()")
btnback.setAttribute("id","clear")
//append
rowdiv6.append(btndel,btnback)
cal.append(rowdiv6)
document.body.append(cal)

//logic
const output=document.getElementById("display")



if(output==="string"){
    console.log("invalid");
    
}
else{
    function send(val){
        display.value +=val;
    }
    function calculate(){
        try{
            display.value=eval(display.value)
        }
        catch(err){
            alert("invalid")
        }
    }
      function Cl(){
        display.value=" ";
      }
      function del(){
        display.value=display.value.slice(0,-1)
      }
}
// function send(val){
//     display.value +=val;
// }
// function calculate(){
//     try{
//         display.value=eval(display.value)
//     }
//     catch(err){
//         alert("invalid")
//     }
// }
//   function Cl(){
//     display.value=" ";
//   }
//   function del(){
//     display.value=display.value.slice(0,-1)
//   }












