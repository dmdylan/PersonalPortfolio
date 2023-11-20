function scrollToSection(section){
    const element = document.getElementById(`${section}`);
    element.scrollIntoView(true);
}

function onSubmitContactForm(token) {
    document.getElementById("contact-form").submit();
}

function toggleContactForm(){
    const contactFormElement = document.getElementById("contact-overlay");
    
    if(contactFormElement.style.display !== "none"){
        contactFormElement.style.display = "none";
    }
    else{
        contactFormElement.style.display = "";

    }
}

function hideContactForm(){
    document.getElementById("contact-overlay").style.display = "none";
}