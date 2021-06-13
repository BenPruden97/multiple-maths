/* How to Play button to open and close for how to play pop up */

document.getElementById("open-how-to").addEventListener('click', function() {
    document.querySelector(".how-to").style.display = "block";
});

document.getElementById("close-how-to").addEventListener('click', function() {
    document.querySelector(".how-to").style.display = "none";
});


/* Contact button to open and close the contact form */

function openContactForm() {
    document.getElementById("contact-form").style.display = "block"
}

function closeContactForm() {
    document.getElementById("contact-form").style.display = "none"
}