var tl= gsap.timeline();

tl
.to("#fs",{
    height: 0,
    duration: 2,
    ease: Expo.easeInOut
})

.to("#cover",{
    height: "100%",
    duration: 2,
    delay: -2,
    ease: Expo.easeInOut
})

.to("#black",{
    height: "100%",
    duration: 2,
    delay: -1.5,
    ease: Expo.easeInOut
})

document.querySelectorAll(".reveal").forEach(function(elem){

    let spanParent = document.createElement("span");
    let spanchild = document.createElement("span");

    spanParent.classList.add("parent");
    spanchild.classList.add("child");

    spanchild.textcontent = elem.textContent;
    spanParent.appendChild(spanchild);

    elem.innerHTML= "";
    elem.appendChild(spanParent);

})