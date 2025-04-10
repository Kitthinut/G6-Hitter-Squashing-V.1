class Settings {
    constructor() {
        this.defaultSettings = {
            velocity: 2.4,
            racketMass: 0.25,
            coefficientRestitution: 0.85
        };
        this.init();
    }

    init() {
        document.getElementById('saveButton').addEventListener('click', () => this.saveSettings());
        document.getElementById('resetButton').addEventListener('click', () => this.resetSettings());
        this.loadSettings();
    }

    saveSettings() {
        localStorage.setItem('velocity', document.getElementById('velocity').value);
        localStorage.setItem('racketMass', document.getElementById('racketMass').value);
        localStorage.setItem('coefficientRestitution', document.getElementById('coefficientRestitution').value);
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
}

new Settings();
