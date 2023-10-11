Shery.imageEffect(".back",{style:2,debug:true,goeey:true});


var h1s=document.querySelectorAll("h1");
var index=0;
document.querySelector(".main").addEventListener("click",()=>{
    gsap.to(h1s[index],{
        top:"-=100%",
        ease:Expo.easeInOut,
        duration:1,
        onComplete:function(){
            gsap.set(this.targets[0],{top:"100%"});
        },
    });
    
    index===h1s.length-1?(index=0):index++;
    gsap.to(h1s[index],{
        top:"-=100%",
        ease:Expo.easeInOut,
        duration:1,
    });
    
})