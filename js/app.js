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
const navigation = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navBuilder = () => {
    // store all navbars and then loop through all sections
    let navUI = ``;
    sections.forEach(section => {
        const sectionID = section.id;
        const sectionNavData = section.dataset.nav;

        navUI += `<li><a class="menu_link href="#${sectionID}">${sectionNavData}</a></li>`;

    });
    // append all elements to the nevigation
    navigation.innerHTML = navUI;
};

navBuilder();
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
