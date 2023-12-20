let latestOnePost = document.querySelector(".latestOne__post")


function getLatestOnePost({id, title, description, author, date, category, image }) {
   return `
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
   <a href=${`/blog-post/${id}`}
     class="home__posts__btn"
   >
     Read More
   </a>
   `;
 }
 

 latestOne.map((el) => {
   latestOnePost.innerHTML += getLatestOnePost(el);
 });
 getLatestOnePost()
//  latestOne.map((el, i) => {
//    let newLatestOne = getCategory(el);
//    categorydown.append(newCategory);
//  });