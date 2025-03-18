document.addEventListener("DOMContentLoaded", function () {

    // Home Page Transition to Gallery
    window.enterGallery = function () {
        document.getElementById("homePage").style.display = "none";
        document.getElementById("galleryPage").style.display = "block";
        document.getElementById("galleryPage").style.opacity = "1";
    };

    // Intro Animation - Hide after 3 seconds
    setTimeout(() => {
        document.getElementById("intro").style.opacity = "0"; // Smooth fade-out
        setTimeout(() => {
            document.getElementById("intro").style.display = "none";
            document.getElementById("galleryPage").style.opacity = "1"; // Smooth fade-in
        }, 1000); // Wait for fade-out transition
    }, 3000);

    //  Tilt.js Effect for Gallery Items
    $('.gallery-item').tilt({
        scale: 1.1,
        glare: true,
        maxGlare: 0.5
    });

    // Image Filter Function with Smooth Animation
    function filterImages(category) {
        let images = document.querySelectorAll('.gallery a');
        images.forEach(image => {
            if (category === 'all' || image.classList.contains(category)) {
                image.style.display = 'inline-block';
                setTimeout(() => {
                    image.style.opacity = "1"; // Smooth fade-in
                }, 200);
            } else {
                image.style.opacity = "0"; // Smooth fade-out
                setTimeout(() => {
                    image.style.display = 'none';
                }, 300);
            }
        });
    }

    // Active Button Effect in Filter
    const buttons = document.querySelectorAll(".filter-buttons button");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            filterImages(this.getAttribute("onclick").split("'")[1]);
        });
    });

    //  Search Functionality (Real-time Search)
    window.searchImages = function () {
        let input = document.getElementById("searchBar").value.toLowerCase();
        let images = document.querySelectorAll('.gallery a');

        images.forEach(image => {
            let altText = image.querySelector("img").alt.toLowerCase();
            if (altText.includes(input) || input === "") {
                image.style.display = 'inline-block';
                setTimeout(() => {
                    image.style.opacity = "1";
                }, 200);
            } else {
                image.style.opacity = "0";
                setTimeout(() => {
                    image.style.display = 'none';
                }, 300);
            }
        });
    };
});
