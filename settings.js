class SettingsManager {
  constructor() {
      this.defaultSettings = {
          velocity: 2.4,
          racketMass: 0.25,
          coefficientRestitution: 0.85
      };

      this.loadSettings();
      this.addEventListeners();
  }

  saveSettings() {
      const velocity = parseFloat(document.getElementById('velocity').value);
      const racketMass = parseFloat(document.getElementById('racketMass').value);
      const coefficientRestitution = parseFloat(document.getElementById('coefficientRestitution').value);

      localStorage.setItem('velocity', velocity);
      localStorage.setItem('racketMass', racketMass);
      localStorage.setItem('coefficientRestitution', coefficientRestitution);

      alert('Settings saved!');
  }

  resetSettings() {
      document.getElementById('velocity').value = this.defaultSettings.velocity;
      document.getElementById('racketMass').value = this.defaultSettings.racketMass;
      document.getElementById('coefficientRestitution').value = this.defaultSettings.coefficientRestitution;
  }

  loadSettings() {
      document.getElementById('velocity').value = localStorage.getItem('velocity') || this.defaultSettings.velocity;
      document.getElementById('racketMass').value = localStorage.getItem('racketMass') || this.defaultSettings.racketMass;
      document.getElementById('coefficientRestitution').value = localStorage.getItem('coefficientRestitution') || this.defaultSettings.coefficientRestitution;
  }

  addEventListeners() {
      document.getElementById('saveButton').addEventListener('click', () => this.saveSettings());
      document.getElementById('resetButton').addEventListener('click', () => this.resetSettings());
  }
}

// Initialize the settings manager
new SettingsManager();

