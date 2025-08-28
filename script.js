// JavaScript funksiyalari uchun joy. Hozircha bo'sh.

// Kontakt formasini yuborishda xabar chiqarish
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('form-message').textContent = 'Xabaringiz yuborildi!';
        contactForm.reset();
    });
}
