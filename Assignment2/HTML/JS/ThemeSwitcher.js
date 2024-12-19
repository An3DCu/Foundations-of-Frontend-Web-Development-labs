document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.getElementById("themeSwitcher");
    const body = document.body;

    let isDarkTheme = false;

    themeButton.addEventListener("click", () => {
        if (isDarkTheme) {
            body.classList.remove("dark-theme");
            body.classList.add("light-theme");
        } else {
            body.classList.remove("light-theme");
            body.classList.add("dark-theme");
        }

        isDarkTheme = !isDarkTheme;
    });
});