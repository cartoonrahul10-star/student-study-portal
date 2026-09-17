// Welcome message
console.log("Welcome to Student Study Portal!");

// Subject button action
const buttons = document.querySelectorAll(".card button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        alert("Study notes will be available soon! 📚");
    });
});function searchSubjects() {
    const search = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {
        const text = card.innerText.toLowerCase();

        if (text.includes(search)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}