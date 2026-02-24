/* ============================================
   PORTFOLIO JAVASCRIPT
   ============================================ */

// ——— Navbar Scroll Effect ———
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
    updateActiveLink();
});

// ——— Active Nav Link on Scroll ———
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    const scrollPos = window.scrollY + 100;
    sections.forEach(section => {
        const { offsetTop, offsetHeight, id } = section;
        if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            navLinks.forEach(l => l.classList.remove('active'));
            const active = document.querySelector(`.nav-link[href="#${id}"]`);
            if (active) active.classList.add('active');
        }
    });
}

// ——— Smooth Nav Click + Close Mobile Menu ———
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const menuToggle = document.getElementById('menuToggle');
        if (menuToggle) {
            menuToggle.checked = false;
        }
    });
});

// ——— Scroll Reveal ———
const revealEls = document.querySelectorAll(
    '.about-text, .about-stats, .stat-card, .skill-category, ' +
    '.project-card, .timeline-item, .contact-info, .contact-form, ' +
    '.section-title'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

// ——— Skill Bar Animation ———
const barFills = document.querySelectorAll('.bar-fill');
const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fill = entry.target;
            fill.style.width = fill.dataset.width + '%';
            barObserver.unobserve(fill);
        }
    });
}, { threshold: 0.3 });

barFills.forEach(fill => barObserver.observe(fill));

// ——— Contact Form ———
const form = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate sending (replace with actual backend/EmailJS call)
    setTimeout(() => {
        formSuccess.style.display = 'block';
        form.reset();
        submitBtn.textContent = 'Send Message 🚀';
        submitBtn.disabled = false;
        setTimeout(() => { formSuccess.style.display = 'none'; }, 5000);
    }, 1500);
});
