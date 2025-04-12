document.addEventListener('DOMContentLoaded', () => {
  const calculateButton = document.getElementById('calculateButton');

  calculateButton.addEventListener('click', () => {
    const angleInput = document.getElementById('angle').value;
    const angle = parseFloat(angleInput);

    if (isNaN(angle)) {
      alert("Please enter a valid angle.");
      return;
    }

    // Constants
    const velocity = 20; // example value in m/s
    const g = 9.81;

    // Calculations
    const radian = angle * (Math.PI / 180);
    const range = (Math.pow(velocity, 2) * Math.sin(2 * radian)) / g;
    const totalTime = (2 * velocity * Math.sin(radian)) / g;

    // Determine zone and gif
    let zone = '';
    let gifSrc = 'neutral.gif';

    if (range >= 7.50 && range < 11.30) {
      zone = 'Light Blue Zone';
      gifSrc = 'blue.gif';
    } else if (range >= 11.30 && range < 15.10) {
      zone = 'Green Zone';
      gifSrc = 'green.gif';
    } else if (range >= 15.10 && range < 18.90) {
      zone = 'Yellow Zone';
      gifSrc = 'yellow.gif';
    } else if (range >= 18.90 && range < 22.70) {
      zone = 'Orange Zone';
      gifSrc = 'orange.gif';
    } else if (range >= 22.70 && range <= 26.50) {
      zone = 'Red Zone';
      gifSrc = 'red.gif';
    } else {
      zone = 'Out of Range';
      gifSrc = 'out.gif';
    }

    // Output results
    document.getElementById('result').innerHTML =
      `The ball falls in the <b>${zone}</b><br>Distance: ${range.toFixed(3)} meters<br>Total Time: ${totalTime.toFixed(3)} seconds`;

    document.getElementById('resultGif').src = gifSrc;

    console.log(`Angle: ${angle}°, Zone: ${zone}, Range: ${range.toFixed(3)} m, Time: ${totalTime.toFixed(3)} s`);
    console.log("Everything made by Kitthinut Changtham 💖");
  });
});
