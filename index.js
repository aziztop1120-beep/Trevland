// Trevland site behavior

// --- Special Offers horizontal scroller ---
const track = document.getElementById('offers-track');
const prevBtn = document.getElementById('offers-prev');
const nextBtn = document.getElementById('offers-next');

if (track && prevBtn && nextBtn) {
  const scrollByCard = (direction) => {
    const card = track.querySelector('article');
    const step = card ? card.getBoundingClientRect().width + 24 : 280;
    track.scrollBy({ left: direction * step, behavior: 'smooth' });
  };
  prevBtn.addEventListener('click', () => scrollByCard(-1));
  nextBtn.addEventListener('click', () => scrollByCard(1));
}

// --- Newsletter form ---
const newsletterForm = document.getElementById('newsletter-form');
const newsletterEmail = document.getElementById('newsletter-email');
const newsletterMessage = document.getElementById('newsletter-message');

if (newsletterForm && newsletterEmail && newsletterMessage) {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = newsletterEmail.value.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    if (!isValid) {
      newsletterMessage.textContent = 'Enter a valid email address.';
      newsletterMessage.classList.remove('text-green-600');
      newsletterMessage.classList.add('text-red-500');
      return;
    }

    newsletterMessage.textContent = 'Subscribed — welcome aboard.';
    newsletterMessage.classList.remove('text-red-500');
    newsletterMessage.classList.add('text-green-600');
    newsletterForm.reset();
  });
}