document.addEventListener("DOMContentLoaded", function () {
    fetch("../Assets/JSON/disclaimer.json")
        .then(response => response.json())
        .then(data => {
            const titleElement = document.getElementById("disclaimer-title");
            const introElement = document.getElementById("disclaimer-intro");
            const listElement = document.getElementById("disclaimer-list");
            const actionResult = document.getElementById("action-result");

            titleElement.textContent = data.title;
            introElement.textContent = data.content[0];

            for (let i = 1; i < data.content.length; i++) {
                const listItemContainer = document.createElement("div");
                listItemContainer.classList.add("disclaimer-item");

                const listItemText = document.createElement("span");
                listItemText.textContent = data.content[i];

                const actionsContainer = document.createElement("div");
                actionsContainer.classList.add("disclaimer-actions");

                const editButton = document.createElement("button");
                editButton.textContent = "Edit";
                editButton.classList.add("disclaimer-btn");
                editButton.onclick = function () {
                    const newText = prompt("Edit this disclaimer:", listItemText.textContent);
                    if (newText) {
                        listItemText.textContent = newText;
                        displayMessage("Disclaimer edited successfully!");
                    }
                };

                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.classList.add("disclaimer-btn");
                deleteButton.onclick = function () {
                    listItemContainer.remove();
                    displayMessage("Disclaimer deleted successfully!");
                };

                actionsContainer.appendChild(editButton);
                actionsContainer.appendChild(deleteButton);

                listItemContainer.appendChild(listItemText);
                listItemContainer.appendChild(actionsContainer);

                listElement.appendChild(listItemContainer);
            }

            function displayMessage(message) {
                actionResult.textContent = message;
                actionResult.style.display = "block";
                setTimeout(() => (actionResult.style.display = "none"), 2000);
            }
        })
        .catch(error => console.error("Error loading disclaimer:", error));
});
