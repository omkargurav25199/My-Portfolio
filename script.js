var tl= gsap.timeline();

tl
.to("#fs",{
    height: 0,
    duration: 3,
    ease: Expo.easeInOut
})

.to("#cover",{
    height: "100%",
    duration: 1,
    delay: -0.5,
    ease: Expo.easeInOut
})

.to("#black",{
    height: "100%",
    duration: 1,
    delay: -0.5,
    ease: Expo.easeInOut
});

function revealToSpan(){
    document.querySelectorAll(".reveal").forEach(function(elem){
        // create two spans
        let spanParent = document.createElement("span");
        let spanchild = document.createElement("span");
    
        // parent and child both set their respective classes
        spanParent.classList.add("parent");
        spanchild.classList.add("child");
    
        spanchild.innerHTML = elem.innerHTML;
        spanParent.appendChild(spanchild);
    
        // elem replaces its values with parent span
    
        elem.innerHTML="";
    
        elem.appendChild(spanParent);
    
    
    });
}


revealToSpan();

gsap.to(".parent .child", {
    y: "-100%",
    duration:1.7,
    delay:0.1,
    ease: Circ.easeInOut

})




const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});

function firstpage(){
    var tl= gsap.timeline();
    tl.from("#nav",{
        y: '-10',
        opacity: 0,
        duration: 1,
        delay: 1.9,
        ease: Expo.easeInOut
    })

    tl.to(".boundingelem",{
        y: 0,
        duration: 1.8,
        delay: -0.6,
        ease: Expo.easeInOut,
        stagger: 0.2
    })

    .from("#herofooter",{
        y: '-10',
        opacity: 0,
        delay: -0.5,
        duration: 1,
        ease: Expo.easeInOut
    })
}


var timeout;

function circleflat(){

    var xscale= 1;
    var yscale= 1;

    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", function(dets){
        this.clearTimeout(timeout);

        var xdiff = dets.clientX-xprev;
        var ydiff = dets.clientY-yprev;
        xprev= dets.clientX;
        yprev= dets.clientY;

        xscale= gsap.utils.clamp(0.8, 1.2, xdiff);
        yscale= gsap.utils.clamp(0.8, 1.2, ydiff);

        circleMouseFollower(xscale, yscale);
        timeout = setTimeout(function(){
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;

        }, 100);
    })
}



function circleMouseFollower(xscale, yscale){
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
}

circleflat();
circleMouseFollower();
firstpage();


// Function to get the current time
        function getCurrentTime() {
            var currentDate = new Date();
            var hours = currentDate.getHours();
            var minutes = currentDate.getMinutes();
            var seconds = currentDate.getSeconds();

            // Format the time as HH:MM AM/PM
            var timeString = hours % 12 + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + (hours >= 12 ? 'PM' : 'AM');

            // Update the content of the #currentTime element
            document.getElementById('currentTime').innerText = timeString;
        }

        // Call the function to update the time immediately
        getCurrentTime();

        // Update the time every second
        setInterval(getCurrentTime, 1000);















// Select 3 elementes and use mousemove on three elements, find out the position of mouse, that is find mouse x and y cordinate, 
//Now instead of mouse position show image and move image. Move image while rotating it.

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        })
        

    });
});