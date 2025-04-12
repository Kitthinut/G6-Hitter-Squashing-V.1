document.getElementById('calculateButton').addEventListener('click', function () {
  const angle = parseFloat(document.getElementById('angle').value) * (Math.PI / 180);
  const velocity = parseFloat(localStorage.getItem('velocity')) || 5;
  const racketMass = parseFloat(localStorage.getItem('racketMass')) || 0.25;
  const e = parseFloat(localStorage.getItem('coefficientRestitution')) || 0.85;

  if (isNaN(angle) || isNaN(velocity)) {
    alert("Please enter valid values for angle and velocity.");
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
    gifName = ''; // no gif
  }

  document.getElementById('result').innerHTML = 
    `The ball falls in the <b>${zone}</b><br>Distance: ${range.toFixed(3)} meters<br>Total Time: ${totalTime.toFixed(3)} seconds`;

  const gifElem = document.getElementById('resultGif');
  if (gifName !== '') {
    gifElem.src = `gifs/${gifName}`;
    gifElem.style.display = 'block';
  } else {
    gifElem.style.display = 'none';
  }

  console.log("Everything made by Kitthinut Changtham 💖");
});
