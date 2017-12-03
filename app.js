// window.onload = function() {
//    var canvas = document.getElementById("canvas");
//    var ctx = canvas.getContext("2d");
//    var img = document.getElementById("pb");
//ctx.drawImage(img, 1, 1);
//    var hRatio = canvas.width / img.width    ;
//    var vRatio = canvas.height / img.height  ;
//    var ratio  = Math.max ( hRatio, vRatio );
//   ctx.drawImage(img, 0, 0, img.width,    img.height,     // source image
//       0, 0, img.width*ratio, img.height*ratio); // destination image/size
//};



var canvas, ctx, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false;

var x = "yellow",
    y = 2;

function init() {
    canvas = document.getElementById('can');
    ctx = canvas.getContext("2d");

    // Set canvas size based on window size.
    canvas.width = document.documentElement.clientWidth - 20;
    canvas.height = canvas.width * 1.3; //assumes 8.5 x 11 sheet of paper
    w = canvas.width;
    h = canvas.height;

    // Get image
    var img = document.getElementById("pb");
    var hRatio = canvas.width / img.width    ;
    var vRatio = canvas.height / img.height  ;
    var ratio  = Math.max ( hRatio, vRatio );
    ctx.drawImage(img, 0, 0, img.width,    img.height,     // source image
        0, 0, img.width*ratio, img.height*ratio); // destination image/size

    canvas.addEventListener("mousemove", function (e) {
        findxy('move', e)
    }, false);
    canvas.addEventListener("mousedown", function (e) {
        findxy('down', e)
    }, false);
    canvas.addEventListener("mouseup", function (e) {
        findxy('up', e)
    }, false);
    canvas.addEventListener("mouseout", function (e) {
        findxy('out', e)
    }, false);
}

function color(obj) {
    x = obj.id;
    if (x == "white") y = 14;
    else y = 2;
}

function draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
}

function erase() {
    ctx.clearRect(0, 0, w, h);
    document.getElementById("canvasimg").style.display = "none";
}

function save() {
    document.getElementById("canvasimg").style.border = "2px solid";
    var dataURL = canvas.toDataURL();
    document.getElementById("canvasimg").src = dataURL;
    document.getElementById("canvasimg").style.display = "inline";
}

function findxy(res, e) {
    if (res == 'down') {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;

        flag = true;
        dot_flag = true;
        if (dot_flag) {
            ctx.beginPath();
            ctx.fillStyle = x;
            ctx.fillRect(currX, currY, 2, 2);
            ctx.closePath();
            dot_flag = false;
        }
    }
    if (res == 'up' || res == "out") {
        flag = false;
    }
    if (res == 'move') {
        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
            draw();
        }
    }
}