let categoryItems = document.querySelector(".category__cards");

function getCategoryItems({
  id,
  title,
  description,
  author,
  date,
  category,
  image,
}) {
  return `
  <a
          href=${`category/${id}`}
          class="wrapper"
        >
          <div class="category__card">
          <div class="category__img">
          
          <img
            src=${"../images/posts/category.png"}
            alt="Icon"
          />
          </div>
            <h3 class="category__card__title">${category}</h3>
            <p class="category__card__desc">
              lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
          </div>
        </Link>
   `;
}

function getCategory() {
  categoryItems.innerHTML = "";
  posts.slice(-4).map((el) => {
    categoryItems.innerHTML+= getCategoryItems(el);
  });
}

getCategory();
