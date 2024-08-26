const BASE_PATH = "https://www.themealdb.com/api/json/v1/1";

const categoryList = []
init()
function init () {
  fetch(`${BASE_PATH}/categories.php`)
    .then((response) => response.json())
    .then((data) => {
      categoryList.push(...data.categories)
      renderCategories(categoryList)
    })
    .catch((error) => {
      console.log(error);
    })
}

function renderCategories(categoryList) {
  const categoryContainer = document.querySelector(".category-container");
  categoryList.forEach((category) => {
    const categoryEl = document.createElement("div");
    categoryEl.classList.add("card", "flex-centre");
    categoryEl.innerHTML = `
      <img src="${category.strCategoryThumb}" alt="${category.strCategory}">
      <h3>${category.strCategory}</h3>
    `;
    categoryContainer.appendChild(categoryEl);
  });
  attachCategoryEvents();
}

function attachCategoryEvents() { 
  const categoryCards = document.querySelectorAll(".card");
  categoryCards.forEach((card) => {
    card.addEventListener("click", () => {
      const category = card.children[1].textContent;
      window.location.href = `./category.html?category=${category}`
    });
  });
}

