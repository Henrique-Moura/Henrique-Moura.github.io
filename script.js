function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

function showIconHome() {
    const homeBtn = document.querySelector('.btn-fixed');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY <= 300) {
            homeBtn.classList.remove('active')
        } else {
            homeBtn.classList.add('active')
        }
    });
}

showIconHome();