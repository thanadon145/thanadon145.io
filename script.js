document.addEventListener("DOMContentLoaded", function() {
    const flower = document.querySelector(".flower");

    
    flower.addEventListener("click", function() {
        const colors = ["red", "pink", "purple", "orange"];
        const petals = document.querySelectorAll(".petal");
        const newColor = colors[Math.floor(Math.random() * colors.length)];

        petals.forEach(petal => {
            petal.style.background = newColor;
        });
    });
});
