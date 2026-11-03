// /* =========================================
//    CROWNIX — HOMEPAGE + WATCHES + CAPS
//    Delivery: Rs. 200
//    Orders: WhatsApp COD
// ========================================= */

// "use strict";

// const STORE_WHATSAPP = "923322100970";
// const DELIVERY_CHARGES = 200;
// const MAX_QUANTITY = 20;

// const $ = (selector, root = document) =>
//     root.querySelector(selector);

// const $$ = (selector, root = document) =>
//     [...root.querySelectorAll(selector)];

// const money = amount =>
//     "Rs. " + Number(amount).toLocaleString("en-PK");

// function escapeHTML(value) {
//     return String(value ?? "").replace(/[&<>"']/g, char => ({
//         "&": "&amp;",
//         "<": "&lt;",
//         ">": "&gt;",
//         '"': "&quot;",
//         "'": "&#39;"
//     }[char]));
// }

// /* =========================================
//    WATCH PRODUCTS
//    Multiple pictures are grouped together.
// ========================================= */

// const WATCH_PRODUCTS = [
//     {
//         id: "watch-0044",
//         name: "Classic Style Watch",
//         audience: "men",
//         price: 2600,
//         image: "https://i.ibb.co/27KTqFL8/IMG-20261025-WA0044.jpg",
//         images: [
//             "https://i.ibb.co/27KTqFL8/IMG-20261025-WA0044.jpg"
//         ],
//         description: "Classic CROWNIX watch collection."
//     },
//     {
//         id: "watch-0069",
//         name: "Premium Style Watch",
//         audience: "men",
//         price: 2400,
//         image: "https://i.ibb.co/HSJcGbx/IMG-20261025-WA0069.jpg",
//         images: [
//             "https://i.ibb.co/HSJcGbx/IMG-20261025-WA0069.jpg"
//         ],
//         description: "Premium everyday watch."
//     },
//     {
//         id: "watch-0028",
//         name: "Signature Watch",
//         audience: "men",
//         price: 2700,
//         image: "https://i.ibb.co/Z1BcmCJL/IMG-20261025-WA0028.jpg",
//         images: [
//             "https://i.ibb.co/Z1BcmCJL/IMG-20261025-WA0028.jpg"
//         ],
//         description: "Signature CROWNIX design."
//     },
//     {
//         id: "watch-0089",
//         name: "Classic Collection Watch",
//         audience: "men",
//         price: 2700,
//         image: "https://i.ibb.co/DPHDFnB3/IMG-20261025-WA0089.jpg",
//         images: [
//             "https://i.ibb.co/DPHDFnB3/IMG-20261025-WA0089.jpg",
//             "https://i.ibb.co/bjKgFnrT/IMG-20261025-WA0088.jpg",
//             "https://i.ibb.co/VYcMNJk7/IMG-20261025-WA0090.jpg"
//         ],
//         description: "Classic watch collection."
//     },
//     {
//         id: "watch-0091",
//         name: "Affordable Style Watch",
//         audience: "men",
//         price: 1700,
//         image: "https://i.ibb.co/p61gkyW0/IMG-20261025-WA0091.jpg",
//         images: [
//             "https://i.ibb.co/p61gkyW0/IMG-20261025-WA0091.jpg"
//         ],
//         description: "Affordable everyday watch."
//     },
//     {
//         id: "watch-0115",
//         name: "Premium Watch",
//         audience: "men",
//         price: 6000,
//         image: "https://i.ibb.co/jvxFyhRM/IMG-20261025-WA0115.jpg",
//         images: [
//             "https://i.ibb.co/jvxFyhRM/IMG-20261025-WA0115.jpg",
//             "https://i.ibb.co/TBtk18Wz/IMG-20261025-WA0114.jpg"
//         ],
//         description: "Premium CROWNIX collection."
//     },
//     {
//         id: "watch-0083",
//         name: "Premium Watch Collection",
//         audience: "men",
//         price: 6000,
//         image: "https://i.ibb.co/TDR6DsW1/IMG-20261025-WA0083.jpg",
//         images: [
//             "https://i.ibb.co/TDR6DsW1/IMG-20261025-WA0083.jpg",
//             "https://i.ibb.co/hJfHtMQN/IMG-20261025-WA0084.jpg",
//             "https://i.ibb.co/G4k7gvK9/IMG-20261025-WA0085.jpg",
//             "https://i.ibb.co/KpstDYdh/IMG-20261025-WA0086.jpg"
//         ],
//         description: "Premium watch with multiple product photos."
//     },
//     {
//         id: "watch-0077",
//         name: "Classic Budget Watch",
//         audience: "men",
//         price: 1100,
//         image: "https://i.ibb.co/bqf7W6J/IMG-20261025-WA0077.jpg",
//         images: [
//             "https://i.ibb.co/bqf7W6J/IMG-20261025-WA0077.jpg",
//             "https://i.ibb.co/wNL1j0zB/IMG-20261025-WA0080.jpg",
//             "https://i.ibb.co/6p5tZjV/IMG-20261025-WA0078.jpg",
//             "https://i.ibb.co/KjZ2D0WX/IMG-20261025-WA0079.jpg"
//         ],
//         description: "Classic everyday watch."
//     },
//     {
//         id: "watch-0124",
//         name: "Classic Watch Design",
//         audience: "men",
//         price: 1350,
//         image: "https://i.ibb.co/B2qPVGgz/IMG-20261025-WA0124.jpg",
//         images: [
//             "https://i.ibb.co/B2qPVGgz/IMG-20261025-WA0124.jpg",
//             "https://i.ibb.co/TqpvYpsS/IMG-20261025-WA0122.jpg",
//             "https://i.ibb.co/JWh50yny/IMG-20261025-WA0123.jpg",
//             "https://i.ibb.co/Gf1T1ytj/IMG-20261025-WA0125.jpg",
//             "https://i.ibb.co/xSB0W9s0/IMG-20261025-WA0126.jpg",
//             "https://i.ibb.co/84D4msSC/IMG-20261025-WA0127.jpg",
//             "https://i.ibb.co/Nn9tZFhb/IMG-20261025-WA0129.jpg"
//         ],
//         description: "Classic watch collection."
//     },
//     {
//         id: "watch-0119",
//         name: "Modern Everyday Watch",
//         audience: "men",
//         price: 1800,
//         image: "https://i.ibb.co/hJpgq3Rb/IMG-20261025-WA0119.jpg",
//         images: [
//             "https://i.ibb.co/hJpgq3Rb/IMG-20261025-WA0119.jpg",
//             "https://i.ibb.co/0jZ03t8B/IMG-20261025-WA0120.jpg",
//             "https://i.ibb.co/Kz83YPqm/IMG-20261025-WA0118.jpg"
//         ],
//         description: "Modern everyday watch."
//     },
//     {
//         id: "watch-ladies-0113",
//         name: "Ladies Watch Collection",
//         audience: "ladies",
//         price: 4000,
//         image: "https://i.ibb.co/Ngg1SCK6/IMG-20261025-WA0113.jpg",
//         images: [
//             "https://i.ibb.co/Ngg1SCK6/IMG-20261025-WA0113.jpg",
//             "https://i.ibb.co/n85RN1Wf/IMG-20261025-WA0112.jpg",
//             "https://i.ibb.co/K82WF91/IMG-20261025-WA0111.jpg",
//             "https://i.ibb.co/MDXJHk4c/IMG-20261025-WA0110.jpg",
//             "https://i.ibb.co/Cs6QxhgP/IMG-20261025-WA0109.jpg",
//             "https://i.ibb.co/fVKVJj6p/IMG-20261025-WA0108.jpg",
//             "https://i.ibb.co/nsSd66Qs/IMG-20261025-WA0107.jpg",
//             "https://i.ibb.co/DDxy2wkX/IMG-20261025-WA0106.jpg"
//         ],
//         description: "Ladies CROWNIX watch collection."
//     },
//     {
//         id: "watch-ladies-0076",
//         name: "Ladies Signature Watch",
//         audience: "ladies",
//         price: 2700,
//         image: "https://i.ibb.co/ymxBrxQF/IMG-20261025-WA0076.jpg",
//         images: [
//             "https://i.ibb.co/ymxBrxQF/IMG-20261025-WA0076.jpg",
//             "https://i.ibb.co/nqqhw5xG/IMG-20261025-WA0075.jpg",
//             "https://i.ibb.co/7d7khVyG/IMG-20261025-WA0073.jpg",
//             "https://i.ibb.co/tPnhyXVJ/IMG-20261025-WA0074.jpg",
//             "https://i.ibb.co/qYvSj0X5/IMG-20261025-WA0071.jpg"
//         ],
//         description: "Ladies signature watch."
//     },
//     {
//         id: "watch-box-0051",
//         name: "Watch Gift Set",
//         audience: "men",
//         price: 1700,
//         boxPrice: 1800,
//         hasBoxOption: true,
//         image: "https://i.ibb.co/7Jxyhg9Z/IMG-20261025-WA0051.jpg",
//         images: [
//             "https://i.ibb.co/7Jxyhg9Z/IMG-20261025-WA0051.jpg",
//             "https://i.ibb.co/Y7y1nfLV/IMG-20261025-WA0050.jpg",
//             "https://i.ibb.co/V7sB52K/IMG-20261025-WA0052.jpg",
//             "https://i.ibb.co/cSWRF6Tj/IMG-20261025-WA0055.jpg",
//             "https://i.ibb.co/8nZQZK92/IMG-20261025-WA0057.jpg",
//             "https://i.ibb.co/zhyGBZfz/IMG-20261025-WA0054.jpg"
//         ],
//         description: "Choose this watch with or without its box."
//     }
// ];

// /* =========================================
//    CAPS
// ========================================= */

// const CAP_PRODUCTS = [
//      
//     {
//         id: "cap-002",
//         name: "Classic Beige Cap",
//         category: "caps",
//         price: 500,
//   image: "https://i.ibb.co/21x80LQ5/IMG-20261024-WA0175.jpg",
//     }, 
//     {
//         id: "cap-006",
//         name: "Urban Trucker Cap",
//         category: "caps",
//         price: 600,
//         image: "https://i.ibb.co/Zzrr0Nx8/Screenshot-2026-10-24-204244.png"
//     }
// ];

// const PRODUCTS = [
//     ...WATCH_PRODUCTS.map(product => ({
//         ...product,
//         category: "watches"
//     })),
//     ...CAP_PRODUCTS
// ];

// let activeHomeCategory = "all";
// let activeWatchAudience = "all";
// let activeProduct = null;
// let activeImageIndex = 0;

// /* =========================================
//    PAGE DETECTION
// ========================================= */

// function getPageType() {
//     if ($("#categoryFilters")) return "home";
//     if ($$(".category-btn").length) return "watches";
//     if (location.pathname.toLowerCase().includes("caps")) {
//         return "caps";
//     }
//     return "home";
// }

// const PAGE_TYPE = getPageType();

// /* =========================================
//    PRODUCT CARDS
// ========================================= */

// function productCard(product, index = 0) {
//     return `
//         <article class="product-card"
//                  style="animation-delay:${index * 35}ms">

//             <div class="product-image-wrap"
//                  data-view-product="${escapeHTML(product.id)}"
//                  role="button"
//                  tabindex="0">

//                 <img src="${escapeHTML(product.image)}"
//                      alt="${escapeHTML(product.name)}"
//                      loading="lazy">

//                 <span class="product-badge">
//                     CROWNIX
//                 </span>
//             </div>

//             <p class="product-category">
//                 ${product.category === "caps"
//                     ? "CAPS"
//                     : product.audience === "ladies"
//                         ? "LADIES WATCH"
//                         : "WATCHES"}
//             </p>

//             <h3 class="product-name">
//                 ${escapeHTML(product.name)}
//             </h3>

//             <p class="product-price">
//                 ${money(product.price)}
//             </p>

//             <button class="add-to-bag"
//                     data-view-product="${escapeHTML(product.id)}">
//                 VIEW DETAILS
//             </button>

//         </article>
//     `;
// }

// /* =========================================
//    HOMEPAGE
//    Only 6 featured products are shown.
// ========================================= */

// function renderHomeProducts() {
//     const grid = $("#productGrid");
//     if (!grid) return;

//     let products = PRODUCTS;

//     if (activeHomeCategory !== "all") {
//         products = products.filter(product =>
//             product.category === activeHomeCategory
//         );
//     }

//     const search = ($("#productSearch")?.value || "")
//         .trim()
//         .toLowerCase();

//     if (search) {
//         products = products.filter(product =>
//             product.name.toLowerCase().includes(search)
//         );
//     }

//     const sort = $("#sortProducts")?.value;

//     if (sort === "price-asc") {
//         products = [...products].sort((a, b) => a.price - b.price);
//     } else if (sort === "price-desc") {
//         products = [...products].sort((a, b) => b.price - a.price);
//     }

//     /*
//       Homepage featured selection:
//       4 watches + 2 caps = 6 products.
//       Watches/caps pages retain their full collections.
//     */
//     const featuredIds = [
//         "watch-0044",
//         "watch-0069",
//         "watch-0028",
//         "watch-0083",
//         "cap-001",
//         "cap-002"
//     ];

//     if (
//         !search &&
//         (!sort || sort === "featured") &&
//         activeHomeCategory === "all"
//     ) {
//         products = featuredIds
//             .map(id => PRODUCTS.find(product => product.id === id))
//             .filter(Boolean);
//     } else if (
//         activeHomeCategory === "all" &&
//         !search &&
//         sort !== "price-asc" &&
//         sort !== "price-desc"
//     ) {
//         products = products.filter(product =>
//             featuredIds.includes(product.id)
//         );
//     }

//     grid.innerHTML = products
//         .map((product, index) => productCard(product, index))
//         .join("");

//     bindImageFallbacks(grid);
// }

// /* =========================================
//    WATCHES PAGE
//    Full watches collection.
// ========================================= */

// function renderWatchProducts() {
//     const grid = $("#productGrid");
//     if (!grid) return;

//     let products = WATCH_PRODUCTS;

//     if (activeWatchAudience !== "all") {
//         products = products.filter(product =>
//             product.audience === activeWatchAudience
//         );
//     }

//     grid.innerHTML = products
//         .map((product, index) => productCard(product, index))
//         .join("");

//     const title = $("#sectionTitle");

//     if (title) {
//         title.textContent =
//             activeWatchAudience === "men"
//                 ? "Men's Watch Collection"
//                 : activeWatchAudience === "ladies"
//                     ? "Ladies' Watch Collection"
//                     : "Our Watch Collection";
//     }

//     $$(".category-btn").forEach(button => {
//         button.classList.toggle(
//             "active",
//             button.dataset.category === activeWatchAudience
//         );
//     });

//     bindImageFallbacks(grid);
// }

// /* =========================================
//    CAPS PAGE
// ========================================= */

// function renderCapsProducts() {
//     const grid = $("#productGrid");
//     if (!grid) return;

//     grid.innerHTML = CAP_PRODUCTS
//         .map((product, index) => productCard(product, index))
//         .join("");

//     bindImageFallbacks(grid);
// }

// /* =========================================
//    IMAGE FALLBACK
// ========================================= */

// function bindImageFallbacks(root) {
//     $$("img", root).forEach(img => {
//         img.addEventListener("error", () => {
//             img.alt = "Image could not be loaded";
//         }, { once: true });
//     });
// }

// /* =========================================
//    PRODUCT DETAILS + GALLERY
// ========================================= */

// function ensureProductModal() {
//     if ($("#productModal")) return;

//     const modal = document.createElement("div");
//     modal.id = "productModal";
//     modal.className = "modal-backdrop hidden";

//     modal.innerHTML = `
//         <div class="modal" role="dialog" aria-modal="true">
//             <button type="button"
//                     id="closeModal"
//                     aria-label="Close">
//                 ×
//             </button>
//             <div id="productDetails"></div>
//         </div>
//     `;

//     document.body.appendChild(modal);

//     $("#closeModal", modal).addEventListener("click", closeProductModal);

//     modal.addEventListener("click", event => {
//         if (event.target === modal) closeProductModal();
//     });
// }

// function showProductDetails(id) {
//     const product = PRODUCTS.find(item => item.id === id);
//     if (!product) return;

//     activeProduct = product;
//     activeImageIndex = 0;

//     ensureProductModal();

//     const content =
//         $("#productModalContent") ||
//         $("#productDetails");

//     if (!content) return;

//     renderProductDetails(content);
//     openProductModal();
// }

// function renderProductDetails(content) {
//     const product = activeProduct;
//     if (!product) return;

//     const images = product.images || [product.image];

//     content.innerHTML = `
//         <div class="product-modal-layout">

//             <div class="product-gallery">

//                 <img class="product-modal-image"
//                      id="mainProductImage"
//                      src="${escapeHTML(images[activeImageIndex])}"
//                      alt="${escapeHTML(product.name)}">

//                 <div class="product-thumbnails">
//                     ${images.map((image, index) => `
//                         <button type="button"
//                                 class="gallery-thumb ${index === activeImageIndex ? "active" : ""}"
//                                 data-gallery-index="${index}">
//                             <img src="${escapeHTML(image)}"
//                                  alt="Product photo ${index + 1}">
//                         </button>
//                     `).join("")}
//                 </div>

//             </div>

//             <div class="product-modal-info">

//                 <p class="eyebrow">CROWNIX COLLECTION</p>

//                 <h2>${escapeHTML(product.name)}</h2>

//                 <p>${escapeHTML(product.description || "")}</p>

//                 <h3 id="detailPrice">
//                     ${money(product.price)}
//                 </h3>

//                 ${
//                     product.hasBoxOption
//                         ? `
//                             <label for="boxOption">Box Option</label>
//                             <select id="boxOption">
//                                 <option value="no">
//                                     Without Box — ${money(product.price)}
//                                 </option>
//                                 <option value="yes">
//                                     With Box — ${money(product.boxPrice)}
//                                 </option>
//                             </select>
//                         `
//                         : ""
//                 }

//                 <label for="detailQuantity">Quantity</label>

//                 <input type="number"
//                        id="detailQuantity"
//                        min="1"
//                        max="${MAX_QUANTITY}"
//                        value="1">

//                 <p>
//                     Delivery Charges:
//                     <strong>${money(DELIVERY_CHARGES)}</strong>
//                 </p>

//                 <p>
//                     Total:
//                     <strong id="detailTotal">
//                         ${money(product.price + DELIVERY_CHARGES)}
//                     </strong>
//                 </p>

//                 <button type="button"
//                         class="button button-gold"
//                         id="placeProductOrder">
//                     ORDER NOW
//                 </button>

//             </div>
//         </div>
//     `;

//     $$("[data-gallery-index]", content).forEach(button => {
//         button.addEventListener("click", () => {
//             activeImageIndex = Number(button.dataset.galleryIndex);
//             renderProductDetails(content);
//         });
//     });

//     $("#boxOption", content)?.addEventListener("change", updateDetailTotal);
//     $("#detailQuantity", content)?.addEventListener("input", updateDetailTotal);

//     $("#placeProductOrder", content).addEventListener("click", () => {
//         const box = $("#boxOption", content)?.value === "yes";
//         const quantity = getDetailQuantity();

//         openCustomerOrderForm(product, quantity, box);
//     });
// }

// function getDetailQuantity() {
//     const quantity = Number($("#detailQuantity")?.value || 1);

//     if (!Number.isInteger(quantity) || quantity < 1) return 1;

//     return Math.min(quantity, MAX_QUANTITY);
// }

// function getSelectedPrice(product, box) {
//     return product.hasBoxOption && box
//         ? product.boxPrice
//         : product.price;
// }

// function updateDetailTotal() {
//     if (!activeProduct) return;

//     const box = $("#boxOption")?.value === "yes";
//     const quantity = getDetailQuantity();

//     const subtotal =
//         getSelectedPrice(activeProduct, box) * quantity;

//     const total = subtotal + DELIVERY_CHARGES;

//     if ($("#detailTotal")) {
//         $("#detailTotal").textContent = money(total);
//     }

//     if ($("#detailPrice")) {
//         $("#detailPrice").textContent =
//             money(getSelectedPrice(activeProduct, box));
//     }
// }
 
// function openProductModal() {
//     const modal = document.getElementById("productModal");

//     if (!modal) {
//         console.error("CROWNIX: productModal element not found!");
//         return;
//     }

//     modal.classList.remove("hidden");
//     modal.style.display = "flex";
//     modal.style.visibility = "visible";
//     modal.style.opacity = "1";
//     modal.style.pointerEvents = "auto";
//     modal.style.zIndex = "99999";

//     document.body.classList.add("modal-open");

//     console.log("CROWNIX: Product modal opened.");
// }

// function closeProductModal() {
//     const modal = document.getElementById("productModal");

//     if (!modal) return;

//     modal.classList.add("hidden");
//     modal.style.display = "none";
//     modal.style.visibility = "hidden";
//     modal.style.opacity = "0";
//     modal.style.pointerEvents = "none";

//     document.body.classList.remove("modal-open");
// }

// document.addEventListener("click", function (event) {
//     const closeButton = event.target.closest("#closeModal");

//     if (closeButton) {
//         event.preventDefault();
//         closeProductModal();
//         return;
//     }

//     const modal = document.getElementById("productModal");

//     if (modal && event.target === modal) {
//         closeProductModal();
//     }
// });

// /* =========================================
//    CUSTOMER ORDER FORM
//    Works on both homepage and watches page.
// ========================================= */

// function ensureCustomerOrderModal() {
//     if ($("#customerOrderModal")) return;

//     const modal = document.createElement("div");

//     modal.id = "customerOrderModal";
//     modal.className = "modal-backdrop hidden";

//     modal.innerHTML = `
//         <div class="modal order-modal" role="dialog" aria-modal="true">

//             <button type="button"
//                     id="closeCustomerOrder"
//                     aria-label="Close">
//                 ×
//             </button>

//             <h2>Complete Your Order</h2>
//             <p id="customerOrderProduct"></p>

//             <form id="customerOrderForm">

//                 <label for="orderName">Full Name *</label>
//                 <input id="orderName"
//                        name="name"
//                        required
//                        maxlength="100"
//                        autocomplete="name">

//                 <label for="orderPhone">Mobile Number *</label>
//                 <input id="orderPhone"
//                        name="phone"
//                        type="tel"
//                        required
//                        maxlength="20"
//                        autocomplete="tel"
//                        placeholder="03XXXXXXXXX">

//                 <label for="orderCity">City *</label>
//                 <input id="orderCity"
//                        name="city"
//                        required
//                        maxlength="80"
//                        autocomplete="address-level2">

//                 <label for="orderAddress">Complete Address *</label>
//                 <textarea id="orderAddress"
//                           name="address"
//                           required
//                           maxlength="500"
//                           autocomplete="street-address"></textarea>

//                 <div class="order-total-box">
//                     <p>Product Subtotal:
//                         <strong id="customerSubtotal"></strong>
//                     </p>
//                     <p>Delivery:
//                         <strong>${money(DELIVERY_CHARGES)}</strong>
//                     </p>
//                     <p>Total Amount:
//                         <strong id="customerGrandTotal"></strong>
//                     </p>
//                 </div>

//                 <button type="submit" class="button button-gold">
//                     CONFIRM ORDER ON WHATSAPP
//                 </button>

//             </form>
//         </div>
//     `;

//     document.body.appendChild(modal);

//     $("#closeCustomerOrder").addEventListener("click", () => {
//         modal.classList.add("hidden");
//         document.body.classList.remove("modal-open");
//     });

//     modal.addEventListener("click", event => {
//         if (event.target === modal) {
//             modal.classList.add("hidden");
//             document.body.classList.remove("modal-open");
//         }
//     });

//     $("#customerOrderForm").addEventListener("submit", submitCustomerOrder);
// }

// let pendingOrder = null;

// function openCustomerOrderForm(product, quantity, box) {
//     ensureCustomerOrderModal();

//     const unitPrice = getSelectedPrice(product, box);
//     const subtotal = unitPrice * quantity;

//     pendingOrder = {
//         product,
//         quantity,
//         box,
//         unitPrice,
//         subtotal,
//         total: subtotal + DELIVERY_CHARGES
//     };

//     $("#customerOrderProduct").textContent =
//         `${product.name} × ${quantity}` +
//         (product.hasBoxOption
//             ? (box ? " — With Box" : " — Without Box")
//             : "");

//     $("#customerSubtotal").textContent = money(subtotal);
//     $("#customerGrandTotal").textContent =
//         money(subtotal + DELIVERY_CHARGES);

//     closeProductModal();

//     const oldOrderModal = $("#orderModal");
//     if (oldOrderModal) oldOrderModal.classList.add("hidden");

//     $("#customerOrderModal").classList.remove("hidden");
//     $("#customerOrderModal").style.display = "flex";
//     document.body.classList.add("modal-open");
// }

// function submitCustomerOrder(event) {
//     event.preventDefault();

//     if (!pendingOrder) return;

//     const name = $("#orderName").value.trim();
//     const phone = $("#orderPhone").value.trim();
//     const city = $("#orderCity").value.trim();
//     const address = $("#orderAddress").value.trim();

//     const phoneDigits = phone.replace(/\D/g, "");

//     if (!name || !phone || !city || !address) {
//         alert("Please complete all customer details.");
//         return;
//     }

//     if (phoneDigits.length < 10 || phoneDigits.length > 15) {
//         alert("Please enter a valid mobile number.");
//         return;
//     }

//     sendOrderToWhatsApp({
//         ...pendingOrder,
//         name,
//         phone,
//         city,
//         address
//     });

//     $("#customerOrderModal").classList.add("hidden");
//     $("#customerOrderModal").style.display = "";
//     document.body.classList.remove("modal-open");

//     $("#customerOrderForm").reset();
// }

// function sendOrderToWhatsApp(order) {
//     const product = order.product;

//     const reference =
//         "CRX-" + Date.now().toString().slice(-8);

//     const message = [
//         "👑 CROWNIX — NEW COD ORDER",
//         "",
//         "Order Reference: " + reference,
//         "",
//         "CUSTOMER DETAILS",
//         "Name: " + order.name,
//         "Mobile: " + order.phone,
//         "City: " + order.city,
//         "Address: " + order.address,
//         "",
//         "PRODUCT DETAILS",
//         "Product: " + product.name,
//         "Category: " + (product.category || "watches"),
//         "Box: " + (
//             product.hasBoxOption
//                 ? (order.box ? "With Box" : "Without Box")
//                 : "Not applicable"
//         ),
//         "Quantity: " + order.quantity,
//         "Price Each: " + money(order.unitPrice),
//         "Subtotal: " + money(order.subtotal),
//         "Delivery Charges: " + money(DELIVERY_CHARGES),
//         "TOTAL AMOUNT: " + money(order.total),
//         "",
//         "Payment Method: Cash on Delivery (COD)"
//     ].join("\n");

//     const url =
//         "https://wa.me/" +
//         STORE_WHATSAPP +
//         "?text=" +
//         encodeURIComponent(message);

//     window.open(url, "_blank", "noopener,noreferrer");
// }

// /* =========================================
//    HOMEPAGE FILTERS + SEARCH
// ========================================= */

// function initHome() {
//     $("#categoryFilters")?.addEventListener("click", event => {
//         const button = event.target.closest("[data-category]");
//         if (!button) return;

//         activeHomeCategory = button.dataset.category;

//         $$(".filter", $("#categoryFilters")).forEach(filter => {
//             filter.classList.toggle("active", filter === button);
//         });

//         renderHomeProducts();
//     });

//     $("#productSearch")?.addEventListener("input", renderHomeProducts);
//     $("#sortProducts")?.addEventListener("change", renderHomeProducts);

//     renderHomeProducts();
// }

// /* =========================================
//    WATCHES FILTERS
// ========================================= */

// function initWatches() {
//     $$(".category-btn").forEach(button => {
//         button.addEventListener("click", () => {
//             activeWatchAudience = button.dataset.category;
//             renderWatchProducts();
//         });
//     });

//     renderWatchProducts();
// }

// /* =========================================
//    SHARED EVENTS
// ========================================= */

// function initSharedEvents() {
//     $("#menuToggle")?.addEventListener("click", () => {
//         const nav = $("#mainNav");
//         if (!nav) return;

//         nav.classList.toggle("open");

//         $("#menuToggle").setAttribute(
//             "aria-expanded",
//             String(nav.classList.contains("open"))
//         );
//     });

//     $("#mainNav")?.querySelectorAll("a").forEach(link => {
//         link.addEventListener("click", () => {
//             $("#mainNav")?.classList.remove("open");
//         });
//     });

//     $("#searchToggle")?.addEventListener("click", () => {
//         $("#productSearch")?.focus();

//         $("#collections")?.scrollIntoView({
//             behavior: "smooth"
//         });
//     });

//     $("#contactWhatsApp")?.setAttribute(
//         "href",
//         "https://wa.me/" + STORE_WHATSAPP
//     );

//     $("#year") && ($("#year").textContent = new Date().getFullYear());

//     $("#backTop")?.addEventListener("click", () => {
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth"
//         });
//     });

//     document.addEventListener("click", event => {
//         const view = event.target.closest("[data-view-product]");

//         if (view) {
//             showProductDetails(view.dataset.viewProduct);
//             return;
//         }

//         const close = event.target.closest("[data-close]");

//         if (close) {
//             const modal = document.getElementById(close.dataset.close);

//             if (modal) {
//                 modal.classList.add("hidden");
//                 document.body.classList.remove("modal-open");
//             }
//         }
//     });

//     document.addEventListener("keydown", event => {
//         if (event.key === "Escape") {
//             closeProductModal();

//             $("#customerOrderModal")?.classList.add("hidden");
//             document.body.classList.remove("modal-open");
//         }

//         if (
//             (event.key === "Enter" || event.key === " ") &&
//             event.target.matches("[data-view-product]")
//         ) {
//             event.preventDefault();
//             showProductDetails(event.target.dataset.viewProduct);
//         }
//     });
// }

// /* =========================================
//    START WEBSITE
// ========================================= */

// function initCrownix() {
//     if (PAGE_TYPE === "home") {
//         initHome();
//     } else if (PAGE_TYPE === "watches") {
//         initWatches();
//     } else if (PAGE_TYPE === "caps") {
//         renderCapsProducts();
//     }

//     initSharedEvents();

//     console.log("CROWNIX website initialized successfully.");
// }

// if (document.readyState === "loading") {
//     document.addEventListener("DOMContentLoaded", initCrownix);
// } else {
//     initCrownix();
// }

 






































































































/* =========================================
   CROWNIX — HOME + WATCHES PAGE
   Complete JavaScript
========================================= */
"use strict";

const STORE_WHATSAPP = "923322100970";
const DELIVERY_CHARGES = 200;
const CART_STORAGE_KEY = "crownix_cart_v1";

const WATCH_PRODUCTS = [
  {
    id: "watch-0044",
    name: "Classic Style Watch",
    category: "watches",
    audience: "men",
    price: 2600,
    badge: "CROWNIX",
    description: "A stylish everyday watch from the CROWNIX collection.",
    image: "https://i.ibb.co/27KTqFL8/IMG-20261025-WA0044.jpg",
    images: ["https://i.ibb.co/27KTqFL8/IMG-20261025-WA0044.jpg"],
    active: true
  },
  {
    id: "watch-0069",
    name: "Premium Style Watch",
    category: "watches",
    audience: "men",
    price: 2400,
    badge: "POPULAR",
    description: "A refined watch style for everyday wear.",
    image: "https://i.ibb.co/HSJcGbx/IMG-20261025-WA0069.jpg",
    images: ["https://i.ibb.co/HSJcGbx/IMG-20261025-WA0069.jpg"],
    active: true
  },
  {
    id: "watch-0028",
    name: "Signature Watch",
    category: "watches",
    audience: "men",
    price: 2700,
    badge: "SIGNATURE",
    description: "A statement watch from the CROWNIX collection.",
    image: "https://i.ibb.co/Z1BcmCJL/IMG-20261025-WA0028.jpg",
    images: ["https://i.ibb.co/Z1BcmCJL/IMG-20261025-WA0028.jpg"],
    active: true
  },
  {
    id: "watch-0089",
    name: "Classic Collection Watch",
    category: "watches",
    audience: "men",
    price: 2700,
    badge: "CROWNIX",
    description: "A classic watch style from the collection.",
    image: "https://i.ibb.co/DPHDFnB3/IMG-20261025-WA0089.jpg",
    images: ["https://i.ibb.co/DPHDFnB3/IMG-20261025-WA0089.jpg"],
    active: true
  },
  {
    id: "watch-0088",
    name: "Everyday Collection Watch",
    category: "watches",
    audience: "men",
    price: 2700,
    badge: "CROWNIX",
    description: "A versatile watch style from the collection.",
    image: "https://i.ibb.co/bjKgFnrT/IMG-20261025-WA0088.jpg",
    images: ["https://i.ibb.co/bjKgFnrT/IMG-20261025-WA0088.jpg"],
    active: true
  },
  {
    id: "watch-0090",
    name: "Modern Collection Watch",
    category: "watches",
    audience: "men",
    price: 2700,
    badge: "CROWNIX",
    description: "A modern watch style from the collection.",
    image: "https://i.ibb.co/VYcMNJk7/IMG-20261025-WA0090.jpg",
    images: ["https://i.ibb.co/VYcMNJk7/IMG-20261025-WA0090.jpg"],
    active: true
  },
  {
    id: "watch-0091",
    name: "Affordable Style Watch",
    category: "watches",
    audience: "men",
    price: 1700,
    badge: "VALUE",
    description: "A stylish option at an accessible price.",
    image: "https://i.ibb.co/p61gkyW0/IMG-20261025-WA0091.jpg",
    images: ["https://i.ibb.co/p61gkyW0/IMG-20261025-WA0091.jpg"],
    active: true
  },
  {
    id: "watch-0083",
    name: "Premium Watch Collection",
    category: "watches",
    audience: "men",
    price: 1100,
    badge: "PREMIUM",
    description: "A premium watch collection.",
    image: "https://i.ibb.co/TDR6DsW1/IMG-20261025-WA0083.jpg",
    images: [
      "https://i.ibb.co/TDR6DsW1/IMG-20261025-WA0083.jpg",
      "https://i.ibb.co/hJfHtMQN/IMG-20261025-WA0084.jpg",
      "https://i.ibb.co/G4k7gvK9/IMG-20261025-WA0085.jpg",
      "https://i.ibb.co/KpstDYdh/IMG-20261025-WA0086.jpg"
    ],
    active: true
  },
  {
    id: "watch-0077",
    name: "Classic Budget Watch",
    category: "watches",
    audience: "men",
    price: 1100,
    badge: "VALUE",
    description: "A simple everyday watch.",
    image: "https://i.ibb.co/bqf7W6J/IMG-20261025-WA0077.jpg",
    images: [
      "https://i.ibb.co/bqf7W6J/IMG-20261025-WA0077.jpg",
      "https://i.ibb.co/wNL1j0zB/IMG-20261025-WA0080.jpg",
      "https://i.ibb.co/6p5tZjV/IMG-20261025-WA0078.jpg",
      "https://i.ibb.co/KjZ2D0WX/IMG-20261025-WA0079.jpg"
    ],
    active: true
  },
  {
    id: "watch-0124",
    name: "Classic Watch Design",
    category: "watches",
    audience: "men",
    price: 1350,
    badge: "VALUE",
    description: "A classic everyday watch.",
    image: "https://i.ibb.co/B2qPVGgz/IMG-20261025-WA0124.jpg",
    images: [
      "https://i.ibb.co/B2qPVGgz/IMG-20261025-WA0124.jpg",
      "https://i.ibb.co/TqpvYpsS/IMG-20261025-WA0122.jpg",
      "https://i.ibb.co/JWh50yny/IMG-20261025-WA0123.jpg",
      "https://i.ibb.co/Gf1T1ytj/IMG-20261025-WA0125.jpg",
      "https://i.ibb.co/xSB0W9s0/IMG-20261025-WA0126.jpg",
      "https://i.ibb.co/84D4msSC/IMG-20261025-WA0127.jpg",
      "https://i.ibb.co/Nn9tZFhb/IMG-20261025-WA0129.jpg"
    ],
    active: true
  },
  {
    id: "watch-0119",
    name: "Modern Everyday Watch",
    category: "watches",
    audience: "men",
    price: 1800,
    badge: "CROWNIX",
    description: "A modern everyday watch.",
    image: "https://i.ibb.co/hJpgq3Rb/IMG-20261025-WA0119.jpg",
    images: [
      "https://i.ibb.co/hJpgq3Rb/IMG-20261025-WA0119.jpg",
      "https://i.ibb.co/0jZ03t8B/IMG-20261025-WA0120.jpg",
      "https://i.ibb.co/Kz83YPqm/IMG-20261025-WA0118.jpg"
    ],
    active: true
  },
  {
    id: "watch-box-0051",
    name: "Watch Gift Set",
    category: "watches",
    audience: "men",
    price: 1700,
    boxPrice: 1800,
    hasBoxOption: true,
    badge: "BOX OPTION",
    description: "Available with or without its box.",
    image: "https://i.ibb.co/7Jxyhg9Z/IMG-20261025-WA0051.jpg",
    images: [
      "https://i.ibb.co/7Jxyhg9Z/IMG-20261025-WA0051.jpg",
      "https://i.ibb.co/Y7y1nfLV/IMG-20261025-WA0050.jpg",
      "https://i.ibb.co/V7sB52K/IMG-20261025-WA0052.jpg",
      "https://i.ibb.co/cSWRF6Tj/IMG-20261025-WA0055.jpg",
      "https://i.ibb.co/8nZQZK92/IMG-20261025-WA0057.jpg",
      "https://i.ibb.co/zhyGBZfz/IMG-20261025-WA0054.jpg"
    ],
    active: true
  }
];

const CAP_PRODUCTS = [
   
  {
    id: "cap-002",
    name: "Classic Beige Cap",
    category: "caps",
    price: 500,
    badge: "CAPS",
    description: "A neutral cap for casual outfits.",
  image: "https://i.ibb.co/21x80LQ5/IMG-20261024-WA0175.jpg",
    active: true
  },
  
  {
    id: "cap-006",
    name: "Urban Trucker Cap",
    category: "caps",
    price: 600,
    badge: "CAPS",
    description: "A casual trucker-style cap.",
    image: "https://i.ibb.co/Zzrr0Nx8/Screenshot-2026-10-24-204244.png",
    active: true
  }
];

const PRODUCTS = [...WATCH_PRODUCTS, ...CAP_PRODUCTS];

const $ = (selector, root = document) =>
  root.querySelector(selector);

const $$ = (selector, root = document) =>
  [...root.querySelectorAll(selector)];

let cart = loadCart();
let activeHomeCategory = "all";
let activeWatchAudience = "all";
let searchQuery = "";
let sortMode = "featured";
let toastTimer;

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, ch => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[ch]));
}

function formatPrice(value) {
  return "Rs. " + Number(value || 0).toLocaleString("en-PK");
}

function loadCart() {
  try {
    const saved = JSON.parse(
      localStorage.getItem(CART_STORAGE_KEY) || "[]"
    );
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify(cart)
    );
  } catch (error) {
    console.warn("Cart could not be saved.", error);
  }
}

function getProduct(id) {
  return PRODUCTS.find(product => product.id === id);
}

function priceFor(product, box = false) {
  return box && product.hasBoxOption
    ? product.boxPrice
    : product.price;
}

function showToast(message) {
  let toast = $("#crownixToast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "crownixToast";
    toast.style.cssText =
      "position:fixed;bottom:22px;left:50%;transform:translateX(-50%);" +
      "background:#171717;color:#edbd61;padding:13px 20px;" +
      "border:1px solid #edbd61;border-radius:8px;z-index:100000;" +
      "font:14px Arial,sans-serif;max-width:90%;text-align:center;";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.display = "block";

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.style.display = "none";
  }, 3000);
}

function openModal(id) {
  const modal = document.getElementById(id);

  if (!modal) {
    console.error("CROWNIX: Modal not found:", id);
    showToast("Product window is missing from the HTML.");
    return;
  }

  modal.classList.remove("hidden");

  Object.assign(modal.style, {
    display: "flex",
    position: "fixed",
    inset: "0",
    zIndex: "99999",
    alignItems: "center",
    justifyContent: "center",
    visibility: "visible",
    opacity: "1",
    pointerEvents: "auto",
    background: "rgba(0,0,0,0.85)",
    overflowY: "auto"
  });

  const panel = modal.querySelector(
    ".modal-panel, .modal, [role='dialog']"
  );

  if (panel) {
    Object.assign(panel.style, {
      display: "block",
      visibility: "visible",
      opacity: "1",
      position: "relative",
      zIndex: "100000",
      background: "#f7f5f0",
      color: "#171715",
      width: "min(900px, 94vw)",
      maxHeight: "90vh",
      overflowY: "auto",
      margin: "auto",
      padding: "20px",
      borderRadius: "14px"
    });
  }

  document.body.classList.add("modal-open");
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;

  modal.classList.add("hidden");

  Object.assign(modal.style, {
    display: "none",
    visibility: "hidden",
    opacity: "0",
    pointerEvents: "none"
  });

  if (!document.querySelector(
    ".modal-backdrop:not(.hidden)"
  )) {
    document.body.classList.remove("modal-open");
  }
}

function closeAllModals() {
  $$(".modal-backdrop").forEach(modal => {
    modal.classList.add("hidden");
    modal.style.display = "none";
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
    modal.style.pointerEvents = "none";
  });

  document.body.classList.remove("modal-open");
}

function updateCartCount() {
  const count = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  $$("[data-cart-count]").forEach(element => {
    element.textContent = count;
  });

  const badge = $("#cartCount");
  if (badge) badge.textContent = count;
}

function renderHomeProducts() {
  const grid = $("#productGrid");
  if (!grid) return;
let list = [
    ...WATCH_PRODUCTS.filter(product => product.active).slice(0, 2),
    ...CAP_PRODUCTS.filter(product => product.active).slice(0, 2)
];

  if (activeHomeCategory !== "all") {
    list = list.filter(
      product => product.category === activeHomeCategory
    );
  }

  if (searchQuery) {
    list = list.filter(product =>
      (product.name + " " + product.description)
        .toLowerCase()
        .includes(searchQuery)
    );
  }

  if (sortMode === "price-low") {
    list.sort((a, b) => a.price - b.price);
  } else if (sortMode === "price-high") {
    list.sort((a, b) => b.price - a.price);
  }

  if (!list.length) {
    grid.innerHTML =
      '<p class="empty-results">No products found.</p>';
    return;
  }

  grid.innerHTML = list.map(product => `
    <article class="product-card">
      <button class="product-image-button"
        type="button"
        data-view-product="${escapeHTML(product.id)}"
        aria-label="View ${escapeHTML(product.name)}">
        <img src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.name)}"
          loading="lazy">
        <span class="product-badge">
          ${escapeHTML(product.badge || "CROWNIX")}
        </span>
      </button>

      <div class="product-card-info">
        <p class="product-category">
          ${escapeHTML(product.category)}
        </p>

        <h3>${escapeHTML(product.name)}</h3>

        <p class="product-price">
          ${formatPrice(product.price)}
        </p>

        <button class="button button-gold"
          type="button"
          data-view-product="${escapeHTML(product.id)}">
          View Details
        </button>
      </div>
    </article>
  `).join("");
}

function renderWatchProducts() {
  const grid = $("#productGrid");
  if (!grid) return;

  let list = WATCH_PRODUCTS.filter(product => product.active);

  if (activeWatchAudience !== "all") {
    list = list.filter(
      product => product.audience === activeWatchAudience
    );
  }

  grid.innerHTML = list.map(product => `
    <article class="product-card">
      <button class="product-image-button"
        type="button"
        data-view-product="${escapeHTML(product.id)}">
        <img src="${escapeHTML(product.image)}"
          alt="${escapeHTML(product.name)}"
          loading="lazy">
      </button>

      <div class="product-card-info">
        <span class="product-category">CROWNIX WATCHES</span>
        <h3>${escapeHTML(product.name)}</h3>
        <p class="product-price">${formatPrice(product.price)}</p>

        <button class="button button-gold"
          type="button"
          data-view-product="${escapeHTML(product.id)}">
          View Details
        </button>
      </div>
    </article>
  `).join("");
}

function showProductDetails(id) {
  const product = getProduct(id);

  if (!product) {
    console.error("CROWNIX: Product not found:", id);
    showToast("Product not found. Please refresh the page.");
    return;
  }

  const content =
    $("#productModalContent") ||
    $("#productDetails");

  if (!content) {
    console.error(
      "CROWNIX: Product modal content is missing in index.html."
    );
    showToast("Product details section is missing from the HTML.");
    return;
  }

  const images = product.images || [product.image];

  content.innerHTML = `
    <div class="product-modal-layout"
      style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:24px;">

      <div class="product-gallery">
        <img id="mainProductImage"
          src="${escapeHTML(images[0])}"
          alt="${escapeHTML(product.name)}"
          style="width:100%;max-height:380px;object-fit:contain;background:#fff;border-radius:10px;">

        <div class="product-thumbnails"
          style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px;">
          ${images.map((image, index) => `
            <button type="button"
              class="product-thumbnail"
              data-gallery-image="${escapeHTML(image)}"
              style="padding:3px;border:1px solid #ccc;background:white;border-radius:6px;cursor:pointer;">
              <img src="${escapeHTML(image)}"
                alt="Product photo ${index + 1}"
                style="width:60px;height:60px;object-fit:contain;">
            </button>
          `).join("")}
        </div>
      </div>

      <div class="product-modal-info">
        <p class="eyebrow">
          ${escapeHTML(product.category.toUpperCase())}
        </p>

        <h2>${escapeHTML(product.name)}</h2>

        <p>${escapeHTML(product.description)}</p>

        <h3 class="product-price">
          ${formatPrice(product.price)}
        </h3>

        ${product.hasBoxOption ? `
          <label style="display:block;margin:15px 0;">
            <input type="checkbox" id="boxOption">
            Add watch box — ${formatPrice(product.boxPrice)}
          </label>
        ` : ""}

        <label style="display:block;margin:15px 0;">
          Quantity:
          <input id="detailQuantity"
            type="number"
            min="1"
            max="20"
            value="1"
            style="width:80px;padding:8px;">
        </label>

        <button class="button button-gold"
          type="button"
          data-detail-order="${escapeHTML(product.id)}">
          Order on WhatsApp
        </button>
      </div>
    </div>
  `;

  openModal("productModal");
}

function startCheckout(id, box = false) {
  const product = getProduct(id);
  if (!product) return;

  const orderModal = $("#orderModal");

  if (!orderModal) {
    const quantity = Math.max(
      1,
      Math.min(20, Number($("#detailQuantity")?.value || 1))
    );

    sendWhatsAppOrder(product, quantity, box);
    return;
  }

  if ($("#orderProductId")) {
    $("#orderProductId").value = product.id;
  }

  if ($("#orderProductName")) {
    $("#orderProductName").value = product.name;
  }

  if ($("#orderUnitPrice")) {
    $("#orderUnitPrice").value = product.price;
  }

  if ($("#orderQuantity")) {
    $("#orderQuantity").value = "1";
  }

  const summary = $("#orderProductSummary");

  if (summary) {
    summary.textContent =
      `${product.name} — ${formatPrice(product.price)}`;
  }

  closeModal("productModal");
  updateOrderTotals();
  openModal("orderModal");
}

function updateOrderTotals() {
  const id = $("#orderProductId")?.value;
  const product = getProduct(id);

  const price = product
    ? priceFor(product, !!$("#orderBoxOption")?.checked)
    : Number($("#orderUnitPrice")?.value || 0);

  const quantity = Math.max(
    1,
    Math.min(20, Number($("#orderQuantity")?.value || 1))
  );

  const subtotal = price * quantity;

  if ($("#orderSubtotal")) {
    $("#orderSubtotal").textContent = formatPrice(subtotal);
  }

  if ($("#orderDelivery")) {
    $("#orderDelivery").textContent =
      formatPrice(subtotal ? DELIVERY_CHARGES : 0);
  }

  if ($("#orderTotal")) {
    $("#orderTotal").textContent =
      formatPrice(subtotal ? subtotal + DELIVERY_CHARGES : 0);
  }
}

function validatePhone(value) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

function buildMessage(order) {
  return [
    "👑 CROWNIX — NEW COD ORDER",
    "",
    "Order Reference: " + order.reference,
    "Customer: " + order.name,
    "Phone: " + order.phone,
    "City: " + order.city,
    "Address: " + order.address,
    "",
    "PRODUCT: " + order.productName,
    "BOX: " + (
      order.box
        ? "With Box"
        : order.hasBoxOption
          ? "Without Box"
          : "Not applicable"
    ),
    "QUANTITY: " + order.quantity,
    "PRICE EACH: " + formatPrice(order.unitPrice),
    "SUBTOTAL: " + formatPrice(order.subtotal),
    "DELIVERY: " + formatPrice(order.delivery),
    "TOTAL: " + formatPrice(order.total),
    "Payment: Cash on Delivery (COD)",
    "",
    "Please confirm availability and delivery."
  ].join("\n");
}

function sendWhatsAppOrder(
  product,
  quantity,
  box = false,
  customer = {}
) {
  const unitPrice = priceFor(product, box);
  const subtotal = unitPrice * quantity;

  const order = {
    reference: "CRX-" + Date.now().toString().slice(-8),
    name: customer.name || "Customer to confirm",
    phone: customer.phone || "To be provided",
    city: customer.city || "To be provided",
    address: customer.address || "To be provided",
    productName: product.name,
    quantity,
    box,
    hasBoxOption: !!product.hasBoxOption,
    unitPrice,
    subtotal,
    delivery: DELIVERY_CHARGES,
    total: subtotal + DELIVERY_CHARGES
  };

  const url =
    "https://wa.me/" +
    STORE_WHATSAPP +
    "?text=" +
    encodeURIComponent(buildMessage(order));

  window.open(url, "_blank", "noopener,noreferrer");

  showToast(
    "WhatsApp opened. Review the order and press Send."
  );
}

function submitOrder(event) {
  event.preventDefault();

  const product = getProduct($("#orderProductId")?.value);

  if (!product) {
    showToast("Please select a product again.");
    return;
  }

  const customer = {
    name: $("#customerName")?.value.trim() || "",
    phone: $("#customerPhone")?.value.trim() || "",
    city: $("#customerCity")?.value.trim() || "",
    address: $("#customerAddress")?.value.trim() || ""
  };

  const quantity = Number($("#orderQuantity")?.value || 1);

  if (
    !customer.name ||
    !customer.phone ||
    !customer.city ||
    !customer.address
  ) {
    showToast("Please complete all customer details.");
    return;
  }

  if (!validatePhone(customer.phone)) {
    showToast("Please enter a valid mobile number.");
    return;
  }

  if (
    !Number.isInteger(quantity) ||
    quantity < 1 ||
    quantity > 20
  ) {
    showToast("Quantity must be between 1 and 20.");
    return;
  }

  const box = !!$("#orderBoxOption")?.checked;

  sendWhatsAppOrder(product, quantity, box, customer);
  closeModal("orderModal");
  $("#orderForm")?.reset();
}

function initSharedEvents() {
  $("#menuToggle")?.addEventListener("click", () => {
    const nav = $("#mainNav");
    if (!nav) return;

    const isOpen = nav.classList.toggle("open");

    $("#menuToggle").setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    $("#menuToggle").textContent = isOpen ? "×" : "☰";
  });

  $("#viewBag")?.addEventListener("click", () => {
    showToast("Your shopping bag is not configured in this version.");
  });

  $("#contactWhatsApp")?.setAttribute(
    "href",
    "https://wa.me/" + STORE_WHATSAPP
  );

  $$(".modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", event => {
      if (event.target === backdrop) {
        closeModal(backdrop.id);
      }
    });
  });

  $$("[data-close]").forEach(button => {
    button.addEventListener("click", () => {
      closeModal(button.dataset.close);
    });
  });

  $("#closeModal")?.addEventListener("click", () => {
    closeModal("productModal");
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeAllModals();
    }
  });

  document.addEventListener("click", event => {
    const thumbnail = event.target.closest("[data-gallery-image]");

    if (thumbnail) {
      const mainImage = $("#mainProductImage");

      if (mainImage) {
        mainImage.src = thumbnail.dataset.galleryImage;
      }

      return;
    }

    const view = event.target.closest("[data-view-product]");

    if (view) {
      showProductDetails(view.dataset.viewProduct);
      return;
    }

    const order = event.target.closest("[data-order-product]");

    if (order) {
      startCheckout(order.dataset.orderProduct);
      return;
    }

    const detailOrder = event.target.closest("[data-detail-order]");

    if (detailOrder) {
      const product = getProduct(detailOrder.dataset.detailOrder);

      const quantity = Math.max(
        1,
        Math.min(20, Number($("#detailQuantity")?.value || 1))
      );

      const box = !!$("#boxOption")?.checked;

      if (product) {
        sendWhatsAppOrder(product, quantity, box);
      }

      closeModal("productModal");
      return;
    }

    if (
      event.target.closest("#backTop") ||
      event.target.closest(".back-top")
    ) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  });

  $("#orderQuantity")?.addEventListener(
    "input",
    updateOrderTotals
  );

  $("#orderBoxOption")?.addEventListener(
    "change",
    updateOrderTotals
  );

  $("#orderForm")?.addEventListener(
    "submit",
    submitOrder
  );
}

function initCrownix() {
  const page = document.body.dataset.page;

  if (page === "home") {
    activeHomeCategory = "all";

    $("#categoryFilters")?.addEventListener("click", event => {
      const button = event.target.closest("[data-category]");
      if (!button) return;

      activeHomeCategory = button.dataset.category;

      $$(".filter", $("#categoryFilters")).forEach(element => {
        element.classList.toggle("active", element === button);
      });

      renderHomeProducts();
    });

    $("#productSearch")?.addEventListener("input", event => {
      searchQuery = event.target.value.trim().toLowerCase();
      renderHomeProducts();
    });

    $("#sortProducts")?.addEventListener("change", event => {
      sortMode = event.target.value;
      renderHomeProducts();
    });

    renderHomeProducts();
  } else if (page === "watches") {
    $$(".category-btn").forEach(button => {
      button.addEventListener("click", () => {
        activeWatchAudience = button.dataset.category;
        renderWatchProducts();
      });
    });

    renderWatchProducts();
  } else if ($("#productGrid") && $("#categoryFilters")) {
    document.body.dataset.page = "home";
    renderHomeProducts();
  } else if ($("#productGrid") && $$(".category-btn").length) {
    document.body.dataset.page = "watches";
    renderWatchProducts();
  }

  initSharedEvents();
  updateCartCount();

  console.log("CROWNIX JavaScript initialized.");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCrownix);
} else {
  initCrownix();
}



























































 
/* CROWNIX — ORDER NOW + CUSTOMER DETAILS + WHATSAPP */

const CROWNIX_WHATSAPP = "923322100970";

// 1. Change product buttons to "Order Now"
document.querySelectorAll(
    '[data-order-product], [data-detail-order]'
).forEach(button => {
    button.textContent = "Order Now";
});

// 2. Handle Order Now clicks using the existing customer form
document.addEventListener("click", function (event) {
    const button = event.target.closest(
        "[data-order-product], [data-detail-order]"
    );

    if (!button) return;

    const productId =
        button.dataset.orderProduct ||
        button.dataset.detailOrder;

    const product = window.CROWNIX_PRODUCTS?.find(
        item => String(item.id) === String(productId)
    );

    // If the current JavaScript keeps products in a local variable,
    // use its existing startCheckout function instead.
    if (typeof startCheckout === "function") {
        event.preventDefault();
        event.stopImmediatePropagation();

        const withBox =
            document.querySelector("#detailBoxOption")?.checked || false;

        startCheckout(productId, withBox);
    }
}, true);

// 3. Submit customer details to WhatsApp
document.addEventListener("submit", function (event) {
    if (event.target.id !== "orderForm") return;

    event.preventDefault();

    const name = document.querySelector("#customerName")?.value.trim();
    const phone = document.querySelector("#customerPhone")?.value.trim();
    const city = document.querySelector("#customerCity")?.value.trim();
    const address = document.querySelector("#customerAddress")?.value.trim();

    const productName =
        document.querySelector("#orderProductName")?.value.trim();

    const price = Number(
        document.querySelector("#orderUnitPrice")?.value || 0
    );

    const quantity = Number(
        document.querySelector("#orderQuantity")?.value || 1
    );

    if (!name || !phone || !city || !address || !productName) {
        alert("Please complete all customer and product details.");
        return;
    }

    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 20) {
        alert("Please enter a quantity between 1 and 20.");
        return;                                             
    }

    const productTotal = price * quantity;
    const delivery = 200;
    const grandTotal = productTotal + delivery;

    const message = [
        "👑 CROWNIX — NEW ORDER",
        "CASH ON DELIVERY (COD)",
        "",
        "PRODUCT: " + productName,
        "QUANTITY: " + quantity,
        "PRICE PER ITEM: Rs. " + price.toLocaleString("en-PK"),
        "TOTAL: Rs. " + productTotal.toLocaleString("en-PK"),
        "DELIVERY: Rs. " + delivery.toLocaleString("en-PK"),
        "SUBTOTAL: Rs. " + grandTotal.toLocaleString("en-PK"),
        "",
        "CUSTOMER DETAILS",
        "NAME: " + name,
        "MOBILE: " + phone,
        "CITY: " + city,
        "ADDRESS: " + address,
        "",
        "Thank you for shopping with CROWNIX. ❤️",
        "✨ Stay connected with us for the latest watches, caps, new arrivals, and exclusive collections!",
        "",
        "👑 CROWNIX — WEAR YOUR STYLE. OWN YOUR CROWN."
    ].join("\n");

    const whatsappURL =
        "https://wa.me/" +
        CROWNIX_WHATSAPP +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
}, true);





























































 


/* =====================================================
   CROWNIX PATCH — PRODUCT LOGO + WATCH FILTERS
   Paste at the bottom of your existing JavaScript.
   Does not replace your previous code.
===================================================== */

(function () {
  "use strict";

  const CROWNIX_PATCH_LOGO =
    "https://i.ibb.co/v450Qp1Y/Screenshot-20261027-203458.png";

  /* ---------- 1. ADD LOGO TO PRODUCT DETAILS ---------- */

  function addCrownixLogoToDetails() {
    const detailContainers = [
      document.querySelector("#productModalContent"),
      document.querySelector("#productDetails")
    ].filter(Boolean);

    detailContainers.forEach(function (container) {
      if (container.querySelector(".crownix-detail-brand")) return;

      const brand = document.createElement("div");
      brand.className = "crownix-detail-brand";

      brand.innerHTML = `
        <img
          src="${CROWNIX_PATCH_LOGO}"
          alt="CROWNIX Logo"
          loading="lazy"
        >
        <span>CROWNIX</span>
      `;

      container.prepend(brand);
    });
  }

  /* ---------- 2. ADD LOGO STYLING ---------- */

  function addCrownixPatchStyles() {
    if (document.querySelector("#crownix-patch-styles")) return;

    const style = document.createElement("style");
    style.id = "crownix-patch-styles";

    style.textContent = `
      .crownix-detail-brand {
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 0 0 18px;
        padding: 10px 0;
        border-bottom: 1px solid rgba(237, 189, 97, 0.3);
      }

      .crownix-detail-brand img {
        width: 48px;
        height: 48px;
        object-fit: contain;
        display: block;
      }

      .crownix-detail-brand span {
        color: #edbd61;
        font-size: 15px;
        font-weight: 800;
        letter-spacing: 3px;
      }

      .crownix-watch-filter-active {
        border-color: #edbd61 !important;
        background: #edbd61 !important;
        color: #111 !important;
      }
    `;

    document.head.appendChild(style);
  }

  /* ---------- 3. WATCH FILTER BUTTONS ---------- */

  function setupCrownixWatchFilters() {
    const buttons = Array.from(
      document.querySelectorAll(
        "#categoryFilters button, .watch-filters button, [data-watch-filter]"
      )
    );

    if (!buttons.length) return;

    buttons.forEach(function (button) {
      if (button.dataset.crownixFilterBound === "yes") return;

      const label = (
        button.textContent + " " +
        (button.dataset.category || "") + " " +
        (button.dataset.filter || "") + " " +
        (button.dataset.watchFilter || "")
      ).toLowerCase();

      let category = null;

      if (label.includes("couple")) {
        category = "couple";
      } else if (label.includes("ladies") || label.includes("women")) {
        category = "ladies";
      } else if (label.includes("men")) {
        category = "men";
      } else if (label.includes("all")) {
        category = "all";
      }

      if (!category) return;

      button.dataset.crownixFilterBound = "yes";

      button.addEventListener("click", function (event) {
        event.preventDefault();

        const allProducts = Array.isArray(window.PRODUCTS)
          ? window.PRODUCTS
          : null;

        /*
          PRODUCTS may be declared with const and not be available
          on window. Existing render functions are used where possible.
        */

        document.querySelectorAll(
          "#categoryFilters button, .watch-filters button, [data-watch-filter]"
        ).forEach(function (otherButton) {
          otherButton.classList.remove("crownix-watch-filter-active");
        });

        button.classList.add("crownix-watch-filter-active");

        window.crownixSelectedWatchFilter = category;

        if (typeof window.renderWatchProducts === "function") {
          window.renderWatchProducts();
        }

        if (typeof window.renderHomeProducts === "function") {
          window.renderHomeProducts();
        }

        document.dispatchEvent(
          new CustomEvent("crownix:watch-filter", {
            detail: { category: category, products: allProducts }
          })
        );
      });
    });
  }

  /* ---------- 4. INITIALIZE SAFELY ---------- */

  function runCrownixPatch() {
    addCrownixPatchStyles();
    addCrownixLogoToDetails();
    setupCrownixWatchFilters();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runCrownixPatch);
  } else {
    runCrownixPatch();
  }

  /*
    The product details are created dynamically, so watch for updates.
  */
  const crownixObserver = new MutationObserver(function () {
    addCrownixLogoToDetails();
    setupCrownixWatchFilters();
  });

  function startCrownixObserver() {
    if (document.body) {
      crownixObserver.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
  }

  if (document.body) {
    startCrownixObserver();
  } else {
    document.addEventListener("DOMContentLoaded", startCrownixObserver);
  }
})();
































 















 
/* ============================================
   CROWNIX — PREMIUM PRODUCT DESCRIPTIONS
   + HOMEPAGE FEATURED IMAGES
   Paste at the bottom of existing JavaScript
============================================ */

(function () {
  "use strict";

  // 1. Premium descriptions for every existing product
  function crownixAddDescriptions() {
    const allProducts = [
      ...(typeof WATCH_PRODUCTS !== "undefined" ? WATCH_PRODUCTS : []),
      ...(typeof CAP_PRODUCTS !== "undefined" ? CAP_PRODUCTS : [])
    ];

    allProducts.forEach(function (product) {
      if (product.description && product.description.trim().length > 100) {
        return;
      }

      const category = String(product.category || "").toLowerCase();
      const audience = String(product.audience || "").toLowerCase();
      const name = String(product.name || "CROWNIX Collection");

      if (category.includes("cap")) {
        product.description =
          `${name} brings a modern streetwear look to your everyday style. ` +
          `Its versatile design pairs easily with casual outfits, making it ` +
          `a great choice for outings, travel and daily wear. Choose CROWNIX ` +
          `for a clean, confident look that completes your outfit.`;
      } else if (
        audience.includes("couple") ||
        name.toLowerCase().includes("couple")
      ) {
        product.description =
          `${name} is designed for couples who love a coordinated style. ` +
          `Its matching look makes it a thoughtful option for special moments, ` +
          `celebrations and everyday wear. Add a stylish finishing touch to ` +
          `your shared look with the CROWNIX Couple Watches collection.`;
      } else if (
        audience.includes("ladies") ||
        audience.includes("women") ||
        audience.includes("lady")
      ) {
        product.description =
          `${name} adds an elegant touch to your everyday style. ` +
          `Its versatile design complements casual outfits as well as ` +
          `dressier occasions, making it suitable for a variety of looks. ` +
          `Discover timeless style with the CROWNIX Ladies Watches collection.`;
      } else {
        product.description =
          `${name} is made for a confident, modern look. ` +
          `Its versatile style works well with everyday outfits and ` +
          `special occasions alike. Whether you are heading out or dressing ` +
          `up, this CROWNIX watch adds a refined finishing touch to your style.`;
      }
    });
  }

  // 2. Two watches + two caps for homepage feature images
  const CROWNIX_HOME_FEATURED_IMAGES = [
    {
      type: "watch",
      title: "Premium Watches",
      subtitle: "TIMELESS STYLE. EVERY MOMENT.",
      image: "https://i.ibb.co/Gv738cBP/IMG-20261026-WA0373.jpg"
    },
    {
      type: "watch",
      title: "Signature Watch Collection",
      subtitle: "MAKE EVERY SECOND COUNT.",
      image: "https://i.ibb.co/99ZXx5bc/IMG-20261026-WA0374.jpg"
    },
    {
      type: "cap",
      title: "Premium Caps",
      subtitle: "COMPLETE YOUR LOOK.",
      image: "https://i.ibb.co/Zzrr0Nx8/Screenshot-2026-10-24-204244.png"
    },
    {
      type: "cap",
      title: "Urban Cap Collection",
      subtitle: "EVERYDAY STYLE. CROWNIX QUALITY.",
      image: "https://i.ibb.co/Zzrr0Nx8/Screenshot-2026-10-24-204244.png"
    }
  ];

  // Make the featured images available to existing homepage code
  window.CROWNIX_HOME_FEATURED_IMAGES = CROWNIX_HOME_FEATURED_IMAGES;

  // Run once the existing product arrays are available
  crownixAddDescriptions();

})();



 

 













 /* =========================================
   CROWNIX — WATCH CATEGORY FILTER PATCH
   All / Men's / Ladies' / Couple Watches
========================================= */

document.addEventListener("DOMContentLoaded", function () {
    const grid = document.getElementById("productGrid");
    const buttons = document.querySelectorAll(".category-switch .category-btn");

    if (!grid || !buttons.length) return;

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const category = button.dataset.category;

            // Update active button
            buttons.forEach(function (btn) {
                btn.classList.toggle("active", btn === button);
            });

            // Filter existing product cards
            const cards = grid.querySelectorAll(".product-card");
            let visibleCount = 0;

            cards.forEach(function (card) {
                const audience = (
                    card.dataset.audience ||
                    card.getAttribute("data-category") ||
                    ""
                ).toLowerCase();

                const show =
                    category === "all" ||
                    audience === category;

                card.style.display = show ? "" : "none";

                if (show) visibleCount++;
            });

            // Update collection heading if available
            const title = document.getElementById("sectionTitle");

            if (title) {
                const titles = {
                    all: "Our Watch Collection",
                    men: "Men's Watches",
                    ladies: "Ladies' Watches",
                    couple: "Couple Watches"
                };

                title.textContent = titles[category] || "Our Watch Collection";
            }

            // Show message if no matching cards exist
            let emptyMessage = document.getElementById("watchFilterEmpty");

            if (!emptyMessage) {
                emptyMessage = document.createElement("p");
                emptyMessage.id = "watchFilterEmpty";
                emptyMessage.style.cssText =
                    "grid-column:1/-1;text-align:center;padding:30px;color:#edbd61;";
                grid.appendChild(emptyMessage);
            }

            emptyMessage.textContent =
                visibleCount === 0
                    ? "No watches available in this category yet."
                    : "";

            emptyMessage.style.display =
                visibleCount === 0 ? "block" : "none";
        });
    });
});























/* =========================================
   CROWNIX — FIX WATCH CATEGORY FILTERS
========================================= */

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(
        ".category-switch .category-btn"
    );

    const grid = document.getElementById("productGrid");

    if (!buttons.length || !grid) return;

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const selected = (button.dataset.category || "all").toLowerCase();

            // Use the existing product arrays
            const products = Array.isArray(window.WATCH_PRODUCTS)
                ? window.WATCH_PRODUCTS
                : [];

            const matchingProducts = products.filter(function (product) {
                if (product.active === false) return false;

                if (selected === "all") return true;

                const audience = String(product.audience || "").toLowerCase();
                const category = String(product.category || "").toLowerCase();
                const name = String(product.name || "").toLowerCase();

                const values = [audience, category, name];

                return values.some(function (value) {
                    if (selected === "men") {
                        return value === "men" ||
                               value === "mens" ||
                               value === "men's" ||
                               value.includes("men's watch");
                    }

                    if (selected === "ladies") {
                        return value === "ladies" ||
                               value === "lady" ||
                               value === "women" ||
                               value === "womens" ||
                               value === "women's";
                    }

                    if (selected === "couple") {
                        return value === "couple" ||
                               value.includes("couple");
                    }

                    return false;
                });
            });

            console.log(
                "Selected category:",
                selected,
                "| Matching products:",
                matchingProducts.length
            );

            // Update the selected button
            buttons.forEach(function (btn) {
                btn.classList.toggle("active", btn === button);
            });

            // Refresh products using your existing renderer
            if (typeof window.renderWatchProducts === "function") {
                window.crownixSelectedWatchFilter = selected;
                window.renderWatchProducts();
            }

            const title = document.getElementById("sectionTitle");

            if (title) {
                title.textContent = {
                    all: "Our Watch Collection",
                    men: "Men's Watches",
                    ladies: "Ladies' Watches",
                    couple: "Couple Watches"
                }[selected] || "Our Watch Collection";
            }
        });
    });
});







































/* =========================================
   CROWNIX — UPDATE WEBSITE LOGO EVERYWHERE
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const CROWNIX_LOGO =
        "https://i.ibb.co/jvmz0HvB/Screenshot-20261031-211634.png";

    // Common logo image selectors
    const logoSelectors = [
        ".logo img",
        ".site-logo img",
        ".brand-logo img",
        ".navbar-brand img",
        ".header-logo img",
        ".footer-logo img",
        ".admin-logo img",
        "#logo",
        "img[alt*='logo' i]"
    ];

    // Update all matching logo images
    document.querySelectorAll(logoSelectors.join(",")).forEach(function (logo) {
        logo.src = CROWNIX_LOGO;
        logo.removeAttribute("srcset");
        logo.alt = "CROWNIX Official Logo";
    });

    // Update favicon
    document.querySelectorAll(
        "link[rel='icon'], link[rel='shortcut icon']"
    ).forEach(function (icon) {
        icon.href = CROWNIX_LOGO;
    });

    console.log("CROWNIX logo updated successfully!");

});

















/* =====================================
CROWNIX — REAL-TIME ANALOG CLOCK
===================================== */

(function () {


const hourHand = document.querySelector(".hand-hour");
const minuteHand = document.querySelector(".hand-minute");
const secondHand = document.querySelector(".hand-second");

if (!hourHand || !minuteHand || !secondHand) {
    return;
}

function updateCrownixClock() {

    const now = new Date();

    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    const secondAngle = seconds * 6 + milliseconds * 0.006;
    const minuteAngle = minutes * 6 + seconds * 0.1;
    const hourAngle = hours * 30 + minutes * 0.5;

    hourHand.style.transform =
        `translateX(-50%) rotate(${hourAngle}deg)`;

    minuteHand.style.transform =
        `translateX(-50%) rotate(${minuteAngle}deg)`;

    secondHand.style.transform =
        `translateX(-50%) rotate(${secondAngle}deg)`;

    requestAnimationFrame(updateCrownixClock);
}

updateCrownixClock();


})();
















const footerYear = document.getElementById("year");

if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}