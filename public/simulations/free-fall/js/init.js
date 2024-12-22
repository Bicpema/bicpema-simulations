export let moveIs = false;
export let fps = 30;

/**
 * シミュレーションそのものの設定を行う関数
 * @param {p5instance} p
 * @param {font} font
 */
export function settingInit(p, font) {
  p.frameRate(fps);
  p.textAlign(p.CENTER, p.CENTER);
  p.textFont(font);
  p.textSize(16);
}

//   let graph, graphCanvas;

/**
 * 仮想DOMを読み込むための関数
 * グラフを利用する際には、graph,graphCanvasのコメントアウトをはずしてください。
 */
export function elementSelectInit(p) {
  //   graph = select("#graph");
  //   graphCanvas = select("#graphCanvas");
  const MOVE_BUTTTON = p
    .createButton("スタート")
    .id("moveButton")
    .class("btn btn-primary")
    .mousePressed(moveButtonFunction);

  const RESET_BUTTON = p
    .createButton("リセット")
    .id("resetButton")
    .class("btn btn-danger")
    .mousePressed(resetButtonFunction);
}

export function moveButtonFunction() {
  if (moveIs) {
    moveIs = false;
    this.html("スタート");
  } else {
    moveIs = true;
    this.html("ストップ");
  }
}

export function resetButtonFunction() {
  moveIs = false;
  valueInit();
}

/**
 * 仮想DOMの場所や実行関数を設定するための関数
 */
export function elementPositionInit(p) {
  const MOVE_BUTTTON = p.select("#moveButton");
}

/**
 * 初期値を設定するための関数
 */
export function valueInit() {}
