
//Function to  hanle ratings

function handleRatings() {
  const ratingCard = document.querySelector("[ data-rating-card]");
  const ratingForm = document.querySelector("[data-rating-form]");
  const thankYouCard = document.querySelector("[data-thanks-card]");
  const selectedRating = document.querySelector("[data-selected-rating]");
  const options = Array.from(document.querySelectorAll("input[type=radio]"));

  const submitRating = () => {
    const selectedOption = options.reduce((acc , elem) => {
       if(elem.checked) {
        acc = elem;
       }
       return acc;
    },"")
    
    ratingCard.style.display = "none";
    thankYouCard.style.display = "grid";

    selectedRating.textContent = selectedOption.dataset.rating;
  }

  ratingForm.addEventListener("submit",function(event) {
    event.preventDefault();
    submitRating();
  });
}

handleRatings();