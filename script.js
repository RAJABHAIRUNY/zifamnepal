
let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", ()=>{
    ul.classList.toggle("showdata");
    if(ul.className == "showdata"){
        document.getElementById("bar").className= "fa-solid fa-xmark"
    } else{
        document.getElementById("bar").className= "fa-solid fa-bars" }
})
//search bar




//let searchIcon = document.getElementById("search");
//let searchForm = document.getElementById("searchForm");

 //Toggle search form visibility on icon click
//searchIcon.addEventListener("click", function(event) {
  //  event.preventDefault(); // Prevent default link action
   // if (searchForm.style.display === "none" || searchForm.style.display === "") {
//searchForm.style.display = "block"; // Show search form
   // } else {
     //   searchForm.style.display = "none"; // Hide search form
   // }
//});










//slider_slide_sli

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Optional: Auto slideshow
setInterval(function () {
    plusSlides(1);
}, 4000);  // Change slide every 4 seconds



//to-top scrolling icon

const totop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    totop.classList.add("active");
  }
    else{
      totop.classList.remove("active");
    }

  });
 



//scrolling_responsive_3card_

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
  
    const observerOptions = {
      root: null,
      threshold: 0.2, // Trigger animation when 20% of the section is visible
    };
  
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    sections.forEach((section) => {
      observer.observe(section);
    });
  });





//images

var fullimgbox = document.getElementById("fullimgbox");
var fullimg = document.getElementById("fullimg");

function openfullimg(pic){
fullimgbox.style.display = "flex";
fullimg.src = pic;
}
function closefullimg(){
    fullimgbox.style.display = "none";

}


//rating



//const stars = document.querySelectorAll('.stars input');
//stars.forEach(star => {
   // star.addEventListener('change', () => {
     //   alert(`You rated ${star.value} stars!`);
  //  });
//});












  function toggleImages() {
    var moreImages = document.getElementById("more-images");
    var button = document.getElementById("toggle-btn");
    if (moreImages.style.display === "none") {
      moreImages.style.display = "block";
      button.textContent = "Show Less";
    } else {
      moreImages.style.display = "none";
      button.textContent = "Show More";
    }








  }






  
//swipper-wrapper



new Swiper('.card-wrapper', {
   
  loop: true,
  spaceBetween: 30,

  // Autoplay
  autoplay: {
      delay: 3000, // Time in milliseconds (3 seconds for each slide)
      disableOnInteraction: false, // Keep autoplay running even after user interacts
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
      0: {
          slidesPerView: 1
      },
     
      768: {
          slidesPerView: 2
      },
     
      1024: {
          slidesPerView: 3
      },
  }
});


