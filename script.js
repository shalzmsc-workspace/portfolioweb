// ==========================
// Portfolio JavaScript
// ==========================

// 1. Say Hello button → Redirect to LinkedIn
function sayHello() {
  window.open("https://www.linkedin.com/in/shalini-msc-cs-b5046a2ba", "_blank");
}

// 2. Contact Me button → Thank you popup
function contactMe() {
  alert("Thanks for reaching out! I’ll get back to you soon. 😊");
}

// 3. Smooth scroll for navigation links
document.querySelectorAll('.nav-btn').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
