document.querySelectorAll('img').forEach(img => {
    img.setAttribute('tabindex', '0');
});

function upDate(previewPic) {
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
    imageDiv.textContent = previewPic.alt;
}

function unDo() {
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "none";
    imageDiv.textContent = "Here you can explore my crochet works! Hover over any image below to display it here.";
}

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('mouseover', () => upDate(img));
    img.addEventListener('mouseout', () => unDo());
    img.addEventListener('focus', () => upDate(img));
    img.addEventListener('blur', () => unDo());
});

const images = [
    "crochet_octopus_keychain.jpg",
    "Mini_crochet_octopus_plushies.jpg",
    "Pink_crochet_coaster.jpg",
    "Crochet_sunflower_coaster.jpg",
    "Crochet_granny_square_coaster.jpg",
    "Chunky_Puffy_Yarn_Blanket.jpg"
];
const alts = [
    "crochet octopus keychain",
    "Mini crochet octopus plushies",
    "Pink crochet coaster with a heart-shaped center",
    "Crochet sunflower coaster",
    "Crochet granny square coaster",
    "Chunky Puffy Yarn Blanket"
];
let currentIndex = 0;
document.body.addEventListener('click', () => {
    const imageDiv = document.getElementById('image');
    if (currentIndex < images.length) {
        imageDiv.style.backgroundImage = `url(${images[currentIndex]})`;
        imageDiv.textContent = alts[currentIndex];
        currentIndex++;
    } else {
        imageDiv.style.backgroundImage = "none";
        imageDiv.textContent = "Here you can explore my crochet works! Hover over any image below to display it here.";
        currentIndex = 0;
    }
}); 
