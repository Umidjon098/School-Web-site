const scrollUp = document.querySelector(".navbar-bg");
window.addEventListener("scroll", function() {
    if (this.scrollY > 20) {
        scrollUp.classList.add("fixed");
    } else {
        scrollUp.classList.remove("fixed");
    }
});

$(".slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1025: {
            items: 6
        }
    }

});

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Show more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Show less";
        moreText.style.display = "inline";
    }
}