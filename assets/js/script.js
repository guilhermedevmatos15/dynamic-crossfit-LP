// ! Seção 2 - manipulando card de imagens
const lessThanIcon = document.querySelector('i.fa-less-than');
const greaterThanIcon = document.querySelector('i.fa-greater-than');

greaterThanIcon.addEventListener('click', moveImages);
lessThanIcon.addEventListener('click', moveImages);

function moveImages(evt) {
   const imagesToCard = [...document.querySelectorAll('section.venha-conhecer > div.images > div.first-line-images > div > img')];
   if (evt.target===lessThanIcon) {
      if (imagesToCard[0].className.includes('hidden') === false) {
         imagesToCard[0].classList.add('hidden');
         imagesToCard[3].classList.remove('hidden');
      } else if(imagesToCard[1].className.includes('hidden') === false) {
         imagesToCard[1].classList.add('hidden');
         imagesToCard[0].classList.remove('hidden');
      } else if(imagesToCard[2].className.includes('hidden') === false) {
         imagesToCard[2].classList.add('hidden');
         imagesToCard[1].classList.remove('hidden');
      } else if(imagesToCard[3].className.includes('hidden') === false) {
         imagesToCard[3].classList.add('hidden');
         imagesToCard[2].classList.remove('hidden');
      }
   } else {
      if (imagesToCard[0].className.includes('hidden') === false) {
         imagesToCard[0].classList.add('hidden');
         imagesToCard[1].classList.remove('hidden');
      } else if(imagesToCard[1].className.includes('hidden') === false) {
         imagesToCard[1].classList.add('hidden');
         imagesToCard[2].classList.remove('hidden');
      } else if(imagesToCard[2].className.includes('hidden') === false) {
         imagesToCard[2].classList.add('hidden');
         imagesToCard[3].classList.remove('hidden');
      } else if(imagesToCard[3].className.includes('hidden') === false) {
         imagesToCard[3].classList.add('hidden');
         imagesToCard[0].classList.remove('hidden');
      }
   }
}