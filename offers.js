//Search functionality
const searchInput = document.querySelector(".search-bar input");
const restaurantItems = document.querySelectorAll(".restaurant-item");

searchInput.addEventListener("input", () => {

    let searchValue = searchInput.value.toLowerCase();

    restaurantItems.forEach(item => {

        let restaurantName = item.querySelector("h3").textContent.toLowerCase();

        let catogory = item.querySelector(".rest-content p").textContent.toLowerCase();

        if (restaurantName.includes(searchValue) || catogory.includes(searchValue)) {

            item.style.display = "block";

        } else {

            item.style.display = "none";
        }
    });
});

//Filter functionality
const filterButtons = document.querySelectorAll(".filters button");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        button.classList.add("active");
        const filterValue = button.textContent.toLowerCase();

        restaurantItems.forEach(item => {
            const category = item.querySelector(".rest-content p").textContent.toLowerCase();

            if (filterValue === "all") {
                item.style.display = "block";
            }
            else if (category.includes(filterValue)) {
                item.style.display = "block";
            }
            else {
                item.style.display = "none";
            }
        });
    });
});

// Mobile Menu 
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && closeBtn && mobileMenu) {

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});
}