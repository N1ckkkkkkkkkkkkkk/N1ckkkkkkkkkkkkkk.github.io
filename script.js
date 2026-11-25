const translations = {};
translations.es = {
  'nav.explore': 'Explorar',
  'nav.categories': 'Categorías',
  'nav.points': 'Puntos',
  'nav.about': 'Nosotros',
  'nav.contact': 'Contacto',
  'nav.login': 'Iniciar sesión',
  'nav.upload': 'Subir proyecto',
  'hero.badge': 'Comunidad de diseñadores',
  'hero.title': 'Tu nuevo inicio en el diseño',
  'hero.desc': 'Una plataforma pensada para diseñadores gráficos novatos donde compartir, descubrir y aprender a través de plantillas y proyectos reales creados por la comunidad',
  'hero.cta1': 'Explorar plantillas',
  'hero.cta2': 'Cómo funciona',
  'hero.stat1': 'plantillas',
  'hero.stat2': 'diseñadores',
  'hero.stat3': 'categorías',
  'cat.title': '¿Por qué quieres empezar?',
  'cat.desc': 'Elige el área que más te inspira y comienza a crear con plantillas hechas por la comunidad',
  'cat.sm': 'Plantillas para redes sociales',
  'cat.pk': 'Diseños para empaques',
  'cat.ux': 'Interfaces y experiencia',
  'cat.id': 'Marcas y sistemas visuales',
  'gal.title': 'Plantillas y proyectos de la comunidad',
  'gal.desc': 'Explora los trabajos compartidos por diseñadores de todo el mundo',
  'fil.all': 'Todos',
  'fil.sm': 'Social media',
  'fil.pk': 'Packaging',
  'fil.ux': 'Diseño UX/UI',
  'fil.br': 'Mockup',
  'fil.fav': 'Mis favoritos',
  'pts.title': 'Tu trabajo, reconocido',
  'pts.desc': 'Cada plantilla que compartes suma puntos y desbloquea nuevos niveles dentro de la comunidad',
  'lvl.seed': 'Semilla',
  'lvl.sprout': 'Brote',
  'lvl.creative': 'Creativo',
  'lvl.ref': 'Referente',
  'step1': 'Sube',
  'step1d': 'Comparte tus plantillas y proyectos con la comunidad',
  'step2': 'Comparte',
  'step2d': 'Difunde tu trabajo y ayuda a otros diseñadores a crecer',
  'step3': 'Gana',
  'step3d': 'Acumula puntos y desbloquea niveles y reconocimiento',
  'about.title': 'Conoce a nuestras fundadoras',
  'about.bio': 'Diseñadora gráfica especializada en identidad visual y branding, enfocada en crear experiencias visuales modernas y funcionales',
  'contact.title': 'Hablemos',
  'contact.desc': '¿Tienes dudas, ideas o quieres colaborar? Escríbenos y te respondemos pronto',
  'footer.tagline': 'Un Nuevo Inicio',
  'footer.copy': '© 2026 uni. Todos los derechos reservados'
};
translations.en = {
  'nav.explore': 'Explore',
  'nav.categories': 'Categories',
  'nav.points': 'Points',
  'nav.about': 'About',
  'nav.contact': 'Contact',
  'nav.login': 'Sign in',
  'nav.upload': 'Upload project',
  'hero.badge': 'Designers community',
  'hero.title': 'Your new beginning in design',
  'hero.desc': 'A platform built for beginner graphic designers to share, discover and learn through real templates and projects created by the community',
  'hero.cta1': 'Explore templates',
  'hero.cta2': 'How it works',
  'hero.stat1': 'templates',
  'hero.stat2': 'designers',
  'hero.stat3': 'categories',
  'cat.title': 'Why do you want to start?',
  'cat.desc': 'Choose the area that inspires you most and start creating with templates made by the community',
  'cat.sm': 'Templates for social media',
  'cat.pk': 'Packaging designs',
  'cat.ux': 'Interfaces and experience',
  'cat.id': 'Brands and visual systems',
  'gal.title': 'Templates and projects from the community',
  'gal.desc': 'Explore the work shared by designers from all over the world',
  'fil.all': 'All',
  'fil.sm': 'Social media',
  'fil.pk': 'Packaging',
  'fil.ux': 'UX/UI design',
  'fil.br': 'Mockup',
  'fil.fav': 'My favorites',
  'pts.title': 'Your work, recognized',
  'pts.desc': 'Every template you share earns points and unlocks new levels within the community',
  'lvl.seed': 'Seed',
  'lvl.sprout': 'Sprout',
  'lvl.creative': 'Creative',
  'lvl.ref': 'Reference',
  'step1': 'Upload',
  'step1d': 'Share your templates and projects with the community',
  'step2': 'Share',
  'step2d': 'Spread your work and help other designers grow',
  'step3': 'Earn',
  'step3d': 'Accumulate points and unlock levels and recognition',
  'about.title': 'Meet our founders',
  'about.bio': 'Graphic designer specialized in visual identity and branding, focused on creating modern and functional visual experiences',
  'contact.title': "Let's talk",
  'contact.desc': 'Have questions, ideas or want to collaborate? Write to us and we will reply soon',
  'footer.tagline': 'A New Beginning',
  'footer.copy': '© 2026 uni. All rights reserved'
};


let currentLang = localStorage.getItem('uni-lang') || 'es';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('uni-lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  navLinks.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const filters = document.querySelectorAll('.filter');
const FAV_KEY = 'uni-favorites';

// Mapa de filtro -> texto exacto de la burbuja de categoría
const FILTER_TAG = {
  social: 'Social media',
  packaging: 'Packaging',
  brand: 'Mockup'
};

function getFavs() {
  try { return new Set(JSON.parse(localStorage.getItem(FAV_KEY) || '[]')); }
  catch (e) { return new Set(); }
}

function saveFavs(set) {
  localStorage.setItem(FAV_KEY, JSON.stringify([...set]));
}

function updateFavBtn(card, favs) {
  const btn = card.querySelector('.fav-btn');
  if (!btn) return;
  const isFav = favs.has(card.dataset.favId);
  btn.classList.toggle('is-fav', isFav);
  btn.textContent = isFav ? '♥' : '♡';
}

let currentFilter = 'all';

function applyFilter(filter) {
  currentFilter = filter;
  const favs = getFavs();
  document.querySelectorAll('.project-card').forEach((card) => {
    let show = false;
    if (filter === 'all') show = true;
    else if (filter === 'fav') show = favs.has(card.dataset.favId);
    else {
      const tag = (card.querySelector('.project-tag') && card.querySelector('.project-tag').textContent || '').trim();
      const target = (FILTER_TAG[filter] || filter).trim();
      show = tag === target;
    }
    card.classList.toggle('is-hidden', !show);
  });
}

// Prepara tarjetas: id de favorito + botón de favorito
document.querySelectorAll('.project-card').forEach((card, i) => {
  if (!card.dataset.favId) {
    const img = card.querySelector('img');
    card.dataset.favId = (img && img.getAttribute('src')) || (card.querySelector('h3') && card.querySelector('h3').textContent) || String(i);
  }
  const thumb = card.querySelector('.project-thumb');
  if (thumb && !thumb.querySelector('.fav-btn')) {
    const btn = document.createElement('button');
    btn.className = 'fav-btn';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Marcar como favorito');
    thumb.appendChild(btn);
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const favs = getFavs();
      if (favs.has(card.dataset.favId)) favs.delete(card.dataset.favId);
      else favs.add(card.dataset.favId);
      saveFavs(favs);
      updateFavBtn(card, favs);
      if (currentFilter === 'fav') applyFilter('fav');
    });
  }
  updateFavBtn(card, getFavs());
});

filters.forEach((f) => {
  f.addEventListener('click', () => {
    filters.forEach((x) => x.classList.remove('active'));
    f.classList.add('active');
    applyFilter(f.dataset.filter);
  });
});

applyLanguage(currentLang);
applyFilter('all');

