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
