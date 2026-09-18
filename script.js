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
}function showNotes(subject) {
    if (subject === "Mathematics") {
        alert("📐 Mathematics Notes\n\nImportant formulas and concepts will be added here.");
    }
    else if (subject === "Physics") {
        alert("⚡ Physics Notes\n\nImportant concepts and practical notes will be added here.");
    }
    else if (subject === "Programming") {
        alert("💻 Programming Notes\n\nC Programming notes and examples will be added here.");
    }
    else if (subject === "Engineering") {
        alert("🔧 Engineering Notes\n\nEngineering study material will be added here.");
    }
}
