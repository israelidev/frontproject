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