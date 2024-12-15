import { CanvasController } from "./CanvasController.js";

/**
 * BicpemaCanvasController3dクラス
 *
 * Bicpemaの動的な3dキャンバスサイズをコントロールする。
 */
export class CanvasController3d extends CanvasController {
  /**
   * @constructor
   * @param {p5instance} p p5.jsのインスタンス
   * @param {boolean} f 回転時に比率を固定化するか
   * @param {number} w_r 幅の比率（0.0~1.0）
   * @param {number} h_r 高さの比率（0.0~1.0）
   */
  constructor(p, f = true, w_r = 1.0, h_r = 1.0) {
    super(p, f, w_r, h_r);
    this.p = p;
    this.fixed = f;
    this.widthRatio = w_r;
    this.heightRatio = h_r;
  }

  /**
   * HTML要素で生成している#p5Canvasと#navBarを元に3dcanvasを生成します。
   */
  fullScreen() {
    const windowSize = this.calculateWindowSize();
    const w = windowSize[0];
    const h = windowSize[1];
    const canvas = this.p.createCanvas(w * this.widthRatio, h * this.heightRatio, this.p.WEBGL);
    canvas.parent(this.P5_CANVAS).class("rounded border border-1");
  }
}
