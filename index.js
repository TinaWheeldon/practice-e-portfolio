

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')

    emailjs
        .sendForm(
            'service_czvqb4j',
            'template_5ddb5ks',
            event.target,
            'bmFK0Jt0V9HRfIjkO'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly on email@email.com"
            )
        })
}