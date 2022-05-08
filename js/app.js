function handleHeader() {
    const button = document.querySelector('.burger-button')
    const menu = document.querySelector('.header__menu')

    button.addEventListener('click', () => {
        button.classList.toggle('change')
        menu.classList.toggle('is-visible')
    }, false);
}

window.onload = handleHeader();
