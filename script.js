var watch=document.querySelector(".watch");
var homeWatch=document.querySelector(".home-watch");
var links =document.querySelector(".links");
var removeWatch=document.querySelector(".remove-watch");
var header=document.querySelector("header");
var signIn=document.querySelector(".signIn");
var signBox=document.querySelector(".sign");
var input=document.querySelector(".sit");
var signError=document.getElementById("error");
var userBox=document.querySelector(".userBox");
var logOut=document.querySelector(".logOut");
var theMusic=document.querySelector(".the-music");
var demo=document.getElementById("demo")
var imgDemo=document.getElementById("img-demo")

//  MUSIC SHITS



function makeSound(sound){
    var make = new Audio(sound);
    make.play();
};


 function choral(){
    theMusic.classList.remove("show-music")
 }
    var audio= new Audio();
    // audio.src="./choral.mp3";
   setInterval(choral,3500)

// SCROLLING CODES

window.addEventListener("scroll",function(){
    // header.classList.toggle("scrolled",this.window.scrollY>95)
    if(this.window.scrollY>=95){
        header.classList.add("scrolled");
       
    };

    if(this.window.scrollY>=255){
       
        audio.loop="true"
        audio.play()
       audio.autoplay=true;
    };
    if(this.window.scrollY<255){
        theMusic.classList.add("show-music")
      
    };
    if(this.window.scrollY<=55){
        audio.pause()
       
    };
    
    if(this.window.scrollY<=59){
        header.classList.remove("scrolled");
       
    };
})
if(this.window.scrollY>=95){
    header.classList.add("scrolled");
};



// SIGN IN

let user=document.createElement("div")
let userImg=document.createElement("img");
userImg.src="serge.jpg"
userImg.classList.add("user-img")
user.appendChild(userImg)
user.classList.add("user")

let guest=document.createElement("div")
let guestImg=document.createElement("img");
guestImg.src="user.svg"
guestImg.style.backgroundColor="white"
guestImg.classList.add("user-img")
guest.appendChild(guestImg)
guest.classList.add("user")


// let a =document.createElement("a");
// a.innerText="serge"


function sign(){
    signIn.classList.add("sign-in");
};




signBox.addEventListener("click",function(i){
  if(i.target.className=="next"){

    
    if(input.value===""){
        signError.innerText="Username is needed"
        i.preventDefault()
    }
    else if (input.value=="serge"){
        signIn.classList.add("sign-out");
        links.appendChild(user);
        imgDemo.src="serge.jpg"
        user.setAttribute("onclick","shark()")
        demo.innerText="serge"
    } 

    else if (input.value=="guest"){
        signIn.classList.add("sign-out");
        links.appendChild(guest);
        guest.setAttribute("onclick","shark()")
        demo.innerText="guest"
       imgDemo.src="user.svg"
    }
    
    else{
        signError.innerText="Username is incorrect !!!"
        i.preventDefault()
    }
  }

})
// user.onclick=function(){
//     userBox.classList.toggle("show-userBox")
// }

function shark(){
    makeSound("sound.mp3")
    userBox.classList.toggle("show-userBox");
    return true;
}




// setTimeout(sign,3000)

//  LOADING CODES

window.addEventListener("load",function(){
    const loader=document.querySelector(".loader").classList.add("hide-loader")
       
   

    loader.addEventListener("transtioned",function(){
        
        document.body.removeChild(loader)
     
    }
    )
})

// CODES FOR PLAYING VIDEO

function Abas(){
    watch.classList.remove("add")
    // watch.setAttribute("autoplay")
    document.body.style.height="100%"
    document.body.style.overflow="visible  "
}

function About(){
    watch.classList.add("add")
    
        document.body.style.height="10%"
        document.body.style.overflow="hidden"
   
}
removeWatch.onclick=function(){
   watch.classList.remove("add")
   document.body.style.height="90%"
   document.body.style.overflow="visible"
}

document.body.addEventListener("keydown",function(ev){
    if(ev.key=="w" || ev.key=="W"){
        
      About()
        
    }
   
    if(ev.key=="r" || ev.key=="R"){
        
     Abas()
    }

    
})
