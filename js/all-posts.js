let postRow = document.querySelector(".posts-row");

function getAllPosts({
  id,
  title,
  description,
  author,
  date,
  category,
  image,
}) {
  return `
  <div class="post-card">
                  <a
                  href="../pages/blog-post.html"
                    class="post-image"
                  >
                    <img
                      src=${image}
                      alt=${title}
                    />
                  </a>
                  <div class="post-info">
                    <p class="post-subtitle">${category}</p>
                    <h3 class="post-title">${title}</h3>
                    <p class="post-desc">${description}</p>
                  </div>
                </div>
   `;
}

function getAllPost() {
  postRow.innerHTML = "";
  posts.map((el) => {
    postRow.innerHTML+= getAllPosts(el);
  });
}

getAllPost();

function getBlogPage(id) {
   localStorage.setItem(blog, id);
 }
 