const navEl = document.querySelector(".navbar");
const navbarCollapse = document.querySelector(".navbar-collapse");


const updateNavbar = () => {

    const isScrolled = window.scrollY >= 50;
    const isExpanded = navbarCollapse.classList.contains("show");

    if (isScrolled || isExpanded) {
        navEl.classList.add("navbar-scrolled");
    } else {
        navEl.classList.remove("navbar-scrolled");
    }
};

window.addEventListener("scroll", updateNavbar);

window.addEventListener("DOMContentLoaded", updateNavbar);

navbarCollapse.addEventListener("show.bs.collapse", () => {
    navEl.classList.add("navbar-expanded");
    navEl.classList.add("navbar-scrolled"); 
});
navbarCollapse.addEventListener("hide.bs.collapse", () => {
    navEl.classList.remove("navbar-expanded");
    if (window.scrollY < 50) {
        navEl.classList.remove("navbar-scrolled");
    }
});

var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        var displayStatus = window.getComputedStyle(panel).display;

        if (displayStatus === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// Weight Calculator 
const metal = document.getElementById("metal");
const plastic = document.getElementById("plastic");
const paper = document.getElementById("paper");
const weight = document.getElementById("weight");
const font = document.getElementById("weight-font");
const submit = document.getElementById("weightValue");
let metalValue = document.getElementById("metalResult");
let plasticValue = document.getElementById("plasticResult");
let paperValue = document.getElementById("paperResult");
const submitbtn = document.getElementById("submitBtn");
const resetbtn = document.getElementById("resetBtn");
let total = document.getElementById("total");
let benefit = document.getElementById("price");
const check = document.getElementById("checkbox");

let value = {
    weight: 0,
    type: null,
};

function resetSelection() {
    metal.classList.remove("metal-selection-active");
    plastic.classList.remove("plastic-selection-active");
    paper.classList.remove("paper-selection-active");
    value.type = null;
}

metal.addEventListener("click", function () {
    resetSelection();
    this.classList.add("metal-selection-active");
    value.type = "metal";
});

plastic.addEventListener("click", function () {
    resetSelection();
    this.classList.add("plastic-selection-active");
    value.type = "plastic";
});

paper.addEventListener("click", function () {
    resetSelection();
    this.classList.add("paper-selection-active");
    value.type = "paper";
});

function reset() {
    metalValue.textContent = "0";
    plasticValue.textContent = "0";
    paperValue.textContent = "0";
    total.textContent = "0";
    benefit.placeholder = "Rp. 0";
}

function count(prev, plus, standart) {
    let clean = Number(prev.replace(/\./g, ""));
    let result = clean + plus * standart;
    return result.toLocaleString("id-ID");
}
function cleanNumber(text) {
    return Number(text.replace(/\./g, ""));
}

function result() {
    let price =
        cleanNumber(metalValue.textContent) +
        cleanNumber(plasticValue.textContent) +
        cleanNumber(paperValue.textContent);
    total.textContent = `Rp. ${price.toLocaleString("id-ID")}`;
    delivery(price);
}

function calculate() {
    value.weight = Number(submit.value);

    if (isNaN(value.weight) || value.type === null) {
        return;
    }

    if (value.type === "metal") {
        metalValue.textContent = count(metalValue.textContent, value.weight, 6000);
    }

    if (value.type === "plastic") {
        plasticValue.textContent = count(plasticValue.textContent, value.weight, 4000);
    }

    if (value.type === "paper") {
        paperValue.textContent = count(paperValue.textContent, value.weight, 5000);
    }
}

function delivery(total) {
    if (check.checked) {
        let fee = total - 15000;
        benefit.placeholder = `Rp. ${fee.toLocaleString("id-ID")}`;
    } else {
        benefit.placeholder = `Rp. ${total.toLocaleString("id-ID")}`;
    }
}

resetbtn.addEventListener("click", function () {
    reset();
});

submitbtn.addEventListener("click", function () {
    calculate();
    result();
    submit.value = "";
});

check.addEventListener("change", function () {
    result();
});

const thrashItems = document.querySelectorAll(".hover__effect");
const container = document.querySelector(".thrash__type-container");

thrashItems.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.stopPropagation();
        thrashItems.forEach((i) => i.classList.remove("active"));
        item.classList.add("active");
    });
});
document.addEventListener("click", (e) => {
    if (!container.contains(e.target)) {
        thrashItems.forEach((i) => i.classList.remove("active"));
    }
});
