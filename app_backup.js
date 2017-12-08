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

var PBName;
var imgNum = 0;
var num = 0;
var canvas, ctx, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false;

var x = "yellow",
    y = 2;
// Create a new PB object
function init(){
    newPB = new PB();
}
function createCanvas(){

    var canvas = document.createElement("CANVAS");
    canvas.id = "can"+num;
    canvas.width = 800;
    canvas.height = 1000;
    document.getElementById("canvases").appendChild(canvas);
}





function insert(id,imageURL){

    createCanvas();

    canvas = document.getElementById('can' + num);
    ctx = canvas.getContext("2d");
    // Set canvas size based on window size.
    canvas.width = document.documentElement.clientWidth - 20;
    canvas.height = canvas.width * 1.3; //assumes 8.5 x 11 sheet of paper
    w = canvas.width;
    h = canvas.height;

    // Get image
    //var img = new Image();
    //console.log("imageURL is "+imageURL);
    //if(id === 0){
    //   img.src = imageURL;
    //}else{
    var img = document.getElementById(id);
    //}


    //img.width = 640;
    //img.height = 199;
    //console.log("img2 is " +img2.src);
    //var img = document.getElementById('canvasimg');
    var hRatio = canvas.width / img.width    ;
    var vRatio = canvas.height / img.height  ;
    var ratio  = Math.max ( hRatio, vRatio );
    //img.addEventListener("load", function() {
    // execute drawImage statements here
    ctx.drawImage(img, 0, 0, img.width,    img.height,     // source image
        0, 0, img.width*ratio, img.height*ratio); // destination image/size
    //}, false);
    //img.src = imageURL;
    //console.log("image is " + img.src);
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

    // Add the image to the PB object
    var dataURL = canvas.toDataURL();
    newPB.addPage(img.src,dataURL);
    //console.log(newPB.getPageCount());
    num++;
}

function createImg(src) {
    var image = document.createElement("IMG");
    image.id = "image"+imgNum;
    image.className = "imagePreview";
    image.onload = function(){insert(this.id,this.src);};
    image.src = src;
    document.getElementById("preview").appendChild(image);
    //console.log("createImg image is "+image.src);
    //insert("image"+imgNum,image.src);
    imgNum++;
}


var loadFile = function(event) {

    var fileupload = document.getElementById("myFile");
    //var preview = document.getElementById('image'+imgNum);
    //canvasimg.src = URL.createObjectURL(event.target.files[0]);
    var fileNum = num+2;
    document.getElementById("myFile2").value = 'Get Page #' + fileNum;
    createImg(URL.createObjectURL(event.target.files[0]));
    //createImg();
    //imgNum++;
    //insert();
    //createCanvas();
};




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
    if (x != "white") {
        ctx.globalAlpha=.2;
    }
}

function erase() {
    //Clear the screen but don't remove the pages from the PB object
    var canvasToRemove = document.getElementsByTagName("canvas");
    if (canvasToRemove.length > 0) {
        ctx.clearRect(0, 0, w, h);
        var parentNode = document.getElementById("body");
        var canvasCount = canvasToRemove.length;
        for (var i = canvasCount - 1; i >= 0; i--) {
            parentNode.removeChild(canvasToRemove[i]);
        }
    }
}

function saveImage() {
    var canvasToSave = document.getElementsByTagName("canvas");
    document.getElementById("canvasimg").style.border = "2px solid";
    //document.getElementsByTagName("canvas").style.border = "2px solid";
    //var dataURL = canvas.toDataURL();
    //document.getElementById("canvasimg1").src = dataURL;
    //document.getElementById("canvasimg1").style.display = "inline";
    //console.log(canvasToSave[0].toDataURL());
    for (i=0;i<canvasToSave.length;i++){
        //canvasToSave.to
        var savedImage = document.createElement("IMG");
        savedImage.id = "saved"+i;
        savedImage.className = "savedImage";
        //var dataURL = canvasToSave[i].toDataURL();
        savedImage.src = canvasToSave[i].toDataURL();
        document.getElementById("saveSpace").appendChild(savedImage);
        //document.getElementById("saved"+i).src = dataURL;
        //document.getElementById("saved"+i).style.display = "inline";
        //document.getElementById("saved"+i).style.visibility = "visible";
        //document.getElementById("saved"+i).style.position = "absolute";
        //window.open(document.getElementById("canvasimg").src);
        //window.open('document.png', '_blank');
    }
    window.location.hash = "saveSpace";
}

function saveLocal(){
    //newPB.getPage(0);
    //check to see if there is a Vehicle name before storing
    if(document.getElementById('PBName').value === ''){
        document.getElementById('errormess').innerHTML = "Please enter a Name to store it.";
    }else{
        document.getElementById('errormess').innerHTML = "";
        //newPB.updateDataURL(canvas.toDataURL());
        newPBJSON = JSON.stringify(newPB);
        localStorage.setItem(document.getElementById('PBName').value, newPBJSON);
    }
}

//function getDataURL(source,dest,callback){
//    document.getElementById('canvasimg').src = source;
//dest = source;
//callback();
//        console.log("in getdataurl");
//    callback();

//}

//function waitForElement(elementId, callBack){
//    window.setTimeout(function(){
//        var element = document.getElementById(elementId);
//        if(element){
//            callBack(elementId, element);
//        }else{
//            waitForElement(elementId, callBack);
//        }
//    },500)
//}

function getLocal(PBName) {
    //check to see if the item is in storage first
    var myPB = localStorage.getItem(document.getElementById('PBName').value);
    if (document.getElementById('PBName').value === '') {
        document.getElementById('errormess').innerHTML = "Please enter a valid Name to retieve it.";
    } else if (myPB === null) {
        document.getElementById('errormess').innerHTML = "Sorry, '" + document.getElementById('PBName').value + "'" + " is not a valid Name.";
    } else {
        document.getElementById('errormess').innerHTML = '';
        var myPBObj = JSON.parse(myPB);

        var PBCount = myPBObj.pageCount;
        //console.log(PBCount);

        erase();
        init();
        for (i=0; i<PBCount;i++) {
            //var canvasImage = document.getElementById('canvasimg');
            var localStorageImage = myPBObj.dataURL[i];
            //document.getElementById('canvasimg').src = localStorageImage;
            //console.log("round "+i);
            //insert(i,localStorageImage);
            createImg(localStorageImage);
            //waitForElement("can"+i,function(){
            //if(console.log(document.getElementById("can"+i)) !== null){
            //    i++;
            //    console.log("done");
            //}

            //i++;
            //});

            //getDataURL(localStorageImage,canvasImage.src,function(){
            //   if(console.log(document.getElementById("can"+i)) !== null){
            //       console.log("it's not there");
            //getDataURL(localStorageImage,canvasImage.src,function(){
            //    console.log("second one");
            //});
            //console.log(document.getElementById("can"+i).id);
            //  }else{

            //      console.log("not same");
            //  }
            //});
            //canvasImage.src = localStorageImage;
            //console.log("number  " + i);
            //    console.log("its the same");
            //    console.log("number is " + i);
            //canvasImage.src = localStorageImage;
        }
    }
}

function findxy(res, e) {
    if (res == 'down') {
        prevX = currX;
        prevY = currY;
        //currX = e.clientX - canvas.offsetLeft;
        //currY = e.clientY - canvas.offsetTop;
        currX = e.pageX - canvas.offsetLeft;
        currY = e.pageY - canvas.offsetTop;

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
            //currX = e.clientX - canvas.offsetLeft;
            //currY = e.clientY - canvas.offsetTop;
            currX = e.pageX - canvas.offsetLeft;
            currY = e.pageY - canvas.offsetTop;
            draw();
        }
    }
}

