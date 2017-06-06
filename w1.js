
var slideIndex=0;
var slide=0;
slide=slide+2;
if(slideIndex==0)
{ slideIndex=1;
  showSlides();
}

function nextslide()
{ slideIndex++;
 showSlides();
 }

function previousslide()
{ slideIndex--;
showSlides();
}



function showSlides() {
    
	
	var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    //slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  document.getElementById("demo").innerHTML = slide;	

}

	
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");



// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "block";
    }
}

function newDoc() {
    window.location.assign("http://localhost/tutor/rtt.php")
}var slideIndex=0;
var slide=0;
slide=slide+2;
if(slideIndex==0)
{ slideIndex=1;
  showSlides();
}

function nextslide()
{ slideIndex++;
 showSlides();
 }

function previousslide()
{ slideIndex--;
showSlides();
}



function showSlides() {
    
	
	var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    //slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  document.getElementById("demo").innerHTML = slide;	

}

	
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "block";
    }
}

// register for tutor to new page
function tutorregister() {
    window.location.assign("https://www.w3schools.com")
}
