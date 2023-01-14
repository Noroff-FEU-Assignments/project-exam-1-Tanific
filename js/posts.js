const url = "https://discoverocean.tanific.one/wp-json/wp/v2/posts?_embed&per_page=12";
const container = document.querySelector(".posts_main-container");


async function getPosts() {

    const response = await fetch(url);
    const json = await response.json();

    console.log(json)

    for(let i = 0; i < json.length; i++) {

        container.innerHTML += `
        <a href="post-specific.html?id=${json[i].id}">
        <div id="post">
                <img src=${json[i]._embedded["wp:featuredmedia"][0].source_url}>
                <h2>${json[i].title.rendered}</h2>
                <p>${json[i].excerpt.rendered}</p>
        </div>
        </a>
        `
        
    }
}

getPosts();

/* parallax scroll jellyfish */
window.addEventListener('scroll', function() {
    const distance = window.scrollY;
    document.querySelector(".jelly").style.transform = `translateY(${distance * -0.5}px)`;
    document.querySelector(".jelly2").style.transform = `translateY(${distance * -0.5}px)`;

}) 

