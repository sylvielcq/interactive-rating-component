
// Get rating

// const ratings = document.getElementsByClassName("ratings");

// ratings.onclick = function() {
//   // const selectedRating = ratings.children.value;
//   // console.log(selectedRating);

// };

const form = document.querySelector("form");
const log = document.querySelector("#log");

form.addEventListener("submit", (event) => {
  
  event.preventDefault();

  const data = new FormData(form);
  let output = "";
  for (const entry of data) {
    output = `${output}${entry[0]}=${entry[1]}`;
  }
  console.log(output);
  log.innerText = output;

  },
  false
);

// const radioBtns = document.getElementById("radios");


// radioBtns.onclick = function() {
//   console.log("radio btn clicked");
//   // console.log(this.value);

// };




// Add class to selected rating

// Trigger state change

const ratingComp = document.getElementById("rating-comp");
const thankYouComp = document.getElementById("thank-you-comp");
const btn = document.getElementById("submit");

btn.onclick = function() {
  ratingComp.style.display = "none";
  thankYouComp.style.display = "block";
};

// Save rating

