// "Aloqa" bo'limiga bosilganda footerga o'tish va effekt qo'shish
// document.querySelector('#contact').addEventListener('click', (event) => {
//     event.preventDefault(); // Havolaning standart xatti-harakatlarini to'xtatish
//     const footer = document.querySelector('footer');
//     footer.scrollIntoView({ behavior: 'smooth' }); // Footerga yumshoq o'tish

//     // Effektni qo'shish
//     footer.classList.add('effect'); // Effekt klassini qo'shish
//     setTimeout(() => {
//         footer.classList.remove('effect'); // 1 soniyadan keyin effektni olib tashlash
//     }, 1000); 
// })


// Xarita elementini olish
const mapContainer = document.querySelector('#mapContainer');

// Xarita bossangiz katta xaritaga o'tadi
mapContainer.addEventListener('click', () => {
  window.open('https://www.google.com/maps/place/%D0%91%D1%83%D0%BB%D0%B0%D0%BA%D0%B1%D0%B0%D1%88%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9+%D1%80%D0%B0%D0%B9%D0%BE%D0%BD,+%D0%90%D0%BD%D0%B4%D0%B8%D0%B6%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@40.6386524,72.3680341,19z/data=!3m1!4b1!4m6!3m5!1s0x38bcf37adc9a55c9:0xd28057a81d41676c!8m2!3d40.6386524!4d72.3686778!16s%2Fg%2F11lglnff74?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D', '_blank');
});

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









function changeLanguage() {
  const lang = document.getElementById('language').value;
  const elements = document.querySelectorAll('[data-uz], [data-ru], [data-en]');
  
  elements.forEach(element => {
      element.innerText = element.getAttribute(`data-${lang}`);
  });
}
















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
  
  
  
