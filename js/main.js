/* ================================================
   CLÍNICA ELO — main.js
   ================================================
   1. Nav: scroll + mobile
   2. Scroll reveal
   3. Active link
   4. FAQ accordion
   5. Formulário ilustrativo
   6. Tooltip no clique (botões ilustrativos)
   ================================================ */


/* ─── 1. NAV ──────────────────────────────────── */

const nav       = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

const overlay = document.createElement('div');
overlay.classList.add('nav__overlay');
document.body.appendChild(overlay);

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

nav.classList.toggle('scrolled', window.scrollY > 60);

function openMenu() {
  navToggle.classList.add('open');
  navLinks.classList.add('open');
  overlay.classList.add('visible');
  document.body.style.overflow = 'hidden';
  navToggle.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  navToggle.classList.remove('open');
  navLinks.classList.remove('open');
  overlay.classList.remove('visible');
  document.body.style.overflow = '';
  navToggle.setAttribute('aria-expanded', 'false');
}

navToggle.addEventListener('click', () => {
  navLinks.classList.contains('open') ? closeMenu() : openMenu();
});

navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
overlay.addEventListener('click', closeMenu);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });


/* ─── 2. SCROLL REVEAL ────────────────────────── */

const revealObserver = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  }),
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


/* ─── 3. ACTIVE LINK ──────────────────────────── */

const sections    = document.querySelectorAll('section[id]');
const allNavLinks = document.querySelectorAll('.nav__links a[href^="#"]');

sections.forEach(section => {
  new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        allNavLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    }),
    { threshold: 0.4 }
  ).observe(section);
});


/* ─── 4. FAQ ACCORDION ────────────────────────── */

document.querySelectorAll('.faq__item').forEach(item => {
  const btn      = item.querySelector('.faq__pergunta');
  const resposta = item.querySelector('.faq__resposta');

  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    // Fecha todos os outros
    document.querySelectorAll('.faq__item.open').forEach(other => {
      other.classList.remove('open');
      other.querySelector('.faq__pergunta').setAttribute('aria-expanded', 'false');
    });

    // Alterna o atual
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});


/* ─── 5. FORMULÁRIO ILUSTRATIVO ───────────────── */

const form     = document.getElementById('agendamentoForm');
const feedback = document.getElementById('formFeedback');

if (form && feedback) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    feedback.textContent = '⚠ Formulário meramente ilustrativo — os dados não são enviados.';
  });
}


/* ─── 6. TOOLTIP NO CLIQUE ────────────────────── */

let tipTimer = null;

document.querySelectorAll('.ilustrativo-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.ilustrativo-btn.tip-on').forEach(b => b.classList.remove('tip-on'));
    clearTimeout(tipTimer);
    btn.classList.add('tip-on');
    tipTimer = setTimeout(() => btn.classList.remove('tip-on'), 2500);
  });
});
