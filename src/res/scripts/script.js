document.addEventListener("DOMContentLoaded", (event) => {
    let findLobButton = document.getElementById("lobButton");
    let findLobManager = document.getElementById("lobManager");

    if (findLobButton != null && findLobManager != null) {
        findLobButton.addEventListener("click", () => {
            findLobManager.style.opacity = findLobManager.style.opacity  == "1" ? "0" : "1";
        });
    }
});