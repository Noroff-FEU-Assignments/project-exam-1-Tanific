const postWrapper = document.querySelector(".post-info");
const activeBreadcrumb = document.querySelector(".activeBreadcrumb");
const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://discoverocean.tanific.one/wp-json/wp/v2/posts/" + id + "?_embed";

console.log(url);

async function fetchPost() {
    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);
        createHTML(details);

        document.title = `${details.title.rendered} - Discover our ocean`;
        activeBreadcrumb.innerHTML = details.title.rendered;
    }
    catch(error) {
        console.log(error);
    }
}

fetchPost();

function createHTML(details) {
    postWrapper.innerHTML = `
        <div class="post-content">
            <h1>${details.title.rendered}</h1>
            <p>${details.content.rendered}</p>
        </div>
        <div class="posts-bottom-container">
            <img class="post-img" src=${details._embedded["wp:featuredmedia"][0].source_url}>
        </div>
        <div id="myModal" class="modal">
            <img class="modal-content" id="img01">
        </div>
    `;


/*image modal */
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const postImg = document.querySelector(".post-img");

    postImg.addEventListener("click", function() {
        modal.style.display = "flex";
        modalImg.src = postImg.src;
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}