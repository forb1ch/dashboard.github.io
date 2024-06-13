export function burgerMenu() {
    let body = document.querySelector('body');
    let button = document.querySelector('.menu-button__svg');

    button.addEventListener('click', (e) => {
        if (body.classList.contains('menu-open')) {
            body.classList.remove("menu-open");
            return;
        }
        body.classList.add("menu-open");
    })
  }