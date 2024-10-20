
// Telefon raqamiga qo'ng'iroq qilish
const makeCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
};

// Telegram guruhiga o'tish
const openTelegram = (username) => {
    window.open(`https://t.me/${username}`, '_blank');
};

// Email yuborish
const sendEmail = (email) => {
    window.location.href = `mailto:${email}`;
};

// Linklarni tanlash va hodisalar qo'shish
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.phone').forEach(element => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            const phoneNumber = element.getAttribute('href').replace('tel:', '');
            makeCall(phoneNumber);
        });
    });

    document.querySelectorAll('.telegram').forEach(element => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            const username = element.getAttribute('href').split('t.me/')[1];
            openTelegram(username);
        });
    });

    document.querySelectorAll('.email').forEach(element => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            const email = element.getAttribute('href').replace('mailto:', '');
            sendEmail(email);
        });
    });
});




























const uzbekchaText = {
    // ...
  };
  
  const ruschaText = {
    // ...
  };
  
  const languageButtons = document.querySelectorAll(".language-button");
  const description = document.getElementById("description"); // O'zgaruvchini "description" dan "description" ga o'zgartirish
  
  let currentLanguage = "uz"; // Boshlang'ich til
  
  function changeLanguage(language) {
    currentLanguage = language;
  
    languageButtons.forEach(button => {
      button.classList.remove("active");
      if (button.dataset.lang === language) {
        button.classList.add("active");
      }
    });
  
    if (language === "uz") {
      // ...
    } else if (language === "ru") {
      // ...
    }
  }
  
  languageButtons.forEach(button => {
    button.addEventListener("click", () => {
      changeLanguage(button.dataset.lang);
    });
  });
  
  // Boshlang'ich tilni o'rnatish
  changeLanguage(currentLanguage);
  
  
  
  // JavaScript kodlari
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Yumshoq scroll va bo'limga o'tish
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    function initializeSlider(containerSelector) {
        let currentIndex = 0;
        const sliderContainer = document.querySelector(containerSelector);
        const images = sliderContainer.querySelectorAll('.slider-image');
        const prevBtn = sliderContainer.querySelector('.prev-btn');
        const nextBtn = sliderContainer.querySelector('.next-btn');

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }

        // Boshlanishda birinchi rasmni ko'rsatish
        showImage(currentIndex);

        prevBtn.addEventListener('click', prevImage);
        nextBtn.addEventListener('click', nextImage);
    }

    // Har bir slider uchun initializeSlider funksiyasini chaqiring
    initializeSlider('.gallery-section:nth-of-type(1) .slider-container');
    initializeSlider('.gallery-section:nth-of-type(2) .slider-container');
    initializeSlider('.gallery-section:nth-of-type(3) .slider-container');
    initializeSlider('.gallery-section:nth-of-type(4) .slider-container');
    initializeSlider('.gallery-section:nth-of-type(5) .slider-container');
    initializeSlider('.gallery-section:nth-of-type(6) .slider-container');
    initializeSlider('.gallery-section:nth-of-type(7) .slider-container');
    initializeSlider('.gallery-section:nth-of-type(8) .slider-container');
});