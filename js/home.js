let latestOnePost = document.querySelector(".latestOne__post");

function getLatestOnePost({
  id,
  title,
  description,
  author,
  date,
  category,
  image,
}) {
  return `
  <div style="background-image: url(${image})" class="home__class" >
  <div class="container">
   <h3 class="home__subtitle">
     Posted on <span>${category}</span>
   </h3>
   <h1 class="home__title">${title}</h1>
   <div class="home__details">
     <p class="home__author">
       By{" "}
       <span>
         ${author}
       </span>
     </p>
     <p class="home__date">${date}</p>
   </div>
   <p class="home__desc">${description}</p>
   <a  onclick="getPostPage('${id}')" 
   class="home__posts__btn"
   href="../pages/blog-post.html"
   >
     Read More
   </a>
   </div>
   </div>
   `;
}

//  latestOne.map((el) => {
//    latestOnePost.innerHTML += getLatestOnePost(el);
//  });

function getLatestOnePosts() {
  latestOnePost.innerHTML = "";
  posts.forEach((el) => {
    latestOnePost.innerHTML = getLatestOnePost(el);
  });
}

getLatestOnePosts();

function getBlogPage(id) {
  localStorage.setItem(BLOG, id);
}
