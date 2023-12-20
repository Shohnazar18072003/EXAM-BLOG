let latestPost = document.querySelector(".latest__post");

function getLatestPost({
  id,
  title,
  description,
  author,
  date,
  category,
  image,
}) {
  return `
  <div class="carousel__card card">
          <a href=${`/blog-post/${id}`} class="card__image">
            <img
              class="blog-carousel-image"
              src=${image}
            />
          </a>
          <div class="card__content">
            <div class="card__subheader">
              <p>
                By
                <span>
                  ${author}
                </span>
              </p>
              <p>${date}</p>
            </div>
            <h3 class="card__title">${title}</h3>
            <p class="card__desc">${description}</p>
            <a href=${`/blog-post/${id}`}
            class="read-more-btn">
              Read More
            </a>
          </div>
        </div>
   `;
}

function getLatestPosts() {
  latestPost.innerHTML = "";
  posts.slice(-3).map((el) => {
    latestPost.innerHTML+= getLatestPost(el);
  });
}

getLatestPosts();
