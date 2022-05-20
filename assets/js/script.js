 const carouselImages = document.querySelector('.carousel-imgs');
 const carouselButtons = document.querySelectorAll('.carousel-btn');

 const numberImages = document.querySelectorAll('.carousel-imgs img').length;
 let imageIndex = 1;
 let translateX = 0;

 carouselButtons.forEach(button => {
     button.addEventListener('click', event => {
         if(event.target.id === 'previous') {
             if(imageIndex !== 1) {
                 imageIndex-=1;
                 translateX += 50;
             }
         } else {
            if(imageIndex !== numberImages) {
                imageIndex+=1;
                translateX -=50;
            }
        }

         carouselImages.style.transform = `translateX(${translateX}rem)`;
     });
 });


 let sSuccess = document.querySelector(".s-success");
 

let scrollShow = function () {
    let scrollY = window.scrollY;
    if (scrollY >= 250) {
        sSuccess.className = "s-success show";
    } else {
        sSuccess.className = "s-success hide";
    }
};

window.addEventListener("scroll", scrollShow);