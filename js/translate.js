document.addEventListener('DOMContentLoaded', function() {
    // Sahifa URL manzilini olish
    function updateActiveLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        // Har bir havola uchun tekshirish va faol bo'limni belgilash
        const navLinks = document.querySelectorAll('.main-nav a');
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Tilni o'zgartirish funksiyasi
    function changeLanguage(lang) {
        const elements = document.querySelectorAll('[data-uz], [data-ru], [data-en]');
        
        elements.forEach(element => {
            element.innerText = element.getAttribute(`data-${lang}`);
        });

        // Til tugmalarining faolligini yangilash
        document.querySelectorAll('.language-button').forEach(button => {
            button.classList.remove('active');
        });
        document.querySelector(`.language-button[data-lang="${lang}"]`).classList.add('active');

        // Aktiv linkni yangilash
        updateActiveLink();
    }

    // Dastlabki aktiv linkni yangilash
    updateActiveLink();

    // Har doim UZ tilini o'rnatish
    changeLanguage('uz');

    // Til tugmalarini bosilganda changeLanguage funksiyasini chaqirish
    document.querySelectorAll('.language-button').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
            // Tanlangan tilni localStorage ga saqlash
            localStorage.setItem('selectedLanguage', lang);
        });
    });
    
    // Agar sahifa o'zgartirilsa, saqlangan tilni o'qish
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        changeLanguage(savedLanguage);
    }
});
