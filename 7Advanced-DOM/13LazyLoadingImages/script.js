'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const header = document.querySelector('.header');

// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button scrolling

btnScrollTo.addEventListener('click', () => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  console.log(e.target);

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

tabsContainer.addEventListener('click', (e) => {
  // const clicked = e.target;
  const clicked = e.target.closest('.operations__tab'); // We are interested in whole button not on the text and number.
  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove('operations__tab--active'));
  tabsContent.forEach((t) => t.classList.remove('operations__content--active'));

  // Activating tab.
  clicked.classList.add('operations__tab--active');

  // Activating the right text.
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this.opacity;
    });
    logo.style.opacity = this.opacity;
  }
};

// Modern Way Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind({ opacity: 0.5 }));
nav.addEventListener('mouseout', handleHover.bind({ opacity: 1 }));

// Sticky navigation: Intersection Observer API

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]'); // Here we have selected all the lazy loaded Images

const loadImg = function (entries, observer) {
  console.log('entries ', entries);
  console.log('observer ', observer);
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  // As getting image can take time so we use event listener on onload event.
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

// IntersectionObserver take two args one callback Function and one is options
const imgObserver = new IntersectionObserver(loadImg, {
  // delay: 2000,
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

// Now we have to set the observer also on the element on which we want.
imgTargets.forEach((img) => imgObserver.observe(img));
