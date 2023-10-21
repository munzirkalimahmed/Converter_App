function Check() { 
    let selectElement = document.getElementById('converter-type'); 

    if(selectElement.selectedIndex == 0){
        document.getElementById("area").style.display = "none";
        document.getElementById("temp").style.display = "block";
    }
    else{
        document.getElementById("temp").style.display = "none";
        document.getElementById("area").style.display = "block";
    }

 }

function Convertt() {

    let selectElement = document.getElementById('area-type');

    



if(selectElement.selectedIndex == 0)
{
    let n = document.getElementById('numb').value;

    let sol = n * 272.25;

    document.getElementById('result').value = sol;
}

else if(selectElement.selectedIndex == 1){

    let n = document.getElementById('numb').value;

    let sol = n*9;

    document.getElementById('result').value = sol;

}

else{

    document.getElementById('num').value = 0;

    document.getElementById('res').value = 0;
}
    
}

function Convert () { 



let selectElement = document.getElementById('temperature-type'); 



if(selectElement.selectedIndex == 0)
{
    let n = document.getElementById('num').value;

let sol = (n*9/5) + 32;

document.getElementById('res').value = sol;
}

else if(selectElement.selectedIndex == 1){

    let n = document.getElementById('num').value;

    let sol = (n-32) * 5/9;

    document.getElementById('res').value = sol;

}

else{

    document.getElementById('num').value = 0;

    document.getElementById('res').value = 0;
}

}