function tempConvert() {
    
    var fah = document.getElementById("fahrenheit").value;
    var cel = document.getElementById("celsius").value;
    if (fah != '') {
        cel = (parseFloat(fah) - 32) / 1.8;
    } else {
        fah = (parseFloat(cel) * 1.8) + 32;
    }
    document.getElementById('fahrenheit').value = parseFloat(fah).toFixed(1);
    document.getElementById('celsius').value = parseFloat(cel).toFixed(1);
}


function clearForm() {
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celsius').value = '';
} 



