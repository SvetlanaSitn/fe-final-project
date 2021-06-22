(function(){
    const header =document.querySelector('.header');
    window.onscroll = () =>{
        if(window.pageYOffset > 50){
            header.classList.add('header_active');
        }
        else{
         header.classList.remove('header_active')
        }
    }
    const slides = document.querySelectorAll('.slide')
for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}

 
 }
 ());
 
