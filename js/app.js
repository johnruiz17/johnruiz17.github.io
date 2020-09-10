//fades in the main title of the home page 
$(document).ready(function() {
  $('.name').fadeIn(5000);
  $('.description').fadeIn(6000);
})

//adds an event listener to each project image
//the event handler opens the corresponding modal when the user clicks on the project image 
for(let i = 1; i <= 6; i++) {
  $(`#project-image-${i}`).on('click', function() {
    $(`#modal-${i}`).modal();
  })
}

//scrolls to the correct part of the page when the user clicks one of the nav links 
const navLinks = ['home', 'about', 'portfolio', 'contact'];

for (let i = 1; i <= 4; i++) {
  $(`#nav-link-${i}`).on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $(`#${navLinks[i-1]}`).offset().top
    }, 2000);
  });
}

//opens the correct project in a new tab when the user clicks on the 'view project' button in a modal 
for (let i = 1; i <= 6; i++) {
  $(`#button-${i}`).on('click', function() {
    window.open(`https://johnruiz17.github.io/fewd-techdegree-project-${i + 2}`, "_blank");
  })
}

//opens the corresponding link when the user clicks the LinkedIn or Github icon
$('#linkedin-icon').on('click', function() {
  window.open("https://www.linkedin.com/in/john-ruiz-6b01bb1a7", "_blank");
})

$('#github-icon').on('click', function() {
  window.open("https://github.com/johnruiz17", "_blank");
})
