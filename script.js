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

function alertDev() {
    setTimeout(() => {
        if(!localStorage.getItem('alertMessage')) {
            window.alert('Olá, que bom te ter aqui. Está mensagem é apenas para informar que o site está em seu modelo MVP e ganhando atualização constantes! Caso queria dar um feedback, sinta-se à vontade para entrar em contato comigo. Forte Abraço!')
            localStorage.setItem('alertMessage', 'yes');
        }
    }, 3000)
}

showIconHome();
alertDev();