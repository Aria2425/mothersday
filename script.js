// Sound effect for card flip
const flipSound = new Audio('https://www.soundjay.com/button/beep-07.wav');  // Sample sound
const confettiContainer = document.getElementById('confetti');
const messageElement = document.getElementById('message');
const specialMessageElement = document.getElementById('specialMessage');
const cardContainer = document.querySelector('.card-container');

document.getElementById("card").addEventListener("click", function() {
    this.classList.toggle("open");

    // Play sound on card flip
    flipSound.play();

    // Add confetti effect
    createConfetti();

    // Display special message with typing effect
    displayMessage();
});

// Function to create confetti animation
function createConfetti() {
    const numConfetti = 200;
    for (let i = 0; i < numConfetti; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti');
        confettiPiece.style.left = Math.random() * 100 + '%';
        confettiPiece.style.top = Math.random() * 100 + '%';
        confettiPiece.style.animationDelay = `${Math.random() * 3}s`;
        confettiContainer.appendChild(confettiPiece);
    }

    // Remove confetti after animation ends
    setTimeout(() => {
        const confettiPieces = document.querySelectorAll('.confetti');
        confettiPieces.forEach(piece => piece.remove());
    }, 4000);  // Remove after animation ends (3s animation + 1s delay)
}

// Function to display the special message with typing effect
function displayMessage() {
    const message = "Thank you for everything you do!";
    const specialMessage = "You are loved more than words can say!";
    
    messageElement.textContent = '';
    specialMessageElement.textContent = '';

    // Typing effect
    let i = 0;
    let interval = setInterval(function() {
        if (i < message.length) {
            messageElement.textContent += message.charAt(i);
            i++;
        } else {
            clearInterval(interval);
            specialMessageElement.textContent = specialMessage;
        }
    }, 100);
}
