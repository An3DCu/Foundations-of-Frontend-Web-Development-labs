document.addEventListener("DOMContentLoaded", function () {

    fetch("JSON/disclaimer.json")
    .then(response => response.json())
    .then(data => {
        const titleElement = document.getElementById("disclaimer-title");
        const introElement = document.getElementById("disclaimer-intro");
        const listElement = document.getElementById("disclaimer-list");
        titleElement.textContent = data.title;
        introElement.textContent = data.content[0];
        for (let i = 1; i < data.content.length; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = data.content[i];
            listElement.appendChild(listItem);
        }
    })
    .catch(error => console.error("Error loading disclaimer:", error));
});
