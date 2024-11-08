// script.js

// Add event listener to the navigation menu
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});

// Add event listener to the hero section button
document.addEventListener("DOMContentLoaded", function () {
  const heroButton = document.querySelector("#hero button");
  heroButton.addEventListener("click", () => {
    const aboutSection = document.querySelector("#about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Add event listener to the contact form
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector("#contact form");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Add your contact form submission logic here
    console.log("Contact form submitted!");
  });
});
