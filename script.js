var tl= gsap.timeline();
tl.
to("#leftline,#rightline",{
    height:"0%",
    duration:2,
    stagger:.1,
    ease:Expo.easeInOut,
})
.to("#top",{
    top:"100%",
    duration:2,
    stagger:.1,
    ease:Expo.easeInOut,
})
.from("#nav a,h2,h5,p,h1",{
    y:40,
    duration:2,
    stagger:.1,
    delay:2,
    ease:Expo.easeInOut,

},"-=3")
.from("#rr a",{
    x:30,
    duration:2,
    stagger:.1,
    ease:Expo.easeInOut,
},"-=3")
.to("#lr img",{
    left:0,
    duration:3,
    stagger:.1,
    ease:Expo.easeInOut,
},"-=1.5")
.to("#rl img",{
    top:0,
    duration:3,
    stagger:.1,
    ease:Expo.easeInOut,
},"-=3")