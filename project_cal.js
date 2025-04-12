class Project_Cal {
  constructor(Sy, u_b, M, m, e, theta, h) {
    this.Sy = Sy;
    this.u_b = u_b;
    this.M = M;
    this.m = m;
    this.e = e;
    this.theta = theta;
    this.h = h;
  }

  calculateFallTime() {
    return Math.sqrt((2 * this.Sy) / 9.81);
  }

  calculateProjectileTime(v_y0) {
    return (2 * this.h) / v_y0;
  }

  calculateScatteringAngle(v_b) {
    return Math.atan(v_b / (this.u_b * Math.sin(this.theta)));
  }

  calculateRange(u_0, alpha) {
    const g = 9.81;
    return (u_0 * Math.cos(alpha)) / g * (u_0 * Math.sin(alpha) + (Math.pow(u_0, 2) * Math.sin(2 * alpha)) / 2 + 2 * g * this.h);
  }

  calculate() {
    const t1 = this.calculateFallTime();
    const v_b = this.u_b * this.e;
    const alpha = this.calculateScatteringAngle(v_b);
    const u_0 = Math.sqrt(Math.pow(v_b, 2) + Math.pow(this.u_b * Math.sin(this.theta), 2));
    const t2 = this.calculateProjectileTime(v_b);
    const totalTime = t1 + t2;
    const range = this.calculateRange(u_0, alpha);

    return { totalTime, range };
    console.log("01000011 01010011 01010011 00101100 00100000 01001000 01010100 01001101 01001100 00101100 00100000 01001010 01010011 00101100 00100000 01100001 01101100 01101100 00100000 01101111 01100110 00100000 01101001 01110100 00100000 01100001 01110010 01100101 00100000 01101101 01100001 01100100 01100101 00100000 01100010 01111001 00100000 00110110 00110111 00110000 00110011");
  }
}
