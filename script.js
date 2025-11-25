function upDate(previewPic) {
            document.getElementById('image').style.backgroundImage = `url(${previewPic.src})`;
            document.getElementById('image').textContent = previewPic.alt;
        }

        function unDo() {
            document.getElementById('image').style.backgroundImage = "none";
            document.getElementById('image').textContent = "Here you can explore my crochet works! Hover over any image below to display it here";
        }
