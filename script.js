function toggleMenu() {
    const menu = document.querySelector('.logo');
    const icon = document.getElementById('menu-icon');

    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
}

// Auto add reveal to all elements
document.querySelectorAll('h1, h2, h3, p, img, a, table, ul').forEach(el => {
    el.classList.add('reveal');
});

// Observe all reveal elements
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active'); // ← this line makes it re-animate every time!
        }
    });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));