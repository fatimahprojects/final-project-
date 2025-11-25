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
