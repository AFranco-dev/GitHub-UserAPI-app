darkThemeSetter();

const themeToogler = document.querySelector("#themeToogler");

themeToogler.addEventListener("click", (e) => {themeChanger();});
window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", (e) => {darkThemeSetter();});

function darkThemeSetter() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

function themeChanger() {
    console.log("clickheard");
    if (document.documentElement.getAttribute("data-theme")=="dark") {
        console.log("setting light");
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        console.log("setting dark");
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}