function upDate(previewPic) {
            document.getElementById('image').style.backgroundImage = `url(${previewPic.src})`;
            document.getElementById('image').textContent = previewPic.alt;
        }

function unDo() {
            document.getElementById('image').style.backgroundImage = "none";
            document.getElementById('image').textContent = "Here you can explore my crochet works! Hover over any image below to display it here";
        }
const images = [
    "crochet_octopus_keychain.jpg",
    "Mini_crochet_octopus_plushies.jpg",
    "Pink _crochet_coaster.jpg",
    "Crochet_sunflower_coaster.jpg",
    "Crochet_granny_square_coaster.jpg",
    "Chunky_Puffy_Yarn_Blanket.jpg"
];

let currentIndex = 0;

document.body.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('image').style.backgroundImage = `url(${images[currentIndex]})`;
    document.getElementById('image').textContent = "";
});
