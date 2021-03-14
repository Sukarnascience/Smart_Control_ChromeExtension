function sendingData(mode){
    if(document.getElementById("checkOutper").checked == false){
        document.getElementById("outDatawesee").innerHTML = "Output Data : -NA-";
    }
    if(mode==11){
        if(document.getElementById("checkOutper").checked == true){
            document.getElementById("outDatawesee").innerHTML = "Output Data : S11";
        }
    }
    else if(mode==10){
        if(document.getElementById("checkOutper").checked == true){
            document.getElementById("outDatawesee").innerHTML = "Output Data : S10";
        }
    }
    else if(mode==21){
        if(document.getElementById("checkOutper").checked == true){
            document.getElementById("outDatawesee").innerHTML = "Output Data : S21";
        }
    }
    else if(mode==20){
        if(document.getElementById("checkOutper").checked == true){
            document.getElementById("outDatawesee").innerHTML = "Output Data : S20";
        }
    }
    else if(mode==31){
        if(document.getElementById("checkOutper").checked == true){
            document.getElementById("outDatawesee").innerHTML = "Output Data : S31";
        }
    }
    else if(mode==30){
        if(document.getElementById("checkOutper").checked == true){
            document.getElementById("outDatawesee").innerHTML = "Output Data : S30";
        }
    }
    else if(mode==41){
        if(document.getElementById("checkOutper").checked == true){
            document.getElementById("outDatawesee").innerHTML = "Output Data : S41";
        }
    }
    else if(mode==40){
        if(document.getElementById("checkOutper").checked == true){
            document.getElementById("outDatawesee").innerHTML = "Output Data : S40";
        }
    }
    else{
        if(document.getElementById("checkOutper").checked == true){
            document.getElementById("outDatawesee").innerHTML = "Oooops! something went wrong";
        }
    }
}