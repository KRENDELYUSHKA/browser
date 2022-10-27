var browser,uAgent=navigator.userAgent;
var x=prompt("Введите x:");;
if(uAgent.indexOf("Chrome")>-1){
    x=Number(x)+2; 
}
else if(uAgent.indexOf("Safari")>-1){
    x=2*x;
}
else if(uAgent.indexOf("Firefox")>-1){
    x=Number(x*x)+2;
}
document.write(x);