const TARGET_NAME = "Vinni";
document.getElementById("who").textContent = TARGET_NAME;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const askCard = document.getElementById("askCard");
const yayCard = document.getElementById("yayCard");

const noSound = document.getElementById("noSound");
const yesSound = document.getElementById("yesSound");

const funnyNoMessages = ["Sure ah?", "Vinni, alochinchu!", "No kottaku 🥺", "Try again!", "Oops! 😂"];

function moveNo() {
    noSound.currentTime = 0;
    noSound.play().catch(e => console.log("Music blocked"));

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
    noSound.pause();
    yesSound.play().catch(e => console.log("Music blocked"));
    askCard.classList.add("hidden");
    yayCard.classList.remove("hidden");
    startCelebration();
});

function startCelebration() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = "25px";
        heart.style.zIndex = "1000";
        heart.style.transition = "transform 4s linear, opacity 4s";
        document.body.appendChild(heart);
        setTimeout(() => {
            heart.style.transform = "translateY(-110vh)";
            heart.style.opacity = "0";
        }, 100);
        setTimeout(() => heart.remove(), 5000);
    }, 200);
}
