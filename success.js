window.onload = function () {

    // Get Data

    const userData =
        JSON.parse(localStorage.getItem("checkoutUser"));

    // Check Data

    if(userData){

        // Customer Name

        document.getElementById("customerName")
            .innerText = userData.fullName;

        // Phone Number

        document.getElementById("customerPhone")
            .innerText = userData.phoneNumber;

        // Address

        document.getElementById("userAddress")
            .innerHTML = `
                ${userData.address},
                ${userData.city},
                ${userData.pincode}
            `;

    }

};

// Home Button

document.getElementById("homeBtn")
    .addEventListener("click", function(){

        window.location.href = "index.html";

});