const slides = document.getElementById("slides-container");
const slidesContainer = document.getElementById("slides-container");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");


const discoverOceanURL = "https://discoverocean.tanific.one/wp-json/wp/v2/posts?_embed&per_page=4";

async function getPosts(url) {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json)

    slides.innerHTML = ``;

    for(let i = 0; i < json.length; i++) {
        slides.innerHTML += 
        `<div class="slide">
            <img src=${json[i]._embedded["wp:featuredmedia"][0].source_url}>
            <h2>${json[i].title.rendered}</h2>
            <p>${json[i].excerpt.rendered}</p>
        </div>`



        /*`<a href="post-specific.html?id=${json[i].id}" title="${json[i].title.rendered}">
            <div id="post">
                <img src=${json[i]._embedded["wp:featuredmedia"][0].source_url}>
                <h2>${json[i].title.rendered}</h2>
                <p>${json[i].excerpt.rendered}</p>
            </div>
        </a>`*/
    }
}
getPosts(discoverOceanURL);


/*Carousel arrows*/

nextButton.addEventListener("click", () => {
  const slideWidth = slides.clientWidth;
  slidesContainer.scrollLeft += slideWidth;

});

prevButton.addEventListener("click", () => {
  const slideWidth = slides.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;

});
