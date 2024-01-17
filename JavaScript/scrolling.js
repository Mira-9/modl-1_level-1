window.addEventListener('scroll', function() {
    let menu = document.querySelector('.horizontal-menu');
    if (window.scrollY > 50) { // 50 - отступ от начала страницы до меню
        menu.classList.add('scrolling');
    } else {
        menu.classList.remove('scrolling');
    }
});