'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-5-the-cat-walk

1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left
   hand side (`0px`). So they should keep walking from left to right across the
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds,
   and then replace the img with the original image and have it
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/

// 1: Create a variable to store a reference to the `<img>` element.
const catImg = document.querySelector('img');

// 2: Change the style of the `<img>` to have a `left` of `0px`.
catImg.style.left = '0px';

// Variable to store the interval ID for pausing the walk
let walkInterval;

// 3 & 4: Complete the function called catWalk() to move the cat 10 pixels to the right
// of where it started, by changing the `left` style property, and call that function every 50 milliseconds.
function catWalk() {
  const screenWidth = window.innerWidth;
  const catWidth = catImg.width;
  let currentPosition = parseInt(catImg.style.left);

  // Move the cat to the right if it's not at the right edge
  if (currentPosition < screenWidth - catWidth) {
    currentPosition += 10;
    catImg.style.left = currentPosition + 'px';
  } else {
    catImg.style.left = '0px'; // Step 5: Restart the cat at the left hand side when it reaches the right-hand side.
  }

  // 6: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing
  // and stop walking temporarily
  if (currentPosition >= (screenWidth / 2 - catWidth / 2) && currentPosition <= (screenWidth / 2 + catWidth / 2)) {
    clearInterval(walkInterval); // Stop the cat from walking

    // Switch to dancing cat image
    catImg.src = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

    // After 5 seconds, switch back to walking cat image and resume walking
    setTimeout(() => {
      catImg.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
      walkInterval = setInterval(catWalk, 50); // Resume walking after dancing
    }, 5000);
  }
}

// 4: Call `catWalk` function every 50 milliseconds.
walkInterval = setInterval(catWalk, 50);

// 5: Execute `catWalk` when the browser has completed loading the page.
window.addEventListener('load', () => {
  walkInterval = setInterval(catWalk, 50);
});
