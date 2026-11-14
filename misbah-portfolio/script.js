const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', e => {
  if (glow) {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  }
});
document.querySelectorAll('.project-card, .skill-card').forEach(card => {
  card.addEventListener('pointermove', e => {
    if (window.innerWidth < 800) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    card.style.transform = `translateY(-5px) rotateX(${-y * 2}deg) rotateY(${x * 2}deg)`;
  });
  card.addEventListener('pointerleave', () => card.style.transform = '');
});

const toast = document.querySelector('.toast');
function notify(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}
document.querySelector('.copy-email')?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('misbahkhan56200@gmail.com');
    notify('Email address copied.');
  } catch {
    notify('Email: misbahkhan56200@gmail.com');
  }
});
document.querySelectorAll('.placeholder-link, .social-placeholder').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const type = link.dataset.link || link.dataset.social;
    notify(`Add your ${type.replace('-', ' ')} URL in index.html to activate this link.`);
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
