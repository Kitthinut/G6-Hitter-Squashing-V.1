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
  }
}
