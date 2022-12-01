
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
    output = `${entry[1]}`;
  }
  console.log(output);
  log.innerText = output;

  },
  false
);


const radioBtns = document.getElementById("radios");
const radioBtn1 = document.getElementById("radio-1");
const radioBtn2 = document.getElementById("radio-2");
const radioBtn3 = document.getElementById("radio-3");
const radioBtn4 = document.getElementById("radio-4");
const radioBtn5 = document.getElementById("radio-5");

radioBtn1.onclick = function() {
  radioBtns.classList.remove('selected');
  radioBtn1.classList.add('selected');
};

radioBtn2.onclick = function() {
  radioBtns.classList.remove('selected');
  radioBtn2.classList.add('selected');
};

radioBtn3.onclick = function() {
  radioBtns.classList.remove('selected');
  radioBtn3.classList.add('selected');
};

radioBtn4.onclick = function() {
  radioBtns.classList.remove('selected');
  radioBtn4.classList.add('selected');
};

radioBtn5.onclick = function() {
  radioBtns.classList.remove('selected');
  radioBtn5.classList.add('selected');
};

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

