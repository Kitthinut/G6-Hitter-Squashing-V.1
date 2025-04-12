document.getElementById('calculateButton').addEventListener('click', function () {
// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', function () {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  // Load mode from localStorage (default is light mode if not set)
  if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode'); // Apply dark mode
  }

  // Toggle dark mode on button click
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function (e) {
      e.preventDefault();
      body.classList.toggle('dark-mode'); // Toggle the dark mode class
      const isDarkModeEnabled = body.classList.contains('dark-mode');
      localStorage.setItem('dark-mode', isDarkModeEnabled ? 'enabled' : 'disabled'); // Save the preference
    });
  }

  // Calculation logic for projectile
  const calcBtn = document.getElementById('calculateButton');
  if (calcBtn) {
    calcBtn.addEventListener('click', function () {
      const angleDeg = parseFloat(document.getElementById('angle').value);
      const angle = angleDeg * (Math.PI / 180); 
      const velocity = parseFloat(localStorage.getItem('velocity')) || 5;
      const racketMass = parseFloat(localStorage.getItem('racketMass')) || 0.25;
      const e = parseFloat(localStorage.getItem('coefficientRestitution')) || 0.85;

      if (isNaN(angleDeg)) {
        alert("Please enter a valid angle.");
        return;
      }

  const projectile = new Project_Cal(1.73, velocity, racketMass, 0.2, e, angle, 10);
  const { totalTime, range } = projectile.calculate();

  let zone = '';
  let gifName = '';

  if (range >= 7.50 && range < 11.30) {
    zone = 'Light Blue Zone';
    gifName = 'blue.gif';
  } else if (range >= 11.30 && range < 15.10) {
    zone = 'Green Zone';
    gifName = 'green.gif';
  } else if (range >= 15.10 && range < 18.90) {
    zone = 'Yellow Zone';
    gifName = 'yellow.gif';
  } else if (range >= 18.90 && range < 22.70) {
    zone = 'Orange Zone';
    gifName = 'orange.gif';
  } else if (range >= 22.70 && range <= 26.50) {
    zone = 'Red Zone';
    gifName = 'red.gif';
  } else {
    zone = 'Out of Range';
    gifName = 'out.gif'; 
  }

  // Show result
  document.getElementById('result').innerHTML =
    `The ball falls in the <b>${zone}</b><br>Distance: ${range.toFixed(3)} meters<br>Total Time: ${totalTime.toFixed(3)} seconds`;

  const gifElem = document.getElementById('resultGif');
  gifElem.src = `gifs/${gifName}`;
  gifElem.style.display = 'block';

  // Debug logs
  console.log(`[DEBUG] Angle: ${angleDeg}°`);
  console.log(`[DEBUG] Velocity: ${velocity} m/s, Racket Mass: ${racketMass} kg, Coefficient: ${e}`);
  console.log(`[DEBUG] Range: ${range.toFixed(3)} m, Time: ${totalTime.toFixed(3)} s, Zone: ${zone}`);
  console.log("Everything made by Kitthinut Changtham 💖");
});
