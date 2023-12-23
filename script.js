
// DECLARE VARIABLE

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
var songRemover=document.querySelector(".box-remover")

var notific=document.querySelector(".notific")

var nameSong=document.getElementById("nameSong")
var addChange=document.getElementById("change")
var reveals=document.querySelectorAll(".reveal");
var binks=document.querySelectorAll(".shinks")
var nextSong=document.getElementById("next");
var kina =document.getElementById("kina");
var previous=document.getElementById("pre")
var hagarika=document.getElementById("hagarika")

var ipsaBox1=document.querySelector(".ips-box1");
var ipsUpper1=document.querySelector(".i-upper-box1");

var ipsaBox2=document.querySelector(".ips-box2");
var ipsUpper2=document.querySelector(".i-upper-box2");

var ipsaBox3=document.querySelector(".ips-box3");
var ipsUpper3=document.querySelector(".i-upper-box3");
var as1=document.querySelector('.as1');
var as2=document.querySelector('.as2');
var as3=document.querySelector('.as3');



//  BOX OF MUSIC SHITS



function playBox (){
    
    previous.onclick=function(){
        audio.src="./yeat.mp3";
        nameSong.innerText=" YEAT  VVV ft PLAYBOI CARTI ";
        audio.play();
        
               nextSong.style.opacity='1';
               previous.style.opacity='0.4'; 
               if(kina.style.display="none"){
                hagarika.style.display="flex"
            }
         }


       nextSong.onclick=function(){
        nameSong.innerText ="Travis Scott | TIL FURTHER NOTICE ";
        audio.src="./where.mp3";
        audio.play();
        nextSong.style.opacity='0.4';
        previous.style.opacity='1';
        if(kina.style.display="none"){
            hagarika.style.display="flex"
        }
      

        }
    kina.onclick=function(){
        kina.style.display="none"
       hagarika.style.display="flex"
       audio.play();
      }
    hagarika.onclick=function(){
        kina.style.display="flex"
       hagarika.style.display="none"
       audio.pause();
      }

      if(audio.played='true'){
        kina.style.display="none"
        hagarika.style.display="flex"
      }
      else if(audio.paused='true'){
        kina.style.display="flex"
        hagarika.style.display="none"
      }
   
}




// CLICK USER IMAGE TO HEAR THIS FUNTION CALLED "makesound()"


function makeSound(sound){
    var make = new Audio(sound);
    make.play();
};


// THE FUNTIONS WHICH ADDS BOX OF MUSIC ON THE PAGE AFTER YOU SIGN IN

 function choral(){
    theMusic.classList.add("show-music")
 }
 function unchoral(){
    theMusic.classList.remove("show-music")
 }


//  THE AUDIO PLAYING WHEN YOU SIGN YOU FIRST DECLARE IT
    var audio= new Audio();
    


// SCROLLING CODES ,SO WHEN YOU SCROLL IT ADDS THE EFFECT ON NAVBAR


window.addEventListener("scroll",function(){
    // header.classList.toggle("scrolled",this.window.scrollY>95)
    if(this.window.scrollY>=95){
        header.classList.add("scrolled");
       
    };

   
  
    
    if(this.window.scrollY<=95){
        header.classList.remove("scrolled");
       
    };
})
if(this.window.scrollY>=95){
    header.classList.add("scrolled");
};



// USER INFO, YOU CAN SEE THE IMAGE WHEN YOU SIGN IN ON THE NAVBAR

// THERE TWO USERS "serge" AND "guest" AND THE PASSWORD IS THE SAME AS THE NAME

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



//FUNTION WHICH ADDS THE SIGNING PAGE  WHEN YOU OPEN PAGE

function sign(){
    signIn.classList.add("sign-in");
};

 

//  THE CODE WHICH MAKE SPECIFIES IF YOU ALLOWED TO ENTER

// AND ADD INFO OF USER WHEN YOU SIGN IN


signBox.addEventListener("click",function(i){
  if(i.target.className=="next"){

    
    if(input.value==="" || input.value==null){
        signError.innerText="Username is needed"
        i.preventDefault()
    }
    else if (input.value=="serge"){
        audio.src="./yeat.mp3";
        nameSong.innerText=" YEAT  VVV ft PLAYBOI CARTI ";
        signIn.classList.add("sign-out");
        links.appendChild(user);
        imgDemo.src="serge.jpg";
        user.setAttribute("onclick","shark()");
        demo.innerText="serge";
       

        audio.play()
        audio.loop="true"
        theMusic.classList.add("show-music");
        previous.style.opacity=0.4

        playBox();
    

        
        document.body.addEventListener("keydown",function(ev){
            if(ev.key=="w" || ev.key=="W"){
                
              About()
                
            } 
        
        
           
            if(ev.key=="r" || ev.key=="R"){
                
             Abas()
            }
        
            
        })
        

    } 

    else if (input.value=="guest"){
    
        
        audio.src="./Drake - Worst Behavior (Nothing Was The Same) (Lyrics) [e5YzsBC0Ffk].opus"
        audio.play();
        signIn.classList.add("sign-out");
        links.appendChild(guest);
        guest.setAttribute("onclick","shark()");
        demo.innerText="guest";
       imgDemo.src="user.svg";
      
       theMusic.classList.add("show-music");
       audio.loop="true"
     
       nameSong.innerText ="Drake | Worst Behavior ";
       



       nextSong.style.opacity='0.4';


       playBox();

     
       document.body.addEventListener("keydown",function(ev){
        if(ev.key=="w" || ev.key=="W"){
            
          About()
            
        }
    
    
       
        if(ev.key=="r" || ev.key=="R"){
            
         Abas()
        }
    
        
       })

    

      }


      else if(input.value!="guest" || input.value!="serge"){
        
        signError.innerText="your username is incorrect"

      }

  

  }

})

// THIS IS ALSO RELATED TO MUSIC

// AND IF YOU ALREADY REMOVED THE MUSIC BOX TO ADD IT AGAIN CLICK ON USER IMAGE AND THEN CLICK MUSIC

songRemover.onclick=function(){
    unchoral();
}
function change(){
    
   if( theMusic.classList.contains("show-music")){
    userBox.classList.add("show-userBox");
    notific.classList.add("show-music")
   }
   else{
    userBox.classList.remove("show-userBox");
    choral();
   }
}

function notifics(){
    notific.classList.remove("show-music")
}

setInterval(notifics,3000)

// THIS DISPLAY A SOUND AS YOU CLICK ON THE USER IMAGE

// AND ALSO ADDS A BOX AS YOU CLICK ON USER IMAGE

function shark(){
    makeSound("sound.mp3")
    userBox.classList.toggle("show-userBox");
    return true;
}



// THIS IS WAITS 3 SECONDS AND THEN ADDS THE SIGNING PAGE

setTimeout(sign,3000)




//  LOADING CODES, AFTER THE PAGE HAVE LOADED REMOVE THE LOADING SCREEN

window.addEventListener("load",function(){
    const loader=document.querySelector(".loader").classList.add("hide-loader")
       
   

    loader.addEventListener("transtionend",function(){
        
        document.body.removeChild(loader)
     
    }
    )
})

// CODES FOR PLAYING VIDEO, TO SEE THE VIDEO CLICK "W" AND "R" TO REMOVE IT AFTER YOU SIGN

// OR CLICK WATCH VIDEO

 var vinDiv=document.createElement("div")
 vinDiv.classList.add("vindiv")
var vinland= document.createElement("video");
vinland.src="vinland.mp4";
vinland.classList.add("vinland")



function Abas(){
    watch.classList.remove("add")
    // watch.setAttribute("autoplay")
    document.body.style.height="100%"
    document.body.style.overflow="visible  "
   vinland.pause()
   theMusic.classList.add("show-music");

audio.play()  

}

 var sas=document.getElementById("sas")
 var sasPlay=document.querySelector(".play")
 sas.style.fill="#FFFFFF" 
  function sast(){
     
    sas.style.fill="#FFFFFF" 
    sasPlay.style.border='2.5px solid white'
  }

 function sasy(){
    sasPlay.style.border='2.5px solid #00b7dc'
    sas.style.fill='#00b7dc'
   
 }
 
function About(){
   
   sasy() 
    theMusic.classList.remove("show-music");

    watch.classList.add("add")
        document.body.style.height="10%"
        watch.appendChild(vinDiv);
        document.body.style.overflow="hidden"
        vinDiv.appendChild(vinland)
        // vinDiv.appendChild(vinPlay)
        // vinDiv.appendChild(vinPause)
        vinland.loop="true"
        audio.pause();
        vinland.controls="true"

}
setInterval(sast,400)


removeWatch.onclick=function(){
   watch.classList.remove("add")
   theMusic.classList.add("show-music");
   document.body.style.height="90%"
   document.body.style.overflow="visible"
   vinland.pause()
   audio.play()
}

// THIS EXPAND WHITE 3 BOX
ipsaBox1.classList.add('expand')
ipsUpper1.classList.add("aa")
as1.classList.add("rotas")
ipsUpper1.onclick=function(){

    ipsUpper2.classList.remove("aa")
    as2.classList.remove("rotas")
    ipsUpper3.classList.remove("aa")
    as3.classList.remove("rotas")
    ipsUpper1.classList.add("aa")
    as1.classList.add("rotas")

    ipsaBox1.classList.toggle('expand')
    ipsaBox3.classList.remove('expand')
    ipsaBox2.classList.remove('expand')

    if(!ipsaBox1.classList.contains("expand")){
        ipsUpper1.classList.remove("aa")
        as1.classList.remove("rotas")
    }
    
}
ipsUpper2.onclick=function(){

    ipsUpper3.classList.remove("aa")
    as3.classList.remove("rotas")
    ipsUpper2.classList.add("aa")
    as2.classList.add("rotas")
    ipsUpper1.classList.remove("aa")
    as1.classList.remove("rotas")

    ipsaBox1.classList.remove('expand')
    ipsaBox3.classList.remove('expand')
    ipsaBox2.classList.toggle('expand')

       
    if(!ipsaBox2.classList.contains("expand")){
        ipsUpper2.classList.remove("aa")
        as2.classList.remove("rotas")
    }
    

}
ipsUpper3.onclick=function(){

    ipsUpper3.classList.add("aa")
    as3.classList.add("rotas")
    ipsUpper2.classList.remove("aa")
    as2.classList.remove("rotas")
    ipsUpper1.classList.remove("aa")
    as1.classList.remove("rotas")

    ipsaBox1.classList.remove('expand')
    ipsaBox3.classList.toggle('expand')
    ipsaBox2.classList.remove('expand')

       
    if(!ipsaBox3.classList.contains("expand")){
        ipsUpper3.classList.remove("aa")
        as3.classList.remove("rotas")
    }
    
}



// THE ACTION OF FUNCTION IS ADD YOUR ELEMENT OR PAGES AS YOU SCROLL 



window.addEventListener("scroll",reveal);



function reveal(){

   reveals.forEach(reval=>{
    var windowheight=window.innerHeight;
    var revealtop=reval.getBoundingClientRect().top;
    var revealpoint=0;

    if(revealtop <= windowheight -revealpoint){
        reval.classList.add("active");
    }
    else{
        reval.classList.remove("active");
    }

   })

}

reveals.forEach(reval=>{
    var windowheight=window.innerHeight;
    var revealtop=reval.getBoundingClientRect().top;
    var revealpoint=0;

    if(revealtop <= windowheight -revealpoint){
        reval.classList.add("active");
    }
 

   })




     
    
// var vinPlay =document.createElement("img");
// vinPlay.src="play.svg"
// vinPlay.style.height="70px"
// vinPlay.style.width="70px"
// vinPlay.style.cursor="pointer"
// vinPlay.classList.add('vinplay')
// vinPlay.setAttribute("onclick","vinclay()");




// var vinPause =document.createElement("img");
// vinPause.src="pause.svg"
// vinPause.style.height="70px"
// vinPause.style.width="70px"
// // vinPause.style.cursor="pointer"
// vinPause.style.opacity="0";
// vinPause.style.pointerEvents="none"
// vinPause.classList.add('vinplay')
// vinPause.setAttribute("onclick","vincause()");





// function vinclay(){

//     vinland.onmouseover=function(){
          
//         vinPause.style.opacity="1";
//         vinPause.style.pointerEvents="all"

//     }
    
//     vinland.onmouseout=function(){
          
//         vinPause.style.opacity="0";
//         vinPause.style.pointerEvents="none"

//     }

//     vinland.play()
    
//    vinPlay.style.opacity="0";
//    vinPlay.style.pointerEvents="none"

// }
// function vincause(){
//     vinland.pause()
//     vinPlay.style.opacity="1";
//     vinPlay.style.pointerEvents="all"

//     vinland.onmouseover=function(){
          
//         vinPause.style.opacity="0";
//         vinPause.style.pointerEvents="none"

//     }

//     vinPause.style.opacity="0";
//     vinPause.style.pointerEvents="none"
// }

// user.onclick=function(){
//     userBox.classList.toggle("show-userBox")
// }








 