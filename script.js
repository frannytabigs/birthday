function createConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    const confettiColors = ['#ff4081', '#ffcc00', '#00ccff', '#cc00ff', '#00ffcc'];
    const numberOfConfetti = 200;

    for (let i = 0; i < numberOfConfetti; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.animationDelay = `${Math.random() * 5}s`;
        confettiContainer.appendChild(confetti);
    }
}

document.addEventListener('DOMContentLoaded', createConfetti);
getMessageFromURL();

function getMessageFromURL() {
    var urlParams = new URLSearchParams(window.location.search);
   var message = urlParams.get('message');
    
 
 document.getElementById('message').innerHTML = message;
    
}


