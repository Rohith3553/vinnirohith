const TARGET_NAME = "Vinni";
document.getElementById("who").textContent = TARGET_NAME;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const askCard = document.getElementById("askCard");
const yayCard = document.getElementById("yayCard");

// Audio Elements ni grab chestunnam
const noSound = document.getElementById("noSound");
const yesSound = document.getElementById("yesSound");

const funnyNoMessages = ["Sure ah?", "Vinni, alochinchu!", "No kottaku 🥺", "Try again!", "Oops! 😂"];

function moveNo() {
    // No daggara funny sound
    noSound.currentTime = 0; 
    noSound.play().catch(e => console.log("Music play blocked"));

    const maxX = window.innerWidth - noBtn.offsetWidth - 50;
    const maxY = window.innerHeight - noBtn.offsetHeight - 50;
    const x = Math.max(10, Math.floor(Math.random() * maxX));
    const y = Math.max(10, Math.floor(Math.random() * maxY));

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
    noBtn.textContent = funnyNoMessages[Math.floor(Math.random() * funnyNoMessages.length)];
}

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", (e) => { e.preventDefault(); moveNo(); });

yesBtn.addEventListener("click", () => {
    // No sound ni aapesi, Yes sound ni play chestunnam
    noSound.pause();
    yesSound.play().catch(e => console.log("Music play blocked"));

    askCard.classList.add("hidden");
    yayCard.classList.remove("hidden");
    startCelebration(); // Pata code lo unna hearts celebration logic
});

// Hearts Celebration Logic
function startCelebration() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.classList.add("heart-drop");
        heart.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 300);
}
