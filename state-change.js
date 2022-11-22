// Add class to selected rating
const ratings = document.getElementsByClassName("ratings");

ratings.onclick = function() {
  
};

// Trigger state change

const ratingComp = document.getElementById("rating-comp");
const thankYouComp = document.getElementById("thank-you-comp");
const btn = document.getElementById("submit");

btn.onclick = function() {
  ratingComp.style.display = "none";
  thankYouComp.style.display = "block";
};

// Save rating

const selectedRating = document