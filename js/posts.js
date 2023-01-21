const container = document.querySelector(".posts_main-container");
const loadMoreButton = document.querySelector(".loadMore")


/* api call */
const discoverOceanURL = "https://discoverocean.tanific.one/wp-json/wp/v2/posts?_embed";
const perPage12 = `${discoverOceanURL}&per_page=12`;


async function getPosts(url) {
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json)

        container.innerHTML = ``;

        for(let i = 0; i < json.length; i++) {
            container.innerHTML += `
            <a href="post-specific.html?id=${json[i].id}">
            <div id="post">
                <img src=${json[i]._embedded["wp:featuredmedia"][0].source_url}>
                <h2>${json[i].title.rendered}</h2>
                <p>${json[i].excerpt.rendered}</p>
            </div>
            </a>`
        }
    } catch (error) {
        console.log(error)
    }
}

getPosts(discoverOceanURL);

/* view more button */
loadMoreButton.addEventListener("click", () => {
    getPosts(perPage12);
});


/* parallax scroll jellyfish and anglerfish */
window.addEventListener('scroll', function() {
    const distance = window.scrollY;
    document.querySelector(".jelly").style.transform = `translateY(${distance * -0.5}px)`;
    document.querySelector(".jelly2").style.transform = `translateY(${distance * -0.3}px)`;
    document.querySelector(".jelly3").style.transform = `translateY(${distance * -0.2}px)`;
}) 



