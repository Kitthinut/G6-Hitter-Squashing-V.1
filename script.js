class ProjectileMotion {
    constructor(height, velocity, racketMass, ballMass, restitution, angle, gravity) {
        this.height = height;
        this.velocity = velocity;
        this.racketMass = racketMass;
        this.ballMass = ballMass;
        this.restitution = restitution;
        this.angle = angle;
        this.gravity = gravity;
    }

    calculate() {
        const vx = this.velocity * Math.cos(this.angle);
        const vy = this.velocity * Math.sin(this.angle);
        const totalTime = (2 * vy) / this.gravity;
        const range = vx * totalTime;
        return { totalTime, range };
    }
}

class Simulation {
    constructor() {
        this.init();
    }

    init() {
        document.getElementById('calculateButton').addEventListener('click', () => this.runSimulation());
    }

    getStoredValue(key, defaultValue) {
        return parseFloat(localStorage.getItem(key)) || defaultValue;
    }

    determineZone(range) {
        if (range >= 7.50 && range < 11.30) return 'Light Blue Zone';
        if (range >= 11.30 && range < 15.10) return 'Green Zone';
        if (range >= 15.10 && range < 18.90) return 'Yellow Zone';
        if (range >= 18.90 && range < 22.70) return 'Orange Zone';
        if (range >= 22.70 && range <= 26.50) return 'Red Zone';
        return 'Out of Range';
    }

    runSimulation() {
        const angle = parseFloat(document.getElementById('angle').value) * (Math.PI / 180);
        const velocity = this.getStoredValue('velocity', 5);
        const racketMass = this.getStoredValue('racketMass', 0.25);
        const restitution = this.getStoredValue('coefficientRestitution', 0.85);

        if (isNaN(angle) || isNaN(velocity)) {
            alert("Please enter valid values for angle and velocity.");
            return;
        }

        const projectile = new ProjectileMotion(1.73, velocity, racketMass, 0.2, restitution, angle, 10);
        const { totalTime, range } = projectile.calculate();
        const zone = this.determineZone(range);

        document.getElementById('result').innerHTML = `The ball falls in the ${zone}<br>Distance: ${range.toFixed(3)} meters<br>Total Time: ${totalTime.toFixed(3)} seconds`;
        document.getElementById('resultGif').src = 'result.gif';
    }
}

new Simulation();

