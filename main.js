

function scrollToSection(section){
    const element = document.getElementById(`${section}`);
    element.scrollIntoView(true);
}

function toggleContactForm(){
    const contactFormElement = document.getElementById("contact-overlay");
    const contactForm = document.getElementById("contact-form");
    const hCaptcha = form.querySelector('textarea[name=h-captcha-response]');

    if(contactFormElement.style.display !== "none"){
        contactFormElement.style.display = "none";
        contactForm.reset();
        hCaptcha.reset();
    }
    else{
        contactFormElement.style.display = "";
    }
}

const form = document.getElementById('contact-form');
      
form.addEventListener('submit', function(e) {

    const hCaptcha = form.querySelector('textarea[name=h-captcha-response]').value;

    if (!hCaptcha) {
        e.preventDefault();
        alert("Please fill out captcha field")
        return
    }
});