// Add your images here:
const images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg"
];

let currentIndex = 0;

// DOM refs
const mainImage = document.getElementById("main-image");
const thumbs = document.getElementById("thumbs");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Initialize
function loadViewer() {
    mainImage.src = images[currentIndex];
    renderThumbs();
}

function renderThumbs() {
    thumbs.innerHTML = ""; // clear

    images.forEach((img, index) => {
        const el = document.createElement("img");
        el.src = img;

        if (index === currentIndex) el.classList.add("active");

        el.addEventListener("click", () => {
            currentIndex = index;
            mainImage.src = images[currentIndex];
            renderThumbs();
        });

        thumbs.appendChild(el);
    });
}

prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    mainImage.src = images[currentIndex];
    renderThumbs();
};

nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    mainImage.src = images[currentIndex];
    renderThumbs();
};

// Start
loadViewer();

