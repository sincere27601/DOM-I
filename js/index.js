let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let nav = document.querySelectorAll("a");
for (let i = 0; i < nav.length; i++) {
  nav[i].textContent = Object.values(siteContent.nav)[i]
  nav[i].style.color = 'green';
};


let navtag = document.querySelector("nav");
let newChild = document.createElement("a");
newChild.textContent = "Wealth";
newChild.style.color = "green";
navtag.appendChild(newChild);

let newChild2 = document.createElement("a");
newChild2.textContent = "Butterball!";
newChild2.style.color = "green";
navtag.prepend(newChild2);

let ctaText = document.querySelector("h1");
ctaText.textContent = siteContent.cta.h1;

let ctaTextbtn = document.querySelector('button');
ctaTextbtn.addEventListener('click', (event) => {
  alert('Whats The Magic Word!')
})
container.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'green';
});

container.addEventListener('mouseenter', () => {
  container.style.transform = "scale(1.2)";
  container.style.transition = "all 0.3s";
})

let ctaTextbtn = document.querySelector("button");
ctaTextbtn.textContent = siteContent.cta.button;


let header = document.getElementById("cta-img");
header.setAttribute('src', siteContent["cta"]["img-src"]);

let topContenth4 = document.querySelectorAll("div.top-content > div.text-content > h4");
topContenth4[0].textContent = siteContent["main-content"]["features-h4"];

let topContentp = document.querySelectorAll("div.top-content > div.text-content > p");
topContentp[0].textContent = siteContent["main-content"]["features-content"];

topContenth4[1].textContent = siteContent["main-content"]["about-h4"];

topContentp[1].textContent = siteContent["main-content"]["about-content"];

let middle = document.getElementById("middle-img");
middle.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let bottomContenth4 = document.querySelectorAll("div.bottom-content > div.text-content > h4");
bottomContenth4[0].textContent = siteContent["main-content"]["services-h4"];
bottomContenth4[1].textContent = siteContent["main-content"]["product-h4"];
bottomContenth4[2].textContent = siteContent["main-content"]["vision-h4"];

let bottomContentp = document.querySelectorAll("div.bottom-content > div.text-content > p");
bottomContentp[0].textContent = siteContent["main-content"]["services-content"];
bottomContentp[1].textContent = siteContent["main-content"]["product-content"];
bottomContentp[2].textContent = siteContent["main-content"]["vision-content"];

let contacth4 = document.querySelectorAll("section.contact > h4");
contacth4[0].textContent = siteContent.contact["contact-h4"];

let contactp = document.querySelectorAll("section.contact > p");
contactp[0].textContent = siteContent.contact.address;
contactp[1].textContent = siteContent.contact.phone;
contactp[2].textContent = siteContent.contact.email;

let footer = document.querySelector("footer");
footer.textContent = siteContent.footer.copyright;  