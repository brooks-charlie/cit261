function Vehicle(type, color, doors, wheels) {

    this.type = type;
    this.color = color;
    this.doors = doors;
    this.wheels = wheels;

    this.display = function(){
        document.getElementById("vehicletop").style.borderBottomColor = this.color;
        document.getElementById("vehiclebottom").style.backgroundColor = this.color;


    if (this.type == "truck") {
        document.getElementById("vehiclebottom").style.borderRadius = "0";
        document.getElementById("vehicletop").style.borderLeftWidth = '0';
        document.getElementById("vehicletop").style.marginLeft = '80px';
    } else {
        document.getElementById("vehiclebottom").style.borderRadius = "20px";
        document.getElementById("vehicletop").style.borderLeftWidth = '20px';
        document.getElementById("vehicletop").style.marginLeft = '50px';
    }
    if (this.wheels != "") { // Don't set create wheels if the wheel size wasn't given
        document.getElementById("vehiclefrontwheel").style.backgroundColor = 'black';
        document.getElementById("vehiclerearwheel").style.backgroundColor = 'black';
        document.getElementById("vehiclefrontrim").style.backgroundColor = 'silver';
        document.getElementById("vehiclerearrim").style.backgroundColor = 'silver';

        switch (this.wheels) { // Change wheel position based on size chosen
            case '15':
                document.getElementById("vehiclefrontwheel").style.width = "50px";
                document.getElementById("vehiclefrontwheel").style.height = "50px";
                document.getElementById("vehiclefrontwheel").style.top = "-20px";
                document.getElementById("vehiclerearwheel").style.width = "50px";
                document.getElementById("vehiclerearwheel").style.height = "50px";
                document.getElementById("vehiclerearwheel").style.top = "-20px";
                document.getElementById("vehiclefrontrim").style.left = "72px";
                document.getElementById("vehiclefrontrim").style.top = "-29px";
                document.getElementById("vehiclerearrim").style.left = "-98px";
                document.getElementById("vehiclerearrim").style.top = "-29px";
                break;
            case '16':
                document.getElementById("vehiclefrontwheel").style.width = "52px";
                document.getElementById("vehiclefrontwheel").style.height = "52px";
                document.getElementById("vehiclefrontwheel").style.top = "-20px";
                document.getElementById("vehiclerearwheel").style.width = "52px";
                document.getElementById("vehiclerearwheel").style.height = "52px";
                document.getElementById("vehiclerearwheel").style.top = "-20px";
                document.getElementById("vehiclefrontrim").style.left = "71px";
                document.getElementById("vehiclefrontrim").style.top = "-30px";
                document.getElementById("vehiclerearrim").style.left = "-101px";
                document.getElementById("vehiclerearrim").style.top = "-30px";
                break;
            case '17':
                document.getElementById("vehiclefrontwheel").style.width = "55px";
                document.getElementById("vehiclefrontwheel").style.height = "55px";
                document.getElementById("vehiclefrontwheel").style.top = "-25px";
                document.getElementById("vehiclerearwheel").style.width = "55px";
                document.getElementById("vehiclerearwheel").style.height = "55px";
                document.getElementById("vehiclerearwheel").style.top = "-25px";
                document.getElementById("vehiclefrontrim").style.left = "70px";
                document.getElementById("vehiclefrontrim").style.top = "-36px";
                document.getElementById("vehiclerearrim").style.left = "-105px";
                document.getElementById("vehiclerearrim").style.top = "-36px";
                break;
            case '18':
                document.getElementById("vehiclefrontwheel").style.width = "57px";
                document.getElementById("vehiclefrontwheel").style.height = "57px";
                document.getElementById("vehiclefrontwheel").style.top = "-30px";
                document.getElementById("vehiclerearwheel").style.width = "57px";
                document.getElementById("vehiclerearwheel").style.height = "57px";
                document.getElementById("vehiclerearwheel").style.top = "-30px";
                document.getElementById("vehiclefrontrim").style.left = "69px";
                document.getElementById("vehiclefrontrim").style.top = "-42px";
                document.getElementById("vehiclerearrim").style.left = "-108px";
                document.getElementById("vehiclerearrim").style.top = "-42px";
                break;
            case '19':
                document.getElementById("vehiclefrontwheel").style.width = "60px";
                document.getElementById("vehiclefrontwheel").style.height = "60px";
                document.getElementById("vehiclefrontwheel").style.top = "-30px";
                document.getElementById("vehiclerearwheel").style.width = "60px";
                document.getElementById("vehiclerearwheel").style.height = "60px";
                document.getElementById("vehiclerearwheel").style.top = "-30px";
                document.getElementById("vehiclefrontrim").style.left = "68px";
                document.getElementById("vehiclefrontrim").style.top = "-44px";
                document.getElementById("vehiclerearrim").style.left = "-112px";
                document.getElementById("vehiclerearrim").style.top = "-44px";
                break;
        }
    }
}

this.go = function(){

    if (document.getElementById('vehicle').style.animationPlayState != "running") {
        document.getElementById('vehicle').style.animationPlayState = "running";
        document.getElementById('drivebutton').innerHTML = "Stop Vehicle";

        //var stopText = document.createTextNode("Stopp Vehicles");
        //var buttonText = document.getElementById('drivediv').childNodes[0].innerHTML;
        //document.getElementById('drivebutton').replaceChild(buttonText, stopText);
    } else {
        document.getElementById('vehicle').style.animationPlayState = "paused";
        document.getElementById('drivebutton').innerHTML = "Drive Vehicle";

    }
}



}
