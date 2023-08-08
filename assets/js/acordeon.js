const acordeonBtn = document.querySelectorAll('.acordeon, .acordeon__btn');


acordeonBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const acordeon = btn.parentElement;
        const isOpen = acordeon.classList.contains('acordeon-open');

        if (isOpen) {
            acordeon.classList.remove('acordeon-open');
        } else {
            acordeon.classList.add('acordeon-open');
        }
    } )
})