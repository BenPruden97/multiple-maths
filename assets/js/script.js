// How to Play button to open and close for how to play pop up //

document.getElementById("open-how-to").addEventListener('click', function() {
    document.querySelector(".how-to").style.display = "block";
});

document.getElementById("close-how-to").addEventListener('click', function() {
    document.querySelector(".how-to").style.display = "none";
}); 

// High Score button to open and close for high score pop up //

document.getElementById("open-high-score").addEventListener('click', function() {
    document.querySelector(".high-score-popup").style.display = "block";
});

document.getElementById("close-high-score").addEventListener('click', function() {
    document.querySelector(".high-score-popup").style.display = "none";
});

// Contact button to open and close the contact form //

document.getElementById("open-contact-form").addEventListener('click', function() {
    document.querySelector(".contact-form").style.display = "block";
});

document.getElementById("close-contact-form").addEventListener('click', function() {
    document.querySelector(".contact-form").style.display = "none";
});

