///全画面表示
function fullScreen() {
    createCanvas(windowWidth, 9 * windowHeight / 10, WEBGL)
}

// 外部ファイルの読み込み
function preload() {
    dataTable = loadTable("./data/sample-data.csv","csv","header")
}

// DOM要素の生成
function elCreate() {

}

// DOM要素の設定
function elInit() {

}


// 初期値やシミュレーションの設定
placeArr = []
xArr = []
yArr = []
shallowArr = []
deepArr = []
kindsArr = []
function initValue() {
    camera(800, 500, 800, 0, 0, 0, 0, 1, 0)
    placeArr = dataTable.getColumn("place-name")
    xArr = dataTable.getColumn("x-point")
    yArr = dataTable.getColumn("y-point")
    shallowArr = dataTable.getColumn("shallow-point")
    deepArr = dataTable.getColumn("deep-point")
    kindsArr = dataTable.getColumn("kinds")
}

// setup関数
function setup() {
    fullScreen()
    elCreate()
    elInit()
    initValue()
}

function backgroundSetting() {
    background(255)
    strokeWeight(3)
    // x軸
    stroke(255, 0, 0)
    line(0, 0, 0, 500, 0, 0)
    // y軸
    stroke(0, 255, 0)
    line(0, 0, 0, 0, 500, 0)
    // z軸
    stroke(0, 0, 255)
    line(0, 0, 0, 0, 0, 500)
    // 格子線
    strokeWeight(1)
    stroke(0)
    for (let x = 50; x <= 500; x += 50) {
        line(x, 0, 0, x, 500, 0)
        line(x, 0, 0, x, 0, 500)
    }
    for (let y = 50; y <= 500; y += 50) {
        line(0, y, 0, 500, y, 0)
        line(0, y, 0, 0, y, 500)
    }
    for (let z = 50; z <= 500; z += 50) {
        line(0, 0, z, 500, 0, z)
        line(0, 0, z, 0, 500, z)
    }
}

function createPlane1(x1,z1,y1,x2,z2,y2,x3,z3,y3){
    beginShape()
    vertex(x1,y1,z1)
    vertex(x2,y2,z2)
    vertex(x3,y3,z3)
    endShape(CLOSE)
}

function createPlane2(x1,z1,y1,x2,z2,y2,x3,z3,y3,x4,z4,y4){
    beginShape()
    vertex(x1,y1,z1)
    vertex(x2,y2,z2)
    vertex(x3,y3,z3)
    vertex(x4,y4,z4)
    endShape(CLOSE)
}

// draw関数
function draw() {
    orbitControl(2)
    backgroundSetting()
    for(let i = 0; i < placeArr.length; i++){
        let x = xArr[i]
        let y = yArr[i]
        let z = shallowArr[i]
        let zLength = deepArr[i]-shallowArr[i]
        let kind = kindsArr[i]
        if(kind == "泥岩")fill(100,150)
        if(kind == "砂岩")fill(116,80,48,150)
        push()
        translate(x,int(z)+zLength/2,y)
        box(50,zLength,50)
        pop()
    }
    fill(100,50)
    //泥岩のサンプル
    createPlane1(xArr[0],yArr[0],shallowArr[0],xArr[2],yArr[2],shallowArr[2],xArr[4],yArr[4],shallowArr[4])
    createPlane1(xArr[0],yArr[0],deepArr[0],xArr[2],yArr[2],deepArr[2],xArr[4],yArr[4],deepArr[4])
    createPlane2(xArr[0],yArr[0],shallowArr[0],xArr[2],yArr[2],shallowArr[2],xArr[2],yArr[2],deepArr[2],xArr[0],yArr[0],deepArr[0])
    createPlane2(xArr[0],yArr[0],shallowArr[0],xArr[4],yArr[4],shallowArr[4],xArr[4],yArr[4],deepArr[4],xArr[0],yArr[0],deepArr[0])
    createPlane2(xArr[2],yArr[2],shallowArr[2],xArr[4],yArr[4],shallowArr[4],xArr[4],yArr[4],deepArr[4],xArr[2],yArr[2],deepArr[2])

    fill(116,80,48,50)
    //泥岩のサンプル
    createPlane1(xArr[1],yArr[1],shallowArr[1],xArr[3],yArr[3],shallowArr[3],xArr[5],yArr[5],shallowArr[5])
    createPlane1(xArr[1],yArr[1],deepArr[1],xArr[3],yArr[3],deepArr[3],xArr[5],yArr[5],deepArr[5])
    createPlane2(xArr[1],yArr[1],shallowArr[1],xArr[3],yArr[3],shallowArr[3],xArr[3],yArr[3],deepArr[3],xArr[1],yArr[1],deepArr[1])
    createPlane2(xArr[1],yArr[1],shallowArr[1],xArr[5],yArr[5],shallowArr[5],xArr[5],yArr[5],deepArr[5],xArr[1],yArr[1],deepArr[1])
    createPlane2(xArr[3],yArr[3],shallowArr[3],xArr[5],yArr[5],shallowArr[5],xArr[5],yArr[5],deepArr[5],xArr[3],yArr[3],deepArr[3])
}

// windowがリサイズされたときの処理
function windowResized() {
    fullScreen()
    elInit()
    initValue()
}

// class Sample{

// }