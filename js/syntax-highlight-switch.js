function switch_syntax_highlight(new_theme) {
    let syntax_light = document.getElementById('syntax_highlight_light');
    let syntax_dark = document.getElementById('syntax_highlight_dark');
    if (new_theme === "light") {
        syntax_light.disabled = false;
        syntax_dark.disabled = true;
    } else if (new_theme === "dark") {
        syntax_light.disabled = true;
        syntax_dark.disabled = false;
    }
}

// Set the initial theme
window.addEventListener('DOMContentLoaded', () => {
    switch_syntax_highlight(localStorage.getItem("theme-storage"));
})

// Observe changes in the `html` tag, switch highlight-style if the theme changes
const html_node = document.querySelector('html');
const observer = new MutationObserver(() => {
    switch_syntax_highlight(localStorage.getItem("theme-storage"));
});
observer.observe(html_node, {
    attributes : true,
    attributeFilter : ['class']
});

// Listen changes in other tabs (disabled, because `apollo` theme doesn't switch styles between tabs)
// window.addEventListener('storage', (event) => {
//     if (event.key === "theme-storage") {
//         switch_syntax_highlight(event.newValue);
//     }
// });

