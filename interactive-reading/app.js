const image = document.querySelector(".Image");
const text = document.querySelector(".Text");
const character = document.querySelector(".Character");   
const t1 = new TimelineMax();

const image_2 = document.getElementById("image2");
const text_2 = document.getElementById("text2");
const alberto_2 = document.getElementById("alberto2");
const character_2 = document.getElementById("character2");
const t2 = new TimelineMax();

const image_3 = document.getElementById("image3");
const text_3 = document.getElementById("text3");
const alberto_3 = document.getElementById("alberto3");
const character_3 = document.getElementById("character3");
const t3 = new TimelineMax();

const image_4 = document.getElementById("image4");
const text_4 = document.getElementById("text4");
const alberto_4 = document.getElementById("alberto4");
const character_4 = document.getElementById("character4");
const t4 = new TimelineMax();

const image_5 = document.getElementById("image5");
const text_5 = document.getElementById("text5");
const alberto_5 = document.getElementById("alberto5");
const character_5 = document.getElementById("character5");
const t5 = new TimelineMax();

const first = new Array("Piko: Verinin görselleştirilmesi her zaman anlamayı kolaylaştırır. Eğer ev boyutlarını ve fiyatlarını incelersen hepsinin belirli aralıklarda olduğunu görebilirsin. Örnek vermek gerekirse 150-200 m2 arası bir evin 350.000- 550.000 TL aralığında olduğu grafikten çıkarabileceğimiz sonuçlardan bir tanesi.", "Alberto: Peki, bu veriyi bir tahmin yapmak için nasıl kullanacağız?");
const second = new Array("Grafikler, bize veri içerisindeki matematiksel ilişkiyi kullanarak veriyi görselleştirme imkanı sunar. Örnek olarak birikim yapmak için her ay kenara 200 TL koyan bir insanın birikimini gösteren bir grafiği inceleyerek başlayalım:");
const third = new Array("Y = 1 ise yani 1. ayda isek: X (birikimimiz) = 1 *200 = 200 TL olur.<br> Y = 2 ise yani 2. ayda isek: X (birikimimiz) = 2*200 = 400 TL olur. <br>  Y = 3 ise yani 3. ayda isek: X (birikimimiz) = 3*200 = 600 TL olur.");
const fourth = new Array("Piko: Tebrikler! Bunu nasıl yapacağımızı anlatmadan önce grafikler üzerinde biraz deney yapalım.");
let index = 0;

text_2.addEventListener('click', function(event){
    ChangeText(text_2,first);
});

text_3.addEventListener('click', function(event){
    ChangeText(text_3,second);
});

text_4.addEventListener('click', function(event){
    ChangeText(text_4,third);
}); 

text_5.addEventListener('click', function(event){
    ChangeText(text_5,fourth);
});



function ChangeText(elem,t){
    if(index < t.length){
        elem.innerHTML = t[index];
        index++; 
    }
}


t1.fromTo(image, 1.5, {x:"-100%"}, {x:"0%", ease: Power2.easeInOut})
.fromTo(text, 1.3, {y:"100%"}, {y:"0%",ease: Power2.easeInOut })
.fromTo(character, 1.3, {x:"200%"}, {x:"0%", ease: Power2.easeInOut});
t1.pause();

t2.fromTo(image_2, 1.5, {x:"-150%"}, {x:"0%", ease: Power2.easeInOut})
.fromTo(character_2, 1.3, {y:"-125%"}, {y:"0%",ease: Power2.easeInOut })
.fromTo(alberto_2, 1.3, {x:"200%"}, {x:"0%", ease: Power2.easeInOut})
.fromTo(text_2, 1.3, {y:"1000%"}, {y:"0%",ease: Power2.easeInOut });
t2.pause();

t3.fromTo(image_3, 1.5, {x:"-150%"}, {x:"0%", ease: Power2.easeInOut})
.fromTo(character_3, 1.3, {y:"-125%"}, {y:"0%",ease: Power2.easeInOut })
.fromTo(alberto_3, 1.3, {x:"200%"}, {x:"0%", ease: Power2.easeInOut})
.fromTo(text_3, 1.3, {y:"1000%"}, {y:"0%",ease: Power2.easeInOut });
t3.pause();

t4.fromTo(image_4, 1.5, {x:"-150%"}, {x:"0%", ease: Power2.easeInOut})
.fromTo(character_4, 1.3, {y:"-125%"}, {y:"0%",ease: Power2.easeInOut })
.fromTo(alberto_4, 1.3, {x:"200%"}, {x:"0%", ease: Power2.easeInOut})
.fromTo(text_4, 1.3, {y:"1000%"}, {y:"0%",ease: Power2.easeInOut });
t4.pause();

t5.fromTo(image_5, 1.5, {x:"-150%"}, {x:"0%", ease: Power2.easeInOut})
.fromTo(character_5, 1.3, {y:"-125%"}, {y:"0%",ease: Power2.easeInOut })
.fromTo(alberto_5, 1.3, {x:"200%"}, {x:"0%", ease: Power2.easeInOut})
.fromTo(text_5, 1.3, {y:"1000%"}, {y:"0%",ease: Power2.easeInOut });
t5.pause();

Reveal.initialize({
	center: true,
	transition: 'linear',
	transitionSpeed: 'slow',
	//disableLayout: true,
	// backgroundTransition: 'slide'
});
Reveal.on( 'slidetransitionend', event => {
    index = 0;
    if(event.currentSlide == document.getElementById("1")){
		t1.resume();
    }
    if(event.currentSlide == document.getElementById("2")){
		t2.resume();
    }
    if(event.currentSlide == document.getElementById("3")){
		t3.resume();
    }
    if(event.currentSlide == document.getElementById("4")){
        t4.resume();
    }
    if(event.currentSlide == document.getElementById("5")){
		t5.resume();
    }        
});