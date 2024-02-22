
//_______________________Slideshow__________________________//
var myIndex = 0;                       
carousel();

function carousel() 

{
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) 
{
    x[i].style.display = "none";  
}
  myIndex++;
  if (myIndex > x.length) 
{myIndex = 1}    
  x[myIndex-1].style.display = "block";  
}



//___________________________________About_Slideshow_________________________________________//

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showab(n) {
  var i;
  var slides = document.getElementsByClassName("ab");
  if (n > slides.length) {slideIndex = 1}    
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

