let sliderBtnPrev = document.querySelector(".controls-prev");
let sliderBtnNext = document.querySelector(".controls-next");
let sliderContainer = document.querySelector(".slider_container");
let sliderOffset = 0;

sliderBtnNext.addEventListener("click", function () {
  sliderOffset -= 350;
  if(sliderOffset< -700){
    sliderOffset = 0
  }
  sliderContainer.style.left = sliderOffset +'px';
  
});

sliderBtnPrev.addEventListener('click',function(){
    sliderOffset +=350;
    if(sliderOffset > 0){
        sliderOffset=-700
    }

    sliderContainer.style.left = sliderOffset +'px'
})