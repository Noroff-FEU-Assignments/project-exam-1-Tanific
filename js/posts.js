const url = "https://discoverocean.tanific.one/wp-json/wp/v2/posts?_embed&per_page=12";
const container = document.querySelector(".posts_main-container");


async function getPosts() {

    const response = await fetch(url);
    const posts = await response.json();

    console.log(posts)

    for(let i = 0; i < posts.length; i++) {

        container.innerHTML += `
        <a href="post-specific.html?id=${posts[i].id}"<div class=post"><h2>${posts[i].title.rendered}</h2><p>${posts[i].excerpt.rendered}
        <img src="${posts[i]['_embedded']['wp:featuredmedia'][0][source_url]}/>
        </div></a>`
    }
}

getPosts();



/* parallax scroll 
let jelly = document.getElementById("jelly");

window.addEventListener('scroll', function() {
    var value = window.scrollY;

    jelly.style.top = value * 0.5 + 'px';

}) */