let noCount = 0;
const noPhrases = [
  "No 💔",
  "Are you sure? 🥺",
  "Really sure??",
  "Please think again! 💖",
  "Don't do this to me! 😭",
  "I'll buy you snacks! 🍫",
  "Pretty please? 🥺🌸",
  "You're breaking my heart..."
];

function handleNoClick() {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");

  noCount++;
  
  // Update No button text
  if (noCount < noPhrases.length) {
    noBtn.innerText = noPhrases[noCount];
  } else {
    noBtn.innerText = noPhrases[noPhrases.length - 1];
  }

  // Grow the Yes button
  const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = `${currentSize + 6}px`;
  yesBtn.style.padding = `${12 + noCount * 4}px ${25 + noCount * 6}px`;
}

function acceptApology() {
  const card = document.getElementById("mainCard");
  card.innerHTML = `
    <img class="gif" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGJwZTV6cXlyZXZtOHdvaXVjMnpubWV3OGV3eHJpdHJtdWFqdHJyeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif" alt="Happy Cat">
    <div class="celebration">
      <h2>YAY! Thank you! 🥰🎉</h2>
      <p>I promise to make it up to you, my beloved Venice. Hugs and kisses are on their way! ❤️</p>
    </div>
  `;
}