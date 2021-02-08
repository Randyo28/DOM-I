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

//Nav
const navItems = document.querySelectorAll('nav a')

navItems[0].textContent = 'Services'
navItems[1].textContent = 'Product'
navItems[2].textContent = 'Vision'
navItems[3].textContent = 'Features'
navItems[4].textContent = 'About'
navItems[5].textContent = 'Contact'
//console.log(navItems)

const cta = document.querySelector('.cta')
const ctaText = document.querySelector('.cta-text h1')
const button = document.querySelector('.cta-text button')
const brTag = document.createElement('br')
ctaText.innerHTML = `DOM<br>Is<br> Awesome`

button.textContent = 'Get Started'


const ctaImg = document.querySelector('#cta-img')
ctaImg.src = "img/header-img.png"


//Main-content
const topContent = document.querySelectorAll('.top-content .text-content')
const contentH4 = document.querySelectorAll('.text-content h4')
contentH4[0].textContent = 'Features'

const contentP = document.querySelectorAll('.text-content p')

contentP[0].textContent = `Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`

contentH4[1].textContent = 'About'

contentP[1].textContent = `About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in
interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`


const topImg = document.querySelector('#middle-img').src = 'img/mid-page-accent.jpg'

//bottom-content

contentH4[2].textContent = 'Services'

contentP[2].textContent = `Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`

contentH4[3].textContent = 'Product'

contentP[3].textContent = `Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in
interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`

contentH4[4].textContent = 'Vision'

contentP[4].textContent = `Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in
interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`


//Contact

const contact = document.querySelector('.contact h4').textContent = 'Contact'

const contactP = document.querySelectorAll('.contact p')

contactP[0].innerHTML = `123 Way 456 Street<br>Somewhere, USA`
contactP[1].textContent = '1 (888) 888-8888'
contactP[2].textContent = 'sales@greatidea.io'