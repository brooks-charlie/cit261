/**
 * Created by charliebrooks on 2/17/17.
 */

function getSubTotal() {
    //console.log("entered getSubTotal function");
    document.getElementsByClassName('qtyinput');
    var getTotalQty = document.getElementsByClassName('qtyinput');
    //console.log("getTotalQty is: " + getTotalQty);
    var itemPrice = document.getElementsByClassName('itemPrice');
    var subTotal = 0;
    for (var i = 0; i<getTotalQty.length; i++){
        var tempQty = parseInt(getTotalQty[i].value);
        var tempPrice = parseFloat(itemPrice[i].innerHTML.match(/\d*\.\d\d/));
        subTotal = tempPrice * tempQty + subTotal;
    }
    //console.log("subTotal is: " + subTotal);
    //console.log(document.getElementById('totalamount').innerHTML = '$' + subTotal.toFixed(2));
    //console.log(document.getElementById("totalamount").value);
    //var st = document.getElementById("totalamount").innerHTML;
    //console.log("subtotal is: " + st);
    document.getElementById("totalamount").innerHTML = '$' + subTotal.toFixed(2);
}

function showSlogan(){
    document.getElementById('topbar').style.visibility = 'visible';
    document.getElementById('logo').style.visibility = 'hidden';

}

function copy(checkbox){
    if (checkbox.checked)
    {
        document.getElementById("shipfirstname").value = document.getElementById("firstname").value;
        document.getElementById("shiplastname").value = document.getElementById("lastname").value;
        document.getElementById("shipaddress1").value = document.getElementById("address1").value;
        document.getElementById("shipaddress2").value = document.getElementById("address2").value;
        document.getElementById("shipCity").value = document.getElementById("City").value;
        document.getElementById("shipState").value = document.getElementById("State").value;
        document.getElementById("shipZip").value = document.getElementById("Zip").value;
        document.getElementById("shipphone").value = document.getElementById("phone").value;
        document.getElementById("shipemail").value = document.getElementById("email").value;
    }
    else
    {
        document.getElementById("shipfirstname").value = "";
        document.getElementById("shiplastname").value = "";
        document.getElementById("shipaddress1").value = "";
        document.getElementById("shipaddress2").value = "";
        document.getElementById("shipCity").value = "";
        document.getElementById("shipState").value = "";
        document.getElementById("shipZip").value = "";
        document.getElementById("shipphone").value = "";
        document.getElementById("shipemail").value = "";
    }
}

function submitForm() {
    document.write("Form has been submitted");


}

function resetValues() {
    var count = document.getElementsByName('invalidNum');
    for (var i = 0; i<count.length; i++){
        document.getElementsByName('invalidNum').item([i]).style.visibility = 'hidden';
    }

}


// Function to validate the quantity is between 0 and 99

function checkNum(num,errMess){
    if (num <= 99 && num >= 0) {
        document.getElementById(errMess).style.visibility = 'hidden';
        getSubTotal();
    }
    else {
        document.getElementById(errMess).style.visibility = 'visible';
        getSubTotal();
    }

}


// Function to check that the entered credit card number
// is in the correct format.

function checkCCN(CCN,errMess) {
    if (CCN.search(/^\d{4}\ \d{4}\ \d{4} \d{4}$|^\d{16}$/) == 0) {
        document.getElementById(errMess).style.visibility = 'hidden';
    }
    else {
        document.getElementById(errMess).style.visibility = 'visible';
    }
}

// Function to validate the date entered is a valid date
//
//Month: The value must be between 1 and 12 inclusive
//Day: The value must be between 1 and 31 inclusive
//Year: The value must be between 1753 and 2100 inclusive

function checkDate(date,errMess) {
    if (date.search(
            /(^[1-9]|1[0-2])\/([1-9]|[1-2][0-9]{1}|3[0-1]{1})\/((17(5[3-9]|[6-9]\d)|1[8-9]\d\d)|20\d\d|2100)$/) == 0) {
        if(date.search(/(2|4|6|9|11)\/31\/\d*/)==0){ // Checks months with only 30 days
            document.getElementById(errMess).style.visibility = 'visible';
        }
        else if(date.search(/2\/30\/\d*/)==0){ // Check Feb has no more than 29 days
            document.getElementById(errMess).style.visibility = 'visible';
        }
        else {
            document.getElementById(errMess).style.visibility = 'hidden';
        }
    }
    else {
        document.getElementById(errMess).style.visibility = 'visible';
    }
}


function checkZip(zip,errMess){
    if (zip.search(/\d\d\d\d\d/) == 0){
        document.getElementById(errMess).style.visibility = 'hidden';
    }
    else {
        document.getElementById(errMess).style.visibility = 'visible';
    }
}

// Function to check the valid 2 letter
// state designation is entered

function checkState(state,errMess) {
    if (state.search(
            /^(A[L|K|Z|R]|C[A|O|T]|DE|FL|GA|HI|I[D|L|N|A]|K[S|Y]|LA|M[E|D|A|I|N|S|O|T]|N[E|V|H|J|M|Y|C|D]|O[H|K|R]|PA|RI|S[C|D]|T[N|X]|UT|V[T|A]|W[V|A|I|Y])$/) == 0) {
        document.getElementById(errMess).style.visibility = 'hidden';
    }
    else {
        document.getElementById(errMess).style.visibility = 'visible';
    }
}

function checkPhone(phone,errMess) {
    if(phone.search(/\d\d\d\-\d\d\d\-\d\d\d\d/) == 0){
        document.getElementById(errMess).style.visibility = 'hidden';
    }
    else {
        document.getElementById(errMess).style.visibility = 'visible';
    }

}


// Function to check the amount entered is a
// valid money amount

function checkAmount(amount,errMess) {
    if(amount.search(
            /\s*\$?\d{1,3}((([,]\d{3})*)(\.\d{2})?)\s*$/)==0 && amount != 0) {
        document.getElementById(errMess).style.visibility = 'hidden';
    }
    else{
        document.getElementById(errMess).style.visibility = 'visible';
    }
}

// Function to check to see if aanything is in the field

function checkData(data,errMess){
    if(data){
        document.getElementById(errMess).style.visibility = 'hidden';
    }
    else {
        document.getElementById(errMess).style.visibility = 'visible';
    }
}



