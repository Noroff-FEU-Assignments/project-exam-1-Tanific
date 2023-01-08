const url = "https://discoverocean.tanific.one/wp-json/wp/v2/posts?_embed&per_page=12";
const container = document.querySelector(".posts_main-container");


async function getPosts() {

    const response = await fetch(url);
    const json = await response.json();

    console.log(json)

    for(let i = 0; i < json.length; i++) {

        container.innerHTML += `
        <a href="post-specific.html?id=${json[i].id}"<div class=post"><h2>${json[i].title.rendered}</h2><p>${json[i].excerpt.rendered}
        <img src="${json[i]._embedded["wp:featuredmedia"]["0"].source_url}/>
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