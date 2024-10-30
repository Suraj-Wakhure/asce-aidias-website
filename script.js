var crsr = document.querySelector("#cursor")
var crsrbr = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    crsrbr.style.left = dets.x - 250+"px"
    crsrbr.style.top = dets.y-250+"px"
})




// gsap.to("#nav",{
//     backgroundColor : "#000",
//     height : "110px",
//     duration: 0.5,
//     scrollTrigger:{
//         trigger:"#nav",
//         scroller:"body",
//         //markers:true,
//         start:"top -10%",
//         end:"top -11%",
//         scrub:1

//     }
// })
gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
       // markers:true
       start:"top -25%",
       end:"top -70%",
       scrub:2
    }
})