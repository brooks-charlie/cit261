function changeStylesheet(num){
    document.getElementsByClassName("styles")[0].getAttributeNode("href").value = 'css' + num + '.css';
    console.log(document.getElementsByClassName("styles")[0].getAttributeNode("href").value);
}