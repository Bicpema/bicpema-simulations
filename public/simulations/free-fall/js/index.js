// index.jsはメインのメソッドを呼び出すためのファイルです。

/////////////////////////// 以上の記述は不必要であれば削除してください。/////////////////////////////////

import p5 from "https://cdn.jsdelivr.net/npm/p5@1.11.0/+esm";
import { elementPositionInit, elementSelectInit, settingInit, valueInit, moveIs, fps } from "./init.js";
import { CanvasController } from "../../../assets/js/bicpema/canvas/CanvasController.js";
import { Ball, StopWatch } from "./class.js";
const sketch = (p) => {
  let font;
  p.preload = function () {
    font = p.loadFont("/assets/fonts/ZenMaruGothic-Regular.ttf");
  };

  let canvasController;
  let ball, stopWatch;
  let GRAVITY = 9.8;
  p.setup = function () {
    canvasController = new CanvasController(p);
    canvasController.fullScreen();
    settingInit(p, font);
    elementSelectInit(p);
    elementPositionInit(p);
    valueInit();
    ball = new Ball(p, 200, 50, GRAVITY);
    stopWatch = new StopWatch(p, 125, 150, 75, fps);
  };

  p.draw = function () {
    p.scale(p.width / 1000);
    p.background(255);
    // drawGraph();

    ball.draw();
    stopWatch.draw();
    if (moveIs) {
      ball.update();
      stopWatch.update();
    }
  };

  p.windowResized = function () {
    canvasController.resizeScreen();
    elementPositionInit(p);
  };
};

// スケッチのインスタンスを生成
new p5(sketch);
