
var box =document.querySelector(".boxes");

function Nigga(){
  box.classList.toggle("bosa")
}

document.body.addEventListener("keyup",function(ev){
    if(ev.key=="b" || ev.key=="B"){
        Nigga()
    }
})