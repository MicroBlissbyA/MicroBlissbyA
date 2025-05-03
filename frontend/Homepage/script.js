function showJoyTip() {
    const tips = [
      "Smile at a stranger today! 😊",
      "Take 5 minutes to breathe deeply. 🌬️",
      "Write down one thing you’re grateful for. 📝",
      "Listen to your favorite song and dance! 🎶",
      "Send a kind message to a friend. 💌",
      "Watch the sunrise or sunset. 🌅",
      "Try a new hobby for 10 minutes. 🎨"
    ];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById("joy-tip").innerText = randomTip;
  }
  
  console.log("Welcome to Micro Bliss by A!");