const translations = {
    ua: {
        // Загальне
        "play_btn": "Грати",
        "buy_btn": "Купити",
        "back_to_menu": "← Назад до меню",
        "balance_text": "Баланс",

        // Секція Ігор (Games)
        "games_title": "🎮 Ігри PyStep",
        "game_snake": "Змійка",
        "desc_snake": "Класична ретро-гра",
        "game_shooter": "Космічний шутер",
        "desc_shooter": "Захисти галактику",
        "game_memory": "Тренування пам'яті",
        "desc_memory": "Знайди всі пари",
        "game_2048": "2048",
        "desc_2048": "Логічна головоломка",

        // Секція Магазину (Shop)
        "shop_title": "🛒 Магазин PyStep",
        "item_bracelets": "Браслети",
        "item_mousepad": "Коврик для мишки",
        "item_keychain": "Брелок",
        "item_thermos": "Термос",
        "success_buy": "✅ Покупка успішна!",
        "error_money": "❌ Недостатньо коштів!",

        // Секція Налаштувань (Settings)
        "settings_title": "Налаштування PyStep",
        "settings_desc": "Керування профілем та мовою",
        "lang_ua": "Українська",
        "lang_en": "English"
    },
    en: {
        // General
        "play_btn": "Play",
        "buy_btn": "Buy",
        "back_to_menu": "← Back to menu",
        "balance_text": "Balance",

        // Games Section
        "games_title": "🎮 PyStep Games",
        "game_snake": "Snake",
        "desc_snake": "Classic retro game",
        "game_shooter": "Space Shooter",
        "desc_shooter": "Defend the galaxy",
        "game_memory": "Memory Training",
        "desc_memory": "Find all pairs",
        "game_2048": "2048",
        "desc_2048": "Logic puzzle",

        // Shop Section
        "shop_title": "🛒 PyStep Store",
        "item_bracelets": "Bracelets",
        "item_mousepad": "Mousepad",
        "item_keychain": "Keychain",
        "item_thermos": "Thermos",
        "success_buy": "✅ Purchase successful!",
        "error_money": "❌ Not enough funds!",

        // Settings Section
        "settings_title": "PyStep Settings",
        "settings_desc": "Profile and language management",
        "lang_ua": "Ukrainian",
        "lang_en": "English"
    }
};

// Функція застосування перекладу
function applyTranslations() {
    const lang = localStorage.getItem("pystep_lang") || "ua";
    
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        if (translations[lang][key]) {
            // Якщо це кнопка або заголовок
            element.textContent = translations[lang][key];
        }
    });
}

// Функція зміни мови (викликати з кнопок)
function changeLanguage(lang) {
    localStorage.setItem("pystep_lang", lang);
    applyTranslations();
    // Якщо хочеш миттєво оновити активний стан кнопок - reload() найпростіший шлях
    location.reload(); 
}

// Запуск при завантаженні
window.addEventListener("DOMContentLoaded", applyTranslations);