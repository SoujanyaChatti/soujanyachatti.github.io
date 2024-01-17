function toggleCollapsible(collapsibleId) {
    const collapsibleContent = document.getElementById(collapsibleId);
   // collapsibleContent.classList.toggle('active');
}
document.addEventListener('DOMContentLoaded', function () {
  // Get the wall and peeking girl elements
  var wall = document.querySelector('.wall');
  var peekingGirl = document.querySelector('.peeking-girl');

  // Set initial styles
  wall.style.width = '50vw';  // Set the initial width to 50% (adjust as needed)
  peekingGirl.style.opacity = 0;  // Set initial opacity to 0 (hidden)

  // Preload the image to ensure it's loaded when needed
  var image = new Image();
  image.src = 'girl.png';

  // Add event listener for animation end
  wall.addEventListener('animationend', function () {
    // Check if the animation has ended and the wall is at 50%
    if (wall.style.width === '50vw') {
      // Show the peeking girl
      peekingGirl.style.opacity = 1;
    }
  });

  // Your existing JavaScript code for carousel card navigation
  var carouselCards = document.querySelectorAll('.carousel-item .subsection');

  carouselCards.forEach(function (card) {
    card.addEventListener('click', function () {
      var targetId = this.getAttribute('data-target');

      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
