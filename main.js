

function scrollToSection(section){
    const element = document.getElementById(`${section}`);
    element.scrollIntoView(true);
}

function onSubmitContactForm(token) {
    document.getElementById("contact-form").submit();
}

function toggleContactForm(){
    const contactFormElement = document.getElementById("contact-overlay");
    const contactForm = document.getElementById("contact-form");
    

    if(contactFormElement.style.display !== "none"){
        contactFormElement.style.display = "none";
        contactForm.reset();
        grecaptcha.reset();
    }
    else{
        contactFormElement.style.display = "";
    }
}

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const captchaResponse = grecaptcha.getResponse();

    if(!captchaResponse.length > 0){
        throw new Error("captcha not completed");
    }

    const fd = new FormData(e.target);
    const params = new URLSearchParams(fd);

    fetch("http://httpbin.org/post",{
        method: "POST",
        body: params,
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

    toggleContactForm();
});