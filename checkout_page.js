window.onload = function () {

    const placeOrderBtn =
        document.getElementById("placeOrderBtn");

    placeOrderBtn.addEventListener("click", function () {

        // Get Input Values

        const fullName =
            document.getElementById("fullName").value;

        const phoneNumber =
            document.getElementById("phoneNumber").value;

        const address =
            document.getElementById("address").value;

        const landmark =
            document.getElementById("landmark").value;

        const city =
            document.getElementById("city").value;

        const pincode =
            document.getElementById("pincode").value;

        // Create Object

        const userData = {

            fullName: fullName,
            phoneNumber: phoneNumber,
            address: address,
            landmark: landmark,
            city: city,
            pincode: pincode

        };

        // Save to LocalStorage

        localStorage.setItem(
            "checkoutUser",
            JSON.stringify(userData)
        );

        // Show Loading Screen

        document.getElementById("loadingScreen")
            .style.display = "flex";

        // Redirect after 1 second

        setTimeout(function () {

            window.location.href = "success.html";

        }, 1000);

    });

};

// Phone Number Validation

document.getElementById("phoneNumber")
    .addEventListener("input", function (e) {

        this.value =
            this.value.replace(/[^0-9]/g, '');

});

// Pincode Validation

document.getElementById("pincode")
    .addEventListener("input", function (e) {

        this.value =
            this.value.replace(/[^0-9]/g, '');

});