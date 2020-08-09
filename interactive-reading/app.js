const image = document.querySelector(".Image");
const text = document.querySelector(".Text");
const character = document.querySelector(".Character");   

const t1 = new TimelineMax();


t1.fromTo(image, 2, {x:"-100%"}, {x:"0%", ease: Power2.easeInOut})
.fromTo(text, 1.3, {y:"100%"}, {y:"0%",ease: Power2.easeInOut })
.fromTo(character, 1.3, {x:"-100%"}, {x:"0%", ease: Power2.easeInOut});



