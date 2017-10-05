function listArray() {
    var list = new Array();
    document.getElementsByClassName("s3");
    for(i=0;i<document.getElementsByClassName("s3").length;i++){
        list[i] = document.getElementsByClassName("s3").item(i).textContent;
        //console.log(list[i]);
        getArrayElement(list[document.getElementById("input1").value]);
    }


}
function getArrayElement(index) {
    //console.log("in function");
    document.getElementById("arrayIndex").innerHTML = index;
    
}
function changeColor(){
    var x = document.getElementsByClassName("ul1");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "inherit";
    }
    var x = document.getElementsByClassName("s1");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "inherit";
    }
    var x = document.getElementsByClassName("s2");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "inherit";
    }
    var x = document.getElementsByClassName("s3");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "inherit";
    }
    var x = document.getElementsByClassName("page");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "gray";
    }

    //document.getElementsByClassName("ul1").style.color = 'white';
}
function reset(){
    //var x = document.getElementsByClassName("ul1");
    //var i;
    //for (i = 0; i < x.length; i++) {
    //    x[i].style.backgroundColor = "white";
    //    x[i].reset();
    //}
    //document.getElementsByClassName("ul1").reset();
    location.reload(true);


}