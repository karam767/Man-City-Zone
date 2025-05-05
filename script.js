// script.js
document.addEventListener("DOMContentLoaded", () => {
    const filters = document.querySelectorAll(".news-filter");
    const newsCards = document.querySelectorAll(".news-card, .news-item");

    filters.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            // Toggle active class
            filters.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Filter news items
            newsCards.forEach(card => {
                const category = card.getAttribute("data-category");
                if (filter === "all" || category === filter) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});
