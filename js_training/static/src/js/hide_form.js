const target = document.querySelector('.hide_form');

if(target){
    target.addEventListener('click', (e) => {
        const form = document.querySelector('#create_partner_form');
        form.classList.toggle('d-none');
    })
}
