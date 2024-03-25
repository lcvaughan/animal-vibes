// Get the button and image elements by their IDs
var buttonElement = document.getElementById("button");
var imageElement = document.getElementById("the-image");

// Define an array of image sources
var imageSources = [
  "img/tiger.png",
  "img/wolf.png",
  "img/monkey-2.png",
  "img/seal-2.png",
];

// Counter to keep track of the current image index
var currentImageIndex = 0;

// Add a click event listener to the button
buttonElement.addEventListener("click", function () {
  // Change the src attribute of the image to the next one in the array
  imageElement.src = imageSources[currentImageIndex];

  // Increment the counter for the next click
  currentImageIndex++;

  // Reset the counter if it goes beyond the array length
  if (currentImageIndex >= imageSources.length) {
    currentImageIndex = 0;
  }
});
