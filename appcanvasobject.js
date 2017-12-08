function PB(){

    this.pageCount = 0;
    this.fileURL = new Array();
    this.dataURL = new Array();

    this.addPage = function(fileURL,dataURL){
        //console.log(fileURL);
        //console.log(dataURL);
        this.fileURL[this.pageCount] = fileURL;
        this.dataURL[this.pageCount] = dataURL;
        this.pageCount++;
    };
    this.getAllPages = function () {
        for (i = 0; i < this.fileURL.length; i++) {
            //text += "<li>" + fileURL[i] + "</li>";
            console.log(fileURL[i]);
        }
        //return text;

    };
    this.getPage = function (pageNum) {
        console.log(this.fileURL[pageNum]);
        //return this.fileURL[pageNum];
    };

    this.updateDataURL = function (dataURL,pageNum) {
        this.dataURL[pageNum] = dataURL;
    };

    this.setName = function (PBname) {
        this.PBname = PBname;
    }
    this.getPageCount = function () {
        return this.pageCount;
    }


}