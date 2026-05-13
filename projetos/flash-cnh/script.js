const header = document.querySelector('[data-header]');
const revealItems = document.querySelectorAll('.reveal');

function updateHeader() {
  header?.classList.toggle('is-scrolled', window.scrollY > 12);
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });
