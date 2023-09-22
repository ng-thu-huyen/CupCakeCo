class Slider extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div id="slider">
      <ul id="slideWrap"> 
        <li><img src="./assets/banner2.jpeg" alt=""></li>
        <li><img src="./assets/banner3.jpeg" alt=""></li>
        <li><img src="./assets/banner4.jpeg" alt=""></li>
        <li><img src="./assets/banner5.jpeg" alt=""></li>
        <li><img src="./assets/banner6.jpeg" alt=""></li>
        <li><img src="./assets/banner7.jpeg" alt=""></li>
      </ul>
      <a id="prev" href="#">&#8810;</a>
      <a id="next" href="#">&#8811;</a>
    </div>
    `
    }
}
customElements.define('web-slider', Slider);


var responsiveSlider = function() {

    var slider = document.getElementById("slider");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("slideWrap");
    var count = 1;
    var items = slideList.querySelectorAll("li").length;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");

    window.addEventListener('resize', function() {
    sliderWidth = slider.offsetWidth;
    });

    var prevSlide = function() {
    if(count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
    }
    else if(count == 1) {
        count = items - 1;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
    }
    };

    var nextSlide = function() {
    if(count < items) {
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
    }
    else if(count == items) {
        slideList.style.left = "0px";
        count = 1;
    }
    };

    next.addEventListener("click", function() {
    nextSlide();
    });

    prev.addEventListener("click", function() {
    prevSlide();
    });

    setInterval(function() {
    nextSlide()
    }, 2000);
    };

    window.onload = function() {
    responsiveSlider();  
    }