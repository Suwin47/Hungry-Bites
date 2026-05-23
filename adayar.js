

const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const cartclose = document.querySelector("#cart-close");
cartIcon.addEventListener("click", () => cart.classList.add("active"));
cartclose.addEventListener("click", () => cart.classList.remove("active"));

const addCartButtons = document.querySelectorAll(".add-cart");
addCartButtons.forEach(button => {
    button.addEventListener("click", event => {
        const productBox = event.target.closest(".product-box");
        addToCart(productBox);

    });
});

const cartContent = document.querySelector(".cart-content");
const addToCart = productBox => {
    const productImgSrc = productBox.querySelector("img").src;
    const productTitle = productBox.querySelector(".product-title").textContent;
    const productPrice = productBox.querySelector(".price").textContent;

    const cartItems = cartContent.querySelectorAll(".cart-product-title");
    for (let item of cartItems) {
        if (item.textContent === productTitle) {
            alert("This item is already in the cart.");
            return;
        }
    }

    const cartBox = document.createElement("div");
    cartBox.classList.add("cart-box");
    cartBox.innerHTML = `
    
    <img src="${productImgSrc}" alt="" class="cart-img">
     <div class="cart-detail">
        <h2 class="cart-product-title">${productTitle}</h2>
        <span class="cart-price">${productPrice}</span>
        <div class="cart-quantity">
            <button class="decrement">-</button>
            <span class="number">1</span>
            <button class="increment">+</button>
        </div>
    </div>
    <i class="fa-regular fa-trash-can cart-remove" style="color: rgb(0, 4, 11);"></i>
    `;

    cartContent.appendChild(cartBox);
    cartBox.querySelector(".cart-remove").addEventListener("click", () => {
        cartBox.remove();

        updateCartCount(-1);

        updateTotalPrice();
    });

    cartBox.querySelector(".cart-quantity").addEventListener("click", event => {
        const numberElement = cartBox.querySelector(".number");
        const decrementButton = cartBox.querySelector(".decrement")
        let quantity = parseInt(numberElement.textContent);

        if (event.target.classList.contains("decrement")) {

            if (quantity > 1) {
                quantity--;
            }

        } else if (event.target.classList.contains("increment")) {

        quantity++;
    }


    numberElement.textContent = quantity;

    updateTotalPrice();

});

updateCartCount(1);

updateTotalPrice();

};

const updateTotalPrice = () => {
    const totalPriceElement = document.querySelector(".total-price");
    const cartBoxes = cartContent.querySelectorAll(".cart-box");
    let total = 0;
    cartBoxes.forEach(cartBox => {
        const priceElement = cartBox.querySelector(".cart-price");
        const quantityElement = cartBox.querySelector(".number");
        const price = priceElement.textContent.replace("$", "");
        const quantity = quantityElement.textContent;
        total += price * quantity;

    });
    totalPriceElement.textContent = `$${total}`;
};

let cartItemCount = 0;
const updateCartCount = change => {
    const cartItemCountBadge = document.querySelector(".cart-item-count");
    cartItemCount += change;
    if (cartItemCount > 0) {
        cartItemCountBadge.style.visibility = "visible";
        cartItemCountBadge.textContent = cartItemCount;

    } else {
        cartItemCountBadge.style.visibility = "hidden";
        cartItemCountBadge.textContent = "";
    }
};

const buyNowButton = document.querySelector(".btn-buy");
buyNowButton.addEventListener("click", () => {
    const cartBoxes = cartContent.querySelectorAll(".cart-box");
    if (cartBoxes.length === 0) {
        alert("Your cart is empty. Please add items to your cart before Order.");
        return;
    }

    cartBoxes.forEach(cartBox => cartBox.remove());

    cartItemCount = 0;
    updateCartCount(0);

    updateTotalPrice();

    alert("Thank you for your Order!");
});





// Search items
let search = document.getElementById("search")
let sections = document.querySelectorAll(".section")

search.addEventListener("keyup", function () {

    let value = search.value.toLowerCase().trim()

    sections.forEach(section => {

        let items = section.querySelectorAll(".menu")
        let match = 0

        items.forEach(item => {
            let name = item.querySelector(".font-bold").textContent.toLowerCase()

            if (name.includes(value)) {
                item.style.display = "block"
                match++
            } else {
                item.style.display = "none"
            }
        });

        // section hide/show
        if (value === "") {
            section.style.display = "block"
            items.forEach(i => i.style.display = "block")
        } else {
            section.style.display = match > 0 ? "block" : "none"
        }

    })

})





