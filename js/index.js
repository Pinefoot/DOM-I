const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "Home",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Create selectors by using any of the DOM element's methods
//nav items

// let navItems = document.querySelectorAll('nav-item-1');
//     navItems.setAttribute('src', siteContent['nav-item-1']);
 
document.querySelector('a:nth-of-type(1)').textContent = siteContent.nav['nav-item-1'];
document.querySelector('a:nth-of-type(2)').textContent = siteContent.nav['nav-item-2'];
document.querySelector('a:nth-of-type(3)').textContent = siteContent.nav['nav-item-3'];
document.querySelector('a:nth-of-type(4)').textContent = siteContent.nav['nav-item-4'];
document.querySelector('a:nth-of-type(5)').textContent = siteContent.nav['nav-item-5'];
document.querySelector('a:nth-of-type(6)').textContent = siteContent.nav['nav-item-6'];

//changing color
let navColor = document.querySelectorAll('a');
navColor.forEach(element => {
  element.style.color = '#008000';
});

//prepend and appendChild
let newNavItem = document.createElement('a')
newNavItem.textContent = 'Home';
newNavItem.style.color = '#008000';
let updatedNavItem = document.querySelector('nav');

updatedNavItem.prepend(newNavItem);

//appendChild
let anotherNav = document.createElement('a');
anotherNav.textContent = "Have an Idea?!";
anotherNav.style.color = "#008000";
let anotherUpdate = document.querySelector ('nav');

anotherUpdate.appendChild(anotherNav);




  




//body items

//round image
document.getElementById('cta-img').setAttribute('src', siteContent['cta']['img-src']);
//h1
document.querySelector('h1').textContent = siteContent.cta['h1'];
//button
document.querySelector('button').textContent = siteContent.cta['button'];


//main content

//middle image
document.getElementById('middle-img').setAttribute('src', siteContent['main-content']['middle-img-src']);

// //features
// document.querySelector('h4').textContent = siteContent['main-content']['features-h4'];
// document.querySelector('p').textContent = siteContent['main-content']['features-content'];

let mainContentHeaders = document.querySelectorAll('h4');
mainContentHeaders[0].textContent = siteContent['main-content']['features-h4'];
mainContentHeaders[1].textContent = siteContent['main-content']['about-h4'];
mainContentHeaders[2].textContent = siteContent['main-content']['services-h4'];
mainContentHeaders[3].textContent = siteContent['main-content']['product-h4'];
mainContentHeaders[4].textContent = siteContent['main-content']['vision-h4'];

let mainContentParagraphs = document.querySelectorAll('p');
mainContentParagraphs[0].textContent = siteContent['main-content']['features-content'];
mainContentParagraphs[1].textContent = siteContent['main-content']['about-content'];
mainContentParagraphs[2].textContent = siteContent['main-content']['services-content'];
mainContentParagraphs[3].textContent = siteContent['main-content']['product-content'];
mainContentParagraphs[4].textContent = siteContent['main-content']['vision-content'];


//Contact
document.querySelector('.contact h4').textContent = siteContent.contact['contact-h4'];
document.querySelector('.contact p:nth-of-type(1)').textContent = siteContent.contact['address'];
document.querySelector('.contact p:nth-of-type(2)').textContent = siteContent.contact['phone'];
document.querySelector('.contact p:nth-of-type(3)').textContent = siteContent.contact['email'];

//footer
let footerSec = document.querySelector('footer');
footerSec.textContent = siteContent.footer['copyright'];

//:]







