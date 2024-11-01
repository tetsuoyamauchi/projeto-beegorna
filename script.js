let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        
        navbar.classList.add('hidden');
    } else {
        
        navbar.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
});