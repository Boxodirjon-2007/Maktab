// Slayderlar uchun kod
document.querySelectorAll('.slider-container').forEach(slider => {
    let currentIndex = 0; // Hozirgi rasm indeksi
    const images = slider.querySelectorAll('.slider-image'); // Rasm elementlari

    // Keyingi rasm tugmasi
    slider.querySelector('.next-btn').addEventListener('click', () => {
        // Hozirgi rasmni yashirish
        images[currentIndex].classList.remove('active');
        // Indexni oshirish, agar oxirgi rasmga yetgan bo'lsa, 0 ga qaytish
        currentIndex = (currentIndex + 1) % images.length;
        // Yangi rasmni ko'rsatish
        images[currentIndex].classList.add('active');
    });

    // Oldingi rasm tugmasi
    slider.querySelector('.prev-btn').addEventListener('click', () => {
        // Hozirgi rasmni yashirish
        images[currentIndex].classList.remove('active');
        // Indexni kamaytirish, agar birinchi rasmga yetgan bo'lsa, oxirgi rasmga o'tish
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        // Yangi rasmni ko'rsatish
        images[currentIndex].classList.add('active');
    });
});
