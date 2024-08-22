/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

// script.js
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("testimonials");
    let dots = document.getElementsByClassName("dot");
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Remove the 'active' class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Move to the next slide
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Display the current slide and activate the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    
    // Change slide every 5 seconds
    setTimeout(showSlides, 5000); // Change 5000 to any other value for a different interval
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

function changeSlide(n) {
    slideIndex += n;
    if (slideIndex < 1) {
        slideIndex = document.getElementsByClassName("testimonials").length;
    }
    if (slideIndex > document.getElementsByClassName("testimonials").length) {
        slideIndex = 1;
    }
    showSlides();
}