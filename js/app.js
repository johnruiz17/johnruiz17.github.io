//fades in the main title of the home page 
$(document).ready(function() {
  $('.name').fadeIn(5000);
  $('.description').fadeIn(6000);
});

//adds an event listener to each project image
//the event handler opens the corresponding modal when the user clicks on the project image 
for(let i = 1; i <= 6; i++) {
  $(`#project-image-${i}`).on('click', function() {
    $(`#modal-${i}`).modal();
  })
};

//scrolls to the correct part of the page when the user clicks one of the nav links 
const navLinks = ['home', 'about', 'portfolio', 'contact'];

for (let i = 1; i <= 4; i++) {
  $(`#nav-link-${i}`).on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $(`#${navLinks[i-1]}`).offset().top
    }, 2000);
  });
};

//opens the correct project in a new tab when the user clicks on the 'view project' button in a modal 
$('#button-1').on('click', function() {
  window.open("https://facebook-clone-8e975.web.app", "_blank");
});

$('#button-2').on('click', function() {
  window.open("https://covid-19-tracker-1dcfe.web.app", "_blank");
});

$('#button-3').on('click', function() {
  window.open("https://netflix-clone-5e9ec.web.app", "_blank");
});

$('#button-4').on('click', function() {
  window.open("https://github-finder-d1151.web.app", "_blank");
});

$('#button-5').on('click', function() {
  window.open("https://music-master-17f73.web.app", "_blank");
});

$('#button-6').on('click', function() {
  window.open("https://cryptic-anchorage-80687.herokuapp.com", "_blank");
});

//opens the corresponding link when the user clicks the LinkedIn or GitHub icon 
$('#linkedin-icon').on('click', function() {
  window.open("https://www.linkedin.com/in/john-ruiz0517", "_blank");
});

$('#github-icon').on('click', function() {
  window.open("https://github.com/johnruiz17", "_blank");
});