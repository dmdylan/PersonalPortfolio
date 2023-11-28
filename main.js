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
    }
    else{
        contactFormElement.style.display = "";
    }
}

function submitContactForm(submitEvent){
    window.alert("Submit button pressed, event listener works");
    submitEvent.preventDefault();
}