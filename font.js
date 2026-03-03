// Застосовуємо збережене значення шрифту при завантаженні
const savedWeight = localStorage.getItem("globalFontWeight");
if (savedWeight) {
    document.documentElement.style.setProperty("--global-weight", savedWeight);
}
