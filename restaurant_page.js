//Rating filter

const ratingSelect = document.querySelector(".rating-select");
const carding = document.querySelectorAll(".card");

function filterCards(){
    const selectedRating = ratingSelect.value;
    carding.forEach(function(card){
        const cardRating = parseFloat(card.getAttribute("data-rating"));

        if(selectedRating === "4+"){
            if(cardRating >= 4){
                card.style.display = "block";
            }
            else{
                card.style.display = "none";
            }
        }

        else if (selectedRating === "3+"){
            if(cardRating >= 3 && cardRating <4){
                card.style.display = "block";
            }
            else{
                card.style.display = "none";
            }
        }

        else{
            card.style.display = "block";
        }
    });
}
    ratingSelect.addEventListener("change",filterCards);



//All Card Selected

const cards = document.querySelectorAll(".card");

//First card

cards[0].addEventListener("click",function(){
    window.location.href = "adayar.html";
})

//Second card

cards[1].addEventListener("click",function(){
    window.location.href = "anjappar.html";
})

//Third card

cards[2].addEventListener("click",function(){
    window.location.href = "burgerking.html";
})

//Fourth card

cards[3].addEventListener("click",function(){
    window.location.href = "dominos.html";
})