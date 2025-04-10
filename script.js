document.getElementById('calculateButton').addEventListener('click', function() {
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
    if (range >= 7.50 && range < 11.30) {
      zone = 'Light Blue Zone';
    } else if (range >= 11.30 && range < 15.10) {
      zone = 'Green Zone';
    } else if (range >= 15.10 && range < 18.90) {
      zone = 'Yellow Zone';
    } else if (range >= 18.90 && range < 22.70) {
      zone = 'Orange Zone';
    } else if (range >= 22.70 && range <= 26.50) {
      zone = 'Red Zone';
    } else {
      zone = 'Out of Range';
    }
  
    document.getElementById('result').innerHTML = `The ball falls in the ${zone}<br>Distance: ${range.toFixed(3)} meters<br>Total Time: ${totalTime.toFixed(3)} seconds`;
    document.getElementById('resultGif').src = 'result.gif';
  });
  
