const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
// every fixed position element should be out of main div ,because locomotive scroll does not allow anyone to be fixed

gsap.from(".text h1",{
    y:400,
    opacity:0,
    duration:1,
    stagger:.3
})
gsap.from("nav",{
    y:-100,
    stagger:2,
    opacity:0,
    duration:1
})

var cur=document.querySelector(".cursor")
window.addEventListener("mousemove",function(dets){
    gsap.to(cur,{
        left:dets.x,
        top:dets.y,
        // duration:1
    })
    // cur.style.left=dets.clientX+"px";
    // cur.style.top=dets.clientY+"px";
})