//Get the button:
mybutton = document.getElementById("link-topo");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}