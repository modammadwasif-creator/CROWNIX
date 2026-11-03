 "use strict";

/* ==========================================
CROWNIX CAPS — PRODUCTS & ORDER SYSTEM
========================================== */

const CAPS_WHATSAPP = "923322100970";
const CAPS_DELIVERY = 200;

const CAP_PRODUCTS = [
{
id: "cap-001",
name: "Crownix Black Cap",
category: "black",
price: 450,
badge: "CLASSIC",
description: "A versatile black cap for everyday streetwear and casual outfits.",
image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=85"
},
{
id: "cap-002",
name: "Classic Beige Cap",
category: "light",
price: 500,
badge: "ESSENTIAL",
description: "A neutral beige cap for a clean and relaxed everyday look.",
image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800&q=85"
},
{
id: "cap-003",
name: "Streetwear Snapback",
category: "streetwear",
price: 650,
badge: "STREET EDIT",
description: "A streetwear-inspired cap for a confident modern style.",
image: "https://images.unsplash.com/photo-1588117305388-c2631a279f82?auto=format&fit=crop&w=800&q=85"
},
{
id: "cap-004",
name: "Premium Denim Cap",
category: "streetwear",
price: 700,
badge: "PREMIUM",
description: "A relaxed denim-inspired cap for everyday outfits.",
image: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=800&q=85"
},
{
id: "cap-005",
name: "Minimal White Cap",
category: "light",
price: 450,
badge: "MINIMAL",
description: "A clean and minimal cap for a fresh everyday appearance.",
image: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=800&q=85"
},
{
id: "cap-006",
name: "Urban Trucker Cap",
category: "streetwear",
price: 600,
badge: "URBAN",
description: "A casual trucker-style cap for a modern streetwear look.",
image: "https://i.ibb.co/Zzrr0Nx8/Screenshot-2026-10-24-204244.png"
}
];

let selectedCap = null;
let selectedCapImage = "";
let activeFilter = "all";
let lookbookIndex = 0;
let lookbookTimer = null;

const $ = (selector, root = document) =>
root.querySelector(selector);





/* =====================================================
   CROWNIX — PREMIUM CAPS HERO ANIMATION
   Real external model images + cinematic transitions
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const heroVisual = document.querySelector("#heroVisual");
    const heroScene = document.querySelector("#heroScene");

    const heroHeading = document.querySelector("#heroHeading");
    const heroEyebrow = document.querySelector("#heroEyebrow");
    const heroDescription = document.querySelector("#heroDescription");
    const heroStageLabel = document.querySelector("#heroStageLabel");

    const heroProgressBar = document.querySelector("#heroProgressBar");
    const heroPagination = document.querySelector("#heroPagination");

    const nextButton = document.querySelector("#heroNext");
    const previousButton = document.querySelector("#heroPrevious");

    if (!heroVisual || !heroScene) {
        console.warn("CROWNIX Hero: Required hero elements not found.");
        return;
    }

    /* REAL EXTERNAL IMAGE LINKS */

    const crownixHeroScenes = [

        {
            type: "male",
            image: "https://images.unsplash.com/photo-1653183619130-d54be0f935c2?auto=format&fit=crop&fm=jpg&q=85&w=1600",
            eyebrow: "THE MEN'S COLLECTION",
            title: "OWN YOUR<br>STYLE.",
            description: "A bold look. A confident attitude. Discover the CROWNIX cap collection.",
            label: "01 / MEN'S EDIT",
            effect: "zoom"
        },

        {
            type: "male",
            image: "https://images.unsplash.com/photo-1516419591857-14c5e8ce3a6e?auto=format&fit=crop&fm=jpg&q=85&w=1600",
            eyebrow: "DETAILS THAT MATTER",
            title: "MADE TO<br>STAND OUT.",
            description: "Explore the details and streetwear character of premium caps.",
            label: "02 / CLOSE-UP EDIT",
            effect: "close"
        },

        {
            type: "female",
            image: "https://images.unsplash.com/photo-1755098452314-a8e2a89e3992?auto=format&fit=crop&fm=jpg&q=85&w=1600",
            eyebrow: "THE WOMEN'S COLLECTION",
            title: "YOUR LOOK.<br>YOUR CROWN.",
            description: "A fresh style statement with the CROWNIX cap collection.",
            label: "03 / WOMEN'S EDIT",
            effect: "zoom"
        },

        {
            type: "collection",
            image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&fm=jpg&q=85&w=1600",
            eyebrow: "THE CROWNIX EDIT",
            title: "FIND YOUR<br>ICONIC LOOK.",
            description: "Discover your next favourite cap. Wear your style. Own your crown.",
            label: "04 / COLLECTION",
            effect: "rotate"
        }

    ];

    let currentScene = 0;
    let autoPlayTimer = null;
    let progressTimer = null;

    const AUTO_PLAY_DELAY = 5500;

    /* CREATE HERO IMAGE */

    let heroImage = heroVisual.querySelector(".crownix-hero-image");

    if (!heroImage) {
        heroVisual.innerHTML = "";

        heroImage = document.createElement("img");
        heroImage.className = "crownix-hero-image";

        heroVisual.appendChild(heroImage);
    }

    heroImage.alt = "CROWNIX premium caps collection";

    /* IMAGE PRELOADING */

    crownixHeroScenes.forEach(scene => {
        const image = new Image();
        image.src = scene.image;
    });

    /* CREATE PAGINATION */

    function createPagination() {

        if (!heroPagination) return;

        heroPagination.innerHTML = "";

        crownixHeroScenes.forEach((scene, index) => {

            const button = document.createElement("button");

            button.type = "button";
            button.className = "hero-dot";

            button.setAttribute(
                "aria-label",
                `Show hero scene ${index + 1}`
            );

            button.addEventListener("click", () => {
                showScene(index);
                restartAutoPlay();
            });

            heroPagination.appendChild(button);

        });

    }

    /* UPDATE PAGINATION */

    function updatePagination() {

        if (!heroPagination) return;

        const dots = heroPagination.querySelectorAll(".hero-dot");

        dots.forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentScene
            );

        });

    }

    /* UPDATE PROGRESS */

    function updateProgress() {

        if (!heroProgressBar) return;

        heroProgressBar.style.transition = "none";
        heroProgressBar.style.width = "0%";

        requestAnimationFrame(() => {

            heroProgressBar.style.transition =
                `width ${AUTO_PLAY_DELAY}ms linear`;

            heroProgressBar.style.width = "100%";

        });

    }

    /* SHOW HERO SCENE */

    function showScene(index) {

        currentScene =
            (index + crownixHeroScenes.length) %
            crownixHeroScenes.length;

        const scene = crownixHeroScenes[currentScene];

        heroScene.classList.add("is-changing");

        heroImage.style.opacity = "0";
        heroImage.style.transform =
            "scale(1.18) rotateY(-8deg)";

        setTimeout(() => {

            heroImage.src = scene.image;

            heroImage.onload = () => {

                heroImage.style.transition = "none";

                if (scene.effect === "close") {

                    heroImage.style.transform =
                        "scale(1.22) rotateY(0deg)";

                } else if (scene.effect === "rotate") {

                    heroImage.style.transform =
                        "scale(1.12) rotateY(8deg)";

                } else {

                    heroImage.style.transform =
                        "scale(1.08) rotateY(0deg)";

                }

                requestAnimationFrame(() => {

                    heroImage.style.transition =
                        "opacity 700ms ease, transform 5500ms ease";

                    heroImage.style.opacity = "1";
                    heroImage.style.transform =
                        "scale(1.18) rotateY(0deg)";

                });

            };

            if (heroHeading) {
                heroHeading.innerHTML = scene.title;
            }

            if (heroEyebrow) {
                heroEyebrow.textContent = scene.eyebrow;
            }

            if (heroDescription) {
                heroDescription.textContent = scene.description;
            }

            if (heroStageLabel) {
                heroStageLabel.textContent = scene.label;
            }

            heroScene.dataset.model = scene.type;

            heroScene.classList.remove("is-changing");

            updatePagination();
            updateProgress();

        }, 350);

    }

    /* NEXT / PREVIOUS */

    function nextScene() {

        showScene(currentScene + 1);
        restartAutoPlay();

    }

    function previousScene() {

        showScene(currentScene - 1);
        restartAutoPlay();

    }

    /* AUTOMATIC SLIDESHOW */

    function startAutoPlay() {

        stopAutoPlay();

        autoPlayTimer = setInterval(() => {

            showScene(currentScene + 1);

        }, AUTO_PLAY_DELAY);

    }

    function stopAutoPlay() {

        clearInterval(autoPlayTimer);
        clearInterval(progressTimer);

    }

    function restartAutoPlay() {

        startAutoPlay();

    }

    /* BUTTON EVENTS */

    if (nextButton) {
        nextButton.addEventListener("click", nextScene);
    }

    if (previousButton) {
        previousButton.addEventListener("click", previousScene);
    }

    /* PAUSE WHEN TAB IS NOT ACTIVE */

    document.addEventListener("visibilitychange", () => {

        if (document.hidden) {

            stopAutoPlay();

        } else {

            startAutoPlay();

        }

    });

    /* TOUCH / SWIPE SUPPORT */

    let touchStartX = 0;

    heroVisual.addEventListener("touchstart", event => {

        touchStartX = event.changedTouches[0].screenX;

    }, { passive: true });

    heroVisual.addEventListener("touchend", event => {

        const touchEndX = event.changedTouches[0].screenX;
        const difference = touchStartX - touchEndX;

        if (Math.abs(difference) < 50) return;

        if (difference > 0) {
            nextScene();
        } else {
            previousScene();
        }

    }, { passive: true });

    /* INITIALIZE HERO */

    createPagination();
    showScene(0);
    startAutoPlay();

});



/* ==========================================
PRODUCT CARDS
========================================== */

function renderCaps(filter = "all") {


activeFilter = filter;

const grid = $("#capsProductGrid");

const products = CAP_PRODUCTS.filter(product => {
    return filter === "all" || product.category === filter;
});

grid.innerHTML = products.map((product, index) => `
    <article class="caps-product-card"
        style="animation-delay:${index * 60}ms">

        <div class="caps-product-image"
            data-cap-view="${product.id}">

            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy">

            <span class="caps-product-badge">
                ${product.badge}
            </span>

        </div>

        <div class="caps-product-info">

            <span>CROWNIX / CAPS</span>

            <h3>${product.name}</h3>

            <div class="caps-product-price">
                Rs. ${product.price.toLocaleString("en-PK")}
            </div>

            <button type="button"
                class="caps-view-button"
                data-cap-view="${product.id}">
                VIEW PRODUCT →
            </button>

        </div>

    </article>
`).join("");


}

/* ==========================================
FILTERS
========================================== */

document.querySelectorAll(".caps-filter").forEach(button => {


button.addEventListener("click", () => {

    document.querySelectorAll(".caps-filter").forEach(item => {
        item.classList.remove("active");
    });

    button.classList.add("active");

    renderCaps(button.dataset.filter);
});

});

/* ==========================================
PRODUCT DETAILS & GALLERY
========================================== */

function openCapDetails(productId) {


selectedCap = CAP_PRODUCTS.find(
    product => product.id === productId
);

if (!selectedCap) return;

selectedCapImage = selectedCap.image;

const modal = $("#capsProductModal");

const images = [
    ...new Set([selectedCap.image, ...(selectedCap.images || [])])
];

$("#capsProductDetails").innerHTML = `
    <div class="caps-detail-layout">

        <div>

            <img
                id="capsDetailMainImage"
                class="caps-detail-main-image"
                src="${selectedCapImage}"
                alt="${selectedCap.name}">

            <div class="caps-detail-thumbnails">

                ${images.map((image, index) => `
                    <button type="button"
                        data-cap-image="${index}"
                        aria-label="View image ${index + 1}">

                        <img src="${image}" alt="Cap view ${index + 1}">

                    </button>
                `).join("")}

            </div>

        </div>

        <div class="caps-detail-copy">

            <span>CROWNIX / EXCLUSIVE CAPS</span>

            <h2>${selectedCap.name}</h2>

            <p>${selectedCap.description}</p>

            <strong class="caps-detail-price">
                Rs. ${selectedCap.price.toLocaleString("en-PK")}
            </strong>

            <p>Cash on Delivery Available</p>

            <button type="button"
                class="caps-gold-button"
                id="capsBuyNow">
                ORDER NOW →
            </button>

        </div>

    </div>
`;

modal.classList.add("open");
document.body.style.overflow = "hidden";

$("#capsBuyNow").addEventListener("click", openCapsOrder);


}

/* ==========================================
GALLERY THUMBNAILS
========================================== */

$("#capsProductDetails").addEventListener("click", event => {


const button = event.target.closest("[data-cap-image]");

if (!button || !selectedCap) return;

const images = [
    ...new Set([selectedCap.image, ...(selectedCap.images || [])])
];

const image = images[Number(button.dataset.capImage)];

if (!image) return;

selectedCapImage = image;

$("#capsDetailMainImage").src = image;


});

/* ==========================================
PRODUCT OPEN EVENTS
========================================== */

$("#capsProductGrid").addEventListener("click", event => {


const button = event.target.closest("[data-cap-view]");

if (!button) return;

openCapDetails(button.dataset.capView);


});

/* ==========================================
ORDER FORM
========================================== */

function openCapsOrder() {


if (!selectedCap) return;

$("#capsOrderSummary").textContent =
    `${selectedCap.name} — Rs. ${selectedCap.price}`;

$("#capsOrderQuantity").value = 1;

updateCapsTotal();

$("#capsProductModal").classList.remove("open");
$("#capsOrderModal").classList.add("open");

}

function updateCapsTotal() {


if (!selectedCap) return;

const quantity = Math.max(
    1,
    Math.min(20, Number($("#capsOrderQuantity").value) || 1)
);

$("#capsOrderQuantity").value = quantity;

const subtotal = selectedCap.price * quantity;
const total = subtotal + CAPS_DELIVERY;

$("#capsGrandTotal").textContent =
    `Rs. ${total.toLocaleString("en-PK")}`;


}

$("#capsOrderQuantity").addEventListener(
"input",
updateCapsTotal
);

/* ==========================================
WHATSAPP ORDER SUBMISSION
========================================== */

$("#capsOrderForm").addEventListener("submit", event => {


event.preventDefault();

if (!selectedCap) return;

const name = $("#capsCustomerName").value.trim();
const phone = $("#capsCustomerPhone").value.trim();
const city = $("#capsCustomerCity").value.trim();
const address = $("#capsCustomerAddress").value.trim();

const quantity = Number($("#capsOrderQuantity").value);

if (!name || !phone || !city || !address) {
    alert("Please complete all customer details.");
    return;
}

if (!Number.isInteger(quantity) || quantity < 1 || quantity > 20) {
    alert("Please enter a quantity between 1 and 20.");
    return;
}

const subtotal = selectedCap.price * quantity;
const total = subtotal + CAPS_DELIVERY;

const message = `


👑 CROWNIX — NEW ORDER
CASH ON DELIVERY

CUSTOMER DETAILS
Name: ${name}
Mobile: ${phone}
City: ${city}
Address: ${address}

PRODUCT: ${selectedCap.name}
PRODUCT ID: ${selectedCap.id}
PRICE: Rs. ${selectedCap.price}
QUANTITY: ${quantity}

SUBTOTAL: Rs. ${subtotal}
DELIVERY: Rs. ${CAPS_DELIVERY}
TOTAL: Rs. ${total}

PAYMENT: Cash on Delivery

THANK YOU FOR CHOOSING CROWNIX!
`;


const whatsappURL =
    `https://wa.me/${CAPS_WHATSAPP}?text=${encodeURIComponent(message)}`;

window.open(whatsappURL, "_blank", "noopener,noreferrer");

});

/* ==========================================
MODAL CLOSE
========================================== */

function closeCapsModals() {


$("#capsProductModal").classList.remove("open");
$("#capsOrderModal").classList.remove("open");

document.body.style.overflow = "";


}

$("#capsModalClose").addEventListener("click", closeCapsModals);
$("#capsOrderClose").addEventListener("click", closeCapsModals);

["capsProductModal", "capsOrderModal"].forEach(id => {


const modal = document.getElementById(id);

modal.addEventListener("click", event => {

    if (event.target === modal) {
        closeCapsModals();
    }

});


});

document.addEventListener("keydown", event => {


if (event.key === "Escape") {
    closeCapsModals();
}


});

/* ==========================================
FOOTER YEAR & INITIAL PRODUCTS
========================================== */

$("#capsYear").textContent = new Date().getFullYear();

renderCaps("all");
