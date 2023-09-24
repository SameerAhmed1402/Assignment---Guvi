let count=10;
function display(){
    document.getElementById("countdown").textContent=count;
    count--;
    if(count>0){
        setTimeout(display,3000);
         }
    else{
        finished();
    }
}
function finished(){
    document.getElementById("countdown").textContent="Happy Independence day";
}
window.onload=display;