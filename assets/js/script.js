 const carouselImages = document.querySelector('.carousel-imgs');
 const carouselButtons = document.querySelectorAll('.carousel-btn');

 const numberImages = document.querySelectorAll('.carousel-imgs img').length;
 let imageIndex = 1;
 let translateX = 0;

 carouselButtons.forEach(button => {
     button.addEventListener('click', event => {
         if(event.target.id === 'previous') {
             if(imageIndex !== 0) {
                 imageIndex-=1;
                 translateX += 500;
             }
         } else {
            if(imageIndex !== numberImages) {
                imageIndex+=1;
                translateX -=500;
            }
        }

         carouselImages.style.transform = `translateX(${translateX}px)`;
     });
 });