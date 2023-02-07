const slides = document.getElementById("slides-container");
const slidesContainer = document.getElementById("slides-container");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");


const discoverOceanURL = "https://discoverocean.tanific.one/wp-json/wp/v2/posts?_embed&per_page=6";

async function getPosts(url) {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json)

    slides.innerHTML = ``;

    for(let i = 0; i < json.length; i++) {
        slides.innerHTML +=
        `<li class="slide">
        <h3><a href="post-specific.html?id=${json[i].id}">${json[i].title.rendered}</h3>
        <div class="img-container">
            <img src=${json[i]._embedded["wp:featuredmedia"][0].source_url}>
        </div>
        <p class="excerpt">${json[i].excerpt.rendered}</p></li></a>`

    }
}
getPosts(discoverOceanURL);


/*slider arrows. if clicked it clears the automatic slider interval*/
nextButton.addEventListener("click", () => {
  changeSlides(1);
  clearInterval(slideInterval);
});

prevButton.addEventListener("click", () => {
  changeSlides(-1);
  clearInterval(slideInterval);
});

/*change slides automatically + slider goes back to slide 1 after reaching the final slide*/
const slideInterval = setInterval(() => {
  const slideWidth = slides.clientWidth;
  const maxScrollLeft = slidesContainer.scrollWidth - slidesContainer.clientWidth;
  slidesContainer.scrollLeft = (slidesContainer.scrollLeft + slideWidth) % (maxScrollLeft + slideWidth);
}, 4000);





