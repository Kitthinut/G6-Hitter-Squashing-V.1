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
    console.log("01000101 01110110 01100101 01110010 01111001 01110100 01101000 01101001 01101110 01100111 00100000 01101101 01100001 01100100 01100101 00100000 01100010 01111001 00100000 01001011 01101001 01110100 01110100 01101000 01101001 01101110 01110101 01110100 00100000 01000011 01101000 01100001 01101110 01100111 01110100 01101000 01100001 01101101");
  }
}
