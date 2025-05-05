// Ensure showJoyTip is globally accessible
window.showJoyTip = function() {
  const tips = [
    "Smile at a stranger today! 😊",
    "Take 5 minutes to breathe deeply. 🌬️",
    "Write down one thing you’re grateful for. 📝",
    "Listen to your favorite song and dance! 🎶",
    "Send a kind message to a friend. 💌",
    "Watch the sunrise or sunset. 🌅",
    "Try a new hobby for 10 minutes. 🎨"
  ];
  const joyTipElement = document.getElementById("joy-tip");
  if (joyTipElement) {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    joyTipElement.innerText = randomTip;
  } else {
    console.warn("Joy tip element not found!");
  }
};

// Display an initial tip on page load
document.addEventListener("DOMContentLoaded", function() {
  window.showJoyTip();
});

console.log("Welcome to Micro Bliss by A!");