const BASE_BATH = "https://www.themealdb.com/api/json/v1/1"

let category;
const modalEl = document.querySelector(".modal-container");
const modal = document.querySelector(".modal");
const modalBody = document.querySelector(".modal-body");
const modalButton = document.querySelector("#modal-close");
addEventListener("DOMContentLoaded", () => {
  category = new URLSearchParams(window.location.search).get("category");
  callMealsbyCategory(category);
});

function callMealsbyCategory (category) {
  fetch(`${BASE_BATH}/filter.php?c=${category}`)
    .then((response) => response.json())
    .then((data) => {
      renderMealsCards(data.meals);
    })
    .catch((error) => {
      console.log(error);
    });
}

function renderMealsCards (meals) {
  const mealContainer = document.querySelector(".meals-container");
  mealContainer.innerHTML = "";
  meals.forEach((meal) => {
    const mealEl = document.createElement("div");
    mealEl.classList.add("card", "flex-centre");
    mealEl.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <h3>${meal.strMeal}</h3>
    `;
    mealContainer.appendChild(mealEl);
  });
  attachCardEventListeners();
}

function attachCardEventListeners () {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const meal = card.children[1].textContent;
      fetchMealInfo(meal);
    });
  });
}
async function fetchMealInfo (meal) {
  const response = await fetch(`${BASE_BATH}/search.php?s=${meal}`);
  const data = await response.json();
  openModal(data.meals[0]);
}

function openModal (data) {
  modalEl.style.opacity = 1;
  modalEl.style.pointerEvents = "all";
  renderModalBody(data)
}

function renderModalBody (data) {
  const htmlContent = `
    <img src="${data.strMealThumb}" alt="${data.strMeal}">
    <h3>${data.strMeal}</h3>
    <p>${data.strInstructions}</p>
  `;
  modalBody.insertAdjacentHTML("afterbegin", htmlContent);
}

modalButton.addEventListener("click", () => {
  modalEl.style.opacity = 0;
  modalEl.style.pointerEvents = "none";
  modalBody.innerHTML = "";
})