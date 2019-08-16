// variables
var $header_top = $('.header-top');
var $nav = $('nav');

// toggle menu 
$header_top.find('a').on('click', function () {
  $nav.toggleClass('open-list');
  $(this).parent().toggleClass('x-toggle')
});

// fullpage customization
$('#fullpage').fullpage({
  sectionsColor: ['#B8AE9C', '#1B1B1C', 'transparent', '#40030E', '#40030E', '#FFAC00', '#2F3B40', '#36363c', 'transparent', 'transparent'],
  sectionSelector: '.vertical-scrolling',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection', 'sixthSection', 'seventhSection', 'eighthSection', "section9", "section10"],
  menu: '#menu',

  afterLoad: function (anchorLink, index) {
    $header_top.css('background', 'rgba(0, 47, 77, .3)');
    $nav.css('background', 'rgba(0, 47, 77, .3)');
    if (index == 6) {
      $('#fp-nav').hide();
    }
  },

  onLeave: function (index, nextIndex, direction) {
    if (index == 6) {
      $('#fp-nav').show();
    }
  },
});


// SECTION 3 SCRIPT
$(document).on('mouseover', '.section-3-column', function () {
  $(this).addClass('active').siblings().removeClass('active')
})

// SECTION 6 SCRIPT
const searchEl = document.querySelector('.fake-box')
const searchBoxEl = document.querySelector('.search-box')
const typedEl = document.querySelector('.typed-element')

const fragment = document.importNode(document.querySelector('#search').content, true)

let typed = new Typed(typedEl, {
  strings: ["React", "Java Script", "SCSS", "Wireframe", "SEO", "GIT"],
  typeSpeed: 100,
  backDelay: 1500,
  loop: true,
  backSpeed: 40
});

const hideElement = searchEl.addEventListener('click', e => {
  e.preventDefault();
  searchEl.style.display = "none";
  typed.pause.status = true;
  searchBoxEl.appendChild(fragment);
  document.querySelector('.search-input').focus();
})

// SECTION 9 SCRIPT
const $searchBox = $('.search-box-js');
const $searchInput = $('.input-js');
const $searchBtn = $('.search-btn');

$searchInput.focus(function () {
  $(this).parent().toggleClass('focused')
})

$searchInput.focusout(function () {
  $(this).parent().toggleClass('focused')
})

// SECTION 10 SCRIPT
const toggleBtn = document.querySelector('.toggle-btn')

document.querySelector('.toggle-btn').addEventListener('click', function () {
  console.log('click')
  toggleBtn.classList.toggle("toggle-open")
})