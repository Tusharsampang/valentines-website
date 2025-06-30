document.addEventListener("DOMContentLoaded", function () {
    // Function to navigate to different screens
    function showPage(pageId) {
        document.querySelectorAll(".game-container").forEach(screen => {
            screen.classList.add("hidden");
        });
        document.getElementById(pageId).classList.remove("hidden");
    }

    // Event listeners for clicking on surprise options
    document.getElementById("photoButton").addEventListener("click", function () {
        showPage("screenPhoto");
    });

    document.getElementById("mailboxButton").addEventListener("click", function () {
        showPage("screenMailbox");
    });

    document.getElementById("dateButton").addEventListener("click", function () {
        showPage("screenDate");
    });

    // Event listeners for the back button
    document.querySelectorAll(".backButton").forEach(button => {
        button.addEventListener("click", function () {
            showPage("screen3"); // Go back to Choose Your Surprise page
        });
    });
});


