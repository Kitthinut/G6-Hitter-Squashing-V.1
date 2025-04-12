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
    console.log("01000011 01010011 01010011 00101100 00100000 01001000 01010100 01001101 01001100 00101100 00100000 01001010 01010011 00101100 00100000 01100001 01101100 01101100 00100000 01101111 01100110 00100000 01101001 01110100 00100000 01100001 01110010 01100101 00100000 01101101 01100001 01100100 01100101 00100000 01100010 01111001 00100000 00110110 00110111 00110000 00110011");
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

