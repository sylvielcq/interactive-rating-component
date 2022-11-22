const ratingComp = document.getElementById("rating-comp");
const thankYouComp = document.getElementById("thank-you-comp");
const btn = document.getElementById("submit");

btn.onclick = function () {
  ratingComp.style.display = "none";
  thankYouComp.style.display = "block";
};