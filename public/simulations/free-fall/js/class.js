export class Ball {
  constructor(p, x, y, g) {
    this.p = p;
    this.posX = x;
    this.posY = y;
    this.velocity = 0;
    this.gravity = g;
  }
  update() {
    this.velocity += this.gravity / 30;
    this.posY += this.velocity / 30;
  }
  draw() {
    this.p.ellipse(this.posX, this.posY, 50, 50);
  }
}

export class StopWatch {
  /**
   * {@link StopWatch} のコンストラクタ。
   * @param {p5Instance} p p5インスタンス。
   */
  constructor(p, x, y, s, fps = 30) {
    this.p = p;
    this.posX = x;
    this.posY = y;
    this.size = s;
    this.fps = fps;
    this.time = 0;
  }

  update() {
    this.time += 1 / this.fps;
  }

  /**
   * ストップウォッチを描画する。
   */
  draw() {
    this.p.strokeWeight(3);
    this.p.push();

    // 時計の位置
    this.p.translate(this.posX / 2, this.posY / 2);

    // 時計の外枠
    this.p.fill(94, 147, 187);
    this.p.ellipse(0, 0, this.size + 13, this.size + 13);
    this.p.rect(-4, -this.size / 2 - 16, 8, 10);
    this.p.rect(-10, -this.size / 2 - 24, 20, 10);
    this.p.fill(255);
    this.p.ellipse(0, 0, this.size, this.size);

    // 時計の針
    this.p.rotate((2 * this.p.PI * this.time) / 60);
    this.p.line(0, 0, 0, -(0.85 * this.size) / 2);
    this.p.fill(94, 147, 187);
    this.p.triangle(0, -(0.85 * this.size) / 2, -5, 0, 5, 0);
    this.p.triangle(0, 6, -4.5, 0, 4.5, 0);
    this.p.ellipse(0, 0, 8, 8);

    this.p.pop();
  }
}
