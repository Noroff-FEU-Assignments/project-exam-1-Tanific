const carouselButton = document.querySelectorAll(".carousel-arrow");
const carouselContainer = document.querySelector(".carousel-container");


const discoverOceanURL = "https://discoverocean.tanific.one/wp-json/wp/v2/posts?_embed";

async function getPosts(url) {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json)

    carouselContainer.innerHTML = ``;

    for(let i = 0; i < json.length; i++) {
        const cardImg = json[i]._embedded["wp:featuredmedia"][0].source_url;
        carouselContainer.innerHTML += `
        <a href="post-specific.html?id=${json[i].id}" title="${json[i].title.rendered}">
        <div class="carousel-card" style="background: url(${cardImg})no-repeat center">
        <div class="card-info">
        <h3>${json[i].title.rendered}</h3>
        <p>${json[i].excerpt.rendered}</p>
        </div>
        </a>`
    }
}
getPosts(discoverOceanURL);
