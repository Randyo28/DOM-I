const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": `DOM<br> Is<br> Awesome`,
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
    "address" : "123 Way 456 Street<br> Somewhere, USA",
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

//Nav
const nav = document.querySelectorAll('nav')
const navItems = document.querySelectorAll('nav a')

navItems[0].textContent = siteContent["nav"]["nav-item-1"]
navItems[0].style.color = 'green'
navItems[1].textContent = siteContent["nav"]["nav-item-2"]
navItems[1].style.color = 'green'
navItems[2].textContent = siteContent["nav"]["nav-item-3"]
navItems[2].style.color = 'green'
navItems[3].textContent = siteContent["nav"]["nav-item-4"]
navItems[3].style.color = 'green'
navItems[4].textContent = siteContent["nav"]["nav-item-5"]
navItems[4].style.color = 'green'
navItems[5].textContent = siteContent["nav"]["nav-item-6"]
navItems[5].style.color = 'green'
console.log(navItems)

// const newNavItem = document.createTextNode('Careers')
// navItems.appendChild(newNavItem)

const cta = document.querySelector('.cta')
const ctaText = document.querySelector('.cta-text h1')
const button = document.querySelector('.cta-text button')
const brTag = document.createElement('br')
ctaText.innerHTML = siteContent['cta']['h1']

button.textContent = siteContent['cta']['button']


const ctaImg = document.querySelector('#cta-img')
ctaImg.src = siteContent['cta']['img-src']


//Main-content
const topContent = document.querySelectorAll('.top-content .text-content')
const contentH4 = document.querySelectorAll('.text-content h4')
contentH4[0].textContent = siteContent['main-content']["features-h4"]

const contentP = document.querySelectorAll('.text-content p')

contentP[0].textContent = siteContent['main-content']["features-content"]

contentH4[1].textContent = siteContent['main-content']["about-h4"]

contentP[1].textContent = siteContent['main-content']["about-content"]


const topImg = document.querySelector('#middle-img').src = siteContent['main-content']["middle-img-src"]

//bottom-content

contentH4[2].textContent = siteContent['main-content']["services-h4"]

contentP[2].textContent = siteContent['main-content']["services-content"]

contentH4[3].textContent = siteContent['main-content']["product-h4"]

contentP[3].textContent = siteContent['main-content']["product-content"]

contentH4[4].textContent = siteContent['main-content']["vision-h4"]

contentP[4].textContent = siteContent['main-content']["vision-content"]


//Contact

const contact = document.querySelector('.contact h4').textContent = siteContent['contact']["contact-h4"]

const contactP = document.querySelectorAll('.contact p')

contactP[0].innerHTML = siteContent['contact']["address"]
contactP[1].textContent = siteContent['contact']["phone"]
contactP[2].textContent = siteContent['contact']["email"]

//Footer

const footer = document.querySelector('footer p').textContent = siteContent['footer']["copyright"]
