
var PBName;
var imgNum = 0;
var num = 0;

var flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false;

var x = "yellow",
    y = 15;

// Create a new PB object

function init(){
    newPB = new PB();
}

function createCanvas(id){
    id = document.createElement("CANVAS");
    id.id = "can"+num;
    document.getElementById("canvases").appendChild(id);
}

function insert(canvas,ctx,imageURL){

    createCanvas(canvas);

    canvas = document.getElementById('can' + num);
    canvas.ontouchmove = function(e){ e.preventDefault(); };
    ctx = canvas.getContext("2d");
    // Set canvas size based on window size.
    canvas.width = document.documentElement.clientWidth - 160;

    w = canvas.width;
    h = canvas.height;

    // Get image
    if(imageURL !== null) {
        var img = document.getElementById("image" + num);
        var iRatio = img.height / img.width;
        if(iRatio < 1){ // image is landscape
            canvas.height = iRatio * canvas.width;
            h = canvas.height;


        }else{ // image is portrait
            var ipRatio = img.width / img.height;
            canvas.height = ipRatio * canvas.width;
            h = canvas.height;
        }

        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);

        // execute drawImage statements here
        ctx.drawImage(img, 0, 0, img.width, img.height,     // source image
            0, 0, img.width * ratio, img.height * ratio); // destination image/size
    }

    // Mouse events
    canvas.addEventListener("mousemove", function (e) {
        findxy(canvas,ctx,'move', e)
    }, false);
    canvas.addEventListener("mousedown", function (e) {
        findxy(canvas,ctx,'down', e)
    }, false);
    canvas.addEventListener("mouseup", function (e) {
        findxy(canvas,ctx,'up', e)
    }, false);
    canvas.addEventListener("mouseout", function (e) {
        findxy(canvas,ctx,'out', e)
    }, false);

    // Touch screen events
    canvas.addEventListener("touchmove", function (e) {
        findxy(canvas,ctx,'move', e)
    }, false);
    canvas.addEventListener("touchstart", function (e) {
        findxy(canvas,ctx,'down', e)
    }, false);
    canvas.addEventListener("touchend", function (e) {
        findxy(canvas,ctx,'up', e)
    }, false);
    canvas.addEventListener("touchcancel", function (e) {
        findxy(canvas,ctx,'out', e)
    }, false);

    // Add the image to the PB object
    var dataURL = canvas.toDataURL();
    newPB.addPage(img.src,dataURL);
    num++;
}

function createImg(src) {
    var image = document.createElement("IMG");
    image.id = "image"+imgNum;
    image.className = "imagePreview";
    image.onload = function(){insert(this.id,this.alt,this.src);};
    image.src = src;
    image.alt = num;
    document.getElementById("preview").appendChild(image);
    imgNum++;
}


var loadFile = function(event) {
    var fileNum = num+2;
    document.getElementById("myFile2").innerHTML = 'Insert Page #' + fileNum;
    createImg(URL.createObjectURL(event.target.files[0]));
};




function color(obj) {

    var palatte = document.getElementsByClassName("colors");
    for(i=0; i<palatte.length;i++){
        palatte[i].style.width = "15%";
        palatte[i].style.height = "100px";
        palatte[i].style.marginBottom = "50px";
        palatte[i].style.marginTop = "0px";
    }
    document.getElementById(obj.id).style.marginTop = "0px";
    document.getElementById(obj.id).style.marginBottom = "0px";
    document.getElementById(obj.id).style.width = "19%";
    document.getElementById(obj.id).style.height = "150px";
    x = obj.id;
}

function draw(ctx) {
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
    //ctx.clearRect(0, 0, w, h);
    var parentNode = document.getElementById("canvases");
    var canvasCount = canvasToRemove.length;
    for (var i = canvasCount - 1; i >= 0; i--) {
        parentNode.removeChild(canvasToRemove[i]);
    }
}
}

function saveImage() {
    var canvasToSave = document.getElementsByTagName("canvas");
    document.getElementById("canvasimg").style.border = "2px solid";
    for (i=0;i<canvasToSave.length;i++){
        //canvasToSave.to
        var savedImage = document.createElement("IMG");
        savedImage.id = "saved"+i;
        savedImage.className = "savedImage";
        savedImage.src = canvasToSave[i].toDataURL();
        document.getElementById("saveSpace").appendChild(savedImage);
    }

    document.getElementById("savemessage").innerHTML = "Scroll Down to See Images";
    document.getElementById("savemessage").setAttribute("class","fade");
    document.getElementById("savemessage").addEventListener("webkitAnimationStart", function(){
        document.getElementById("savemessage").setAttribute("class","fade");
    });
    document.getElementById("savemessage").addEventListener("animationstart", function(){
        document.getElementById("savemessage").setAttribute("class","fade");
    });
    document.getElementById("savemessage").addEventListener("webkitAnimationEnd", function(){
        document.getElementById("savemessage").className = "none";
    });
    document.getElementById("savemessage").addEventListener("animationend", function(){
        document.getElementById("savemessage").className = "none";
    });
}



function saveLocal(){

    //check to see if there is a Vehicle name before storing
    if(document.getElementById('PBName').value === ''){
        document.getElementById('errormess').innerHTML = "Please enter a Name to store it.";
    }else{
        document.getElementById('errormess').innerHTML = "";

        newPBJSON = JSON.stringify(newPB);
        localStorage.setItem(document.getElementById('PBName').value, newPBJSON);
        document.getElementById("savemessage").innerHTML = "Saved Successfully";
        document.getElementById("save").style.visibility = "hidden";
        document.getElementById("name").style.visibility = "hidden";
        document.getElementById("savemessage").setAttribute("class","fade");
        document.getElementById("savemessage").addEventListener("webkitAnimationStart", function(){
            document.getElementById("savemessage").setAttribute("class","fade");
        });
        document.getElementById("savemessage").addEventListener("animationstart", function(){
            document.getElementById("savemessage").setAttribute("class","fade");
        });
        document.getElementById("savemessage").addEventListener("webkitAnimationEnd", function(){
            document.getElementById("savemessage").className = "none";
        });
        document.getElementById("savemessage").addEventListener("animationend", function(){
            document.getElementById("savemessage").className = "none";
        });
    }



}


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
        erase();
        init();
        for (i=0; i<PBCount;i++) {
            //var canvasImage = document.getElementById('canvasimg');
            var localStorageImage = myPBObj.dataURL[i];
            createImg(localStorageImage);
        }
    }
    document.getElementById("get").style.visibility = "hidden";
    document.getElementById("name").style.visibility = "hidden";
}

function showName(action) {
    //console.log(document.getElementById("name").style.visibility);
    document.getElementById('errormess').innerHTML = "";
    if (document.getElementById(action).style.visibility === "visible") {
        document.getElementById("name").style.visibility = "hidden";
        document.getElementById(action).style.visibility = "hidden";
        document.getElementById("save").style.visibility = "hidden";
        document.getElementById("get").style.visibility = "hidden";
        if(action === "save"){
            document.getElementById("get").style.visibility = "hidden";
        }else{
            document.getElementById("save").style.visibility = "hidden";
        }
    }else {
        document.getElementById("name").style.visibility = "visible";
        document.getElementById(action).style.visibility = "visible";
        if(action === "save"){
            document.getElementById("get").style.visibility = "hidden";
        }else{
            document.getElementById("save").style.visibility = "hidden";
        }
    }

}

function findxy(canvas,ctx,res, e) {
    if (res == 'down') {
        prevX = currX;
        prevY = currY;
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
            currX = e.pageX - canvas.offsetLeft;
            currY = e.pageY - canvas.offsetTop;
            draw(ctx);
        }
    }
}

function enableBut() {
    if(document.getElementById("PBName").value === "") {

    }else{
        document.getElementById("PBName").style.opacity = 1;

        document.getElementById("getLocal").style.cursor = "auto";
        document.getElementById("saveLocal").style.cursor = "auto";
    }


}















