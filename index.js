const ratingComp = document.getElementById("rating-comp");
const thankYouComp = document.getElementById("thank-you-comp");
const ratingButtons = document.getElementsByName("rating");
const inputs = document.getElementsByClassName("ratings");
const selectedRating = document.getElementById("selected-rating");

let rating;

const selectRating = () => {
  for (let i = 0; i < ratingButtons.length; i++) {
    inputs[i].classList.remove("active");
    if (ratingButtons[i].checked) {
      rating = ratingButtons[i].value;
      inputs[i].classList.add("active"); 
    }
  }
  return rating;
};

const displayRating = (event) => {
  event.preventDefault();
  ratingComp.classList.toggle("none");
  thankYouComp.classList.toggle("none");
  selectedRating.innerHTML = rating;
};
