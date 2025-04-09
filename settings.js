const defaultSettings = {
  velocity: 2.4,
  racketMass: 0.25,
  coefficientRestitution: 0.85
};

function saveSettings() {
  const velocity = parseFloat(document.getElementById('velocity').value);
  const racketMass = parseFloat(document.getElementById('racketMass').value);
  const coefficientRestitution = parseFloat(document.getElementById('coefficientRestitution').value);

  localStorage.setItem('velocity', velocity);
  localStorage.setItem('racketMass', racketMass);
  localStorage.setItem('coefficientRestitution', coefficientRestitution);

  alert('Settings saved!');
}

function resetSettings() {
  document.getElementById('velocity').value = defaultSettings.velocity;
  document.getElementById('racketMass').value = defaultSettings.racketMass;
  document.getElementById('coefficientRestitution').value = defaultSettings.coefficientRestitution;
}

document.getElementById('saveButton').addEventListener('click', saveSettings);
document.getElementById('resetButton').addEventListener('click', resetSettings);

// Initialize the form with saved settings if available
document.getElementById('velocity').value = localStorage.getItem('velocity') || defaultSettings.velocity;
document.getElementById('racketMass').value = localStorage.getItem('racketMass') || defaultSettings.racketMass;
document.getElementById('coefficientRestitution').value = localStorage.getItem('coefficientRestitution') || defaultSettings.coefficientRestitution;
