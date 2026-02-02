const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionText = document.getElementById("questionText");
const catImg = document.getElementById("catImg");

function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

yesBtn.addEventListener("click", () => {
    questionText.innerHTML = "YAYY!! I KNEW YOU'D SAY YES <3"; 
    // New high-energy cute celebration GIF
    catImg.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnk1Y2VpZndreGZqZndueGZqZndueGZqZndueGZqZndueGZqJmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZ2VpZCZjdD1n/LndvW86wAtzC5KzX4p/giphy.gif"; 
    noBtn.style.display = "none"; 
});
