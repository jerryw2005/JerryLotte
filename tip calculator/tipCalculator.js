
function calculate() {
    var billMoney = document.getElementById("bill").value;
    var rate = document.getElementById("percentage").value;
    var people = document.getElementById("men").value;
    
    if (billMoney == '') {
        alert("Please enter the total bill amount");
    } else if (people == '') {
        alert("Please put in the number of people");
    } else {
        document.getElementById("tipAmount").innerHTML="Tip Amount";
        document.getElementById("each").innerHTML="each";
        var tipPP = (billMoney*rate)/people
        document.getElementById("moneyPP").innerHTML="€ "+tipPP;
    }
    
}
