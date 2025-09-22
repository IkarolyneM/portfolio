let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove("active");
                document
                    .querySelector("header nav a[href*=" + id + "]")
                    .classList.add("active");
            });
        }
    });

    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");
};

ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal(".about-img, .services-container, .portfolio-box, .contact form, .skills-container", { origin: "bottom" });
ScrollReveal().reveal(".about-content", { origin: "right" });
ScrollReveal().reveal(".heading", { origin: "top" });

const typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Web Designer", "UI / UX Designer", "Web Developer", "Software Tester"],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const fullName = document.getElementById('fullName').value;
            const emailAddress = document.getElementById('emailAddress').value;
            const phoneNumber = document.getElementById('phoneNumber').value;
            const emailSubject = document.getElementById('emailSubject').value;
            const message = document.getElementById('message').value;

            const mailtoLink = `mailto:seu-email@exemplo.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(
                `Nome: ${fullName}\n` +
                `Email: ${emailAddress}\n` +
                `Telefone: ${phoneNumber}\n\n` +
                `Mensagem:\n${message}`
            )}`;

            window.location.href = mailtoLink;
        });
    }
});