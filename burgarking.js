
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
        let quantity = numberElement.textContent;

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



// Search Items

let burger = document.getElementById("burger")
let burgermenu = document.getElementById("burger-menu")

let sandwich = document.getElementById("sandwich")
let sandwichmenu = document.getElementById("sandwich-menu")

let wrap = document.getElementById("wrap")
let wrapmenu = document.getElementById("wrap-menu")

let beverages = document.getElementById("beverages")
let beveragesmenu = document.getElementById("beverages-menu")

let mainimage = document.getElementById("mainimage")
burger.addEventListener("click", function () {
    mainimage.classList.add("hidden")
    burgermenu.classList.remove("hidden")
    sandwichmenu.classList.add("hidden")
    wrapmenu.classList.add("hidden")
    beveragesmenu.classList.add("hidden")
})


sandwich.addEventListener("click", function () {
    mainimage.classList.add("hidden")
    sandwichmenu.classList.remove("hidden")
    burgermenu.classList.add("hidden")
    wrapmenu.classList.add("hidden")
    beveragesmenu.classList.add("hidden")
})



wrap.addEventListener("click", function () {
    mainimage.classList.add("hidden")
    wrapmenu.classList.remove("hidden")
    burgermenu.classList.add("hidden")
    beveragesmenu.classList.add("hidden")
    sandwichmenu.classList.add("hidden")
})




beverages.addEventListener("click", function () {
    mainimage.classList.add("hidden")
    beveragesmenu.classList.remove("hidden")
    burgermenu.classList.add("hidden")
    wrapmenu.classList.add("hidden")
    sandwichmenu.classList.add("hidden")
})



let searchinput = document.getElementById("search")
let menuitems = document.querySelectorAll(".menu")
let containers = [burgermenu, sandwichmenu, wrapmenu, beveragesmenu]

searchinput.addEventListener("keyup", function (event) {
    const searchterm = event.target.value.toLowerCase().trim()

    if (searchterm === "") {
        containers.forEach(container => container.classList.add("hidden"))
        //menuitems.forEach(item => item.classList.remove("hidden"))
        return
    }

    containers.forEach(container => container.classList.remove("hidden"))

    menuitems.forEach(item => {
        const itemname = item.querySelector(".font-bold").textContent.toLowerCase()
        const isVeg = item.classList.contains("veg")
        const isNonVeg = item.classList.contains("nonveg")


        if (
            itemname.includes(searchterm) ||
            (searchterm === "veg" && isVeg) ||
            (searchterm === "nonveg" && isNonVeg)


        ) {
            mainimage.classList.add("hidden");
            item.classList.remove("hidden")
        } else {
            item.classList.add("hidden")
        }

    })
})
