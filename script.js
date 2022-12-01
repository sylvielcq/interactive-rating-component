const ratingComp = document.getElementById("rating-comp");
const thankYouComp = document.getElementById("thank-you-comp");
const ratingButtons = document.getElementsByName("rating");
const inputs = document.getElementsByClassName("ratings");
const btn = document.getElementById("submit");
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

// btn.onclick = function() {
//   ratingComp.style.display = "none";
//   thankYouComp.style.display = "block";
// };


// Get rating

// const ratings = document.getElementsByClassName("ratings");

// ratings.onclick = function() {
//   // const selectedRating = ratings.children.value;
//   // console.log(selectedRating);

// };

// const form = document.querySelector("form");


// form.addEventListener("submit", (event) => {
  
//   event.preventDefault();

//   const data = new FormData(form);
//   let output = "";
//   for (const entry of data) {
//     output = `${entry[1]}`;
//   }
//   console.log(output);
//   log.innerText = output;

//   },
//   false
// );


// Add class to selected rating

// Trigger state change



// Save rating

