//Restaurant Slider
const sliders = document.querySelectorAll(".image-slider");
sliders.forEach((slider) => {
    const slides = slider.querySelectorAll(".slide");
    let currentSlide = 0;

    setInterval(() => {
        slides[currentSlide].classList.remove("active");
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        slides[currentSlide].classList.add("active");
    },3000);
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

// Search Functionality
const searchInput = document.getElementById("search-input");
const restaurantItems = document.querySelectorAll(".restaurant-item");

searchInput.addEventListener("input", () => {

    const searchValue = searchInput.value.toLowerCase();
    
    restaurantItems.forEach((item) => {
        const restaurantName = item.querySelector("p").textContent.toLowerCase();

        if (restaurantName.includes(searchValue)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});

// Show More Cities
const showMoreBtn = document.getElementById("show-btn");
showMoreBtn.addEventListener("click", () => {
    const extraCities = document.querySelectorAll(".extra-city");
    extraCities.forEach((city) => {
        city.style.display = "block";
    });
    showMoreBtn.style.display = "none";
});