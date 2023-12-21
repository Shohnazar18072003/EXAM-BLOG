let onePost = document.querySelector(".hello");

function getPost({
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
   <a onclick="getBlogPage(${id})"
    href="../pages/blog-post.html"
     class="home__posts__btn"
   >
     Read More
   </a>
   </div>
   </div>
   `;
}

let postAll =localStorage.getItem(BLOG)

function getProducts(){
   onePost.innerHTML = '';
   posts.forEach((el) => {
     if(el.id==postAll) onePost.innerHTML=getPost(el);
    });
}

getProducts();