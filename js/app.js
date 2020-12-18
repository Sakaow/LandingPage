/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll("section");
const navBar = document.querySelector("#navbar__list");
const goToTopBtn = document.getElementById("goToTopBtn");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Check element is in viewport 
function isInViewport(element) {
    const distance = element.getBoundingClientRect();
    return (
        distance.top <= 100 &&
        distance.left >= 0 &&
        distance.bottom >= 90 &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth));
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Build nav menubar
function navbarBuilder () {
    const fragment = document.createDocumentFragment();
    for (const section of sections) {
        let navItem = document.createElement('li');
        const id = section.id;
        const dataNav = section.dataset.nav;
        navItem.innerHTML = `<a class="menu__link ${id}" href="#${id}">${dataNav}</a>`;
        fragment.appendChild(navItem);
    }
    navBar.appendChild(fragment);
}

navbarBuilder();

// addEventlistener fires when a user scroll to any section
// uses the isInviewport function to check and active link at the section 
document.addEventListener('scroll', function activeSection(){
    for (const section of sections) {
        const navItem = document.querySelector(`.${section.id}`);
        if (isInViewport(section)) {
            section.classList.add("section-active");
            navItem.classList.add("link-active");
        } else {
            section.classList.remove("section-active");
            navItem.classList.remove("link-active");
        }
    }
});

// Smoothly scroll to the specific section after click on navigation bar
const links = document.querySelectorAll(".menu__link");
for (const link of links) {
    link.addEventListener("click", function clickHandler(a){
        a.preventDefault();
        const href = document.querySelector(link.getAttribute("href"));
        href.scrollIntoView({ behavior: "smooth" });
    });
}

//Reveal "scroll to top" button after scrolling down the viewport
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goToTopBtn.style.display = "block";
      } else {
        goToTopBtn.style.display = "none";
      }
}

// addEventListener fires the scroll to top when click the the up icon
goToTopBtn.addEventListener('click', goToTop());
function goToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
/**
 * End Main Functions
 * Begin Events
 * 
*/