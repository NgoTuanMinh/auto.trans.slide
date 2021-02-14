
var btnElements = document.querySelectorAll('.btn__transition-list li');
var slideElements = document.querySelectorAll('.wrap__slide');
for (let i = 0; i < btnElements.length; i++) {
    btnElements[i].onclick = function() {
        for (let j = 0; j < btnElements.length; j++) {
            if (j === i){}
            else {
                btnElements[j].classList.remove('btn-active');
                slideElements[j].classList.remove('wrap__slide-active');
            }
        }
        this.classList.add('btn-active');
        slideElements[i].classList.add('wrap__slide-active');
        clearInterval(0.01);
    }
}

    var timeSlide = setInterval(function() {
        autoSlide()
    }, 5000)
   
function autoSlide() {
    var vitriSlide;
    var slideHientai = document.querySelector('.wrap__slide-active');
    for (vitriSlide = 0; slideHientai = slideHientai.previousElementSibling; vitriSlide++) {}
    if (vitriSlide == btnElements.length - 1) {
        btnElements[vitriSlide].classList.remove('btn-active');
        slideElements[vitriSlide].classList.remove('wrap__slide-active'); 
        btnElements[0].classList.add('btn-active');
        slideElements[0].classList.add('wrap__slide-active');
    }
    else{
        btnElements[vitriSlide].classList.remove('btn-active');
        slideElements[vitriSlide].classList.remove('wrap__slide-active'); 
        btnElements[(vitriSlide+1)].classList.add('btn-active');
        slideElements[(vitriSlide+1)].classList.add('wrap__slide-active');
    }
        
}