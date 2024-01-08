let barIcon =  document.getElementById('bar-icon')
let headerNavUl = document.querySelector('.header-nav ul');
let header = document.querySelector('header')

barIcon.addEventListener('click',function(){
    headerNavUl.classList.toggle('activeNav');
    barIcon.querySelector('i').classList.toggle('fa-bars-staggered');
    barIcon.querySelector('i').classList.toggle('fa-times');

})




// slider items
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop:true,
  speed:1500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});







// // active
// const formButton = [...document.getElementsByClassName("change_button")];
// const navList = [...document.getElementsByClassName("nav_link")];
// const formWrapper = document.getElementsByClassName("wrapper")[0];


// const populateFormButton = (element, tanvi) =>{

//     element.forEach((item, index)=>{
//         item.addEventListener("click", function(){
//             element.forEach((item, index)=>{
//               if(tanvi === 'form'){
//                 item.classList.remove("active_button")
//               }else{
//                 item.classList.remove("active_link")
//               }
//             })
//             if(tanvi === 'form'){
//               item.classList.add("active_button")
//             }else{
//               item.classList.add("active_link")
//             }
            
//             if(tanvi=== 'form'){
//                 if(index === 0){
//                     formWrapper.classList.add("left_slide")
//                     formWrapper.classList.remove("right_slide")
//                 }
//                 if(index === 1){
//                     formWrapper.classList.remove("left_slide")
//                     formWrapper.classList.add("right_slide")
//                 }
//             }
//         })
//     })
// }
// populateFormButton(formButton, 'form')
// populateFormButton(navList, 'nav')