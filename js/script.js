const navEl = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
        navEl.classList.add("navbar-scrolled");
    } else if (window.scrollY < 50) {
        navEl.classList.remove("navbar-scrolled");
    }
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
