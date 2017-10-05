function myMove() {
    var elem = document.getElementById("animate");
    var pos = 350;
    var id = setInterval(frame, 5);
    //var right = 1;
    //if (pos == 0) {
        function frame() {
            if (pos == 0) {
                //pos++;
                //elem.style.top = pos + 'px';
                //elem.style.left = pos + 'px';
                //clearInterval(id);
                pos++;
                elem.style.right = pos + 'px';
                //}
                //setInterval(frame, 5);
                //console.log("pos is: " + pos);
                //right = 0;
                //document.getElementById("animate").style.right = right;
                //}
            } else {
                console.log("pos IS: " + pos);
                //if (right == 1) {
                    pos--;
                    console.log("RIGHT IS 0");
                    //elem.style.top = pos + 'px';
                    elem.style.right = pos + 'px';
                    //}
                //}
            }
            //var id = setInterval(goBack, 5);
            //function goBack(){
            //pos--;
            //elem.style.right = pos + 'px';
        //}
    }
}
function keyframeMove(element){
    if (document.getElementById(element).style.animationPlayState != "running") {
        console.log(element + " is running");
        document.getElementById(element).style.animationPlayState = "running";
    } else {
        console.log("paused");
        document.getElementById(element).style.animationPlayState = "paused";
    }
}
function resize(element) {
    //console.log(document.getElementById(element).style.width.value);
    //if(document.getElementById(element).style.width != "321px") {
        document.getElementById(element).style.width = "321px";
    //}else{
      //  document.getElementById(element).style.width = "275px";
        //}
}

function origSize(element){
    document.getElementById(element).style.width = "275px";
}