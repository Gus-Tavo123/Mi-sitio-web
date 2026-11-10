function convertir() {

    var caja = document.getElementById("temperatura").value;
    var combo = document.getElementById("opcion").value;
    var res = document.getElementById("resultado");


    if (caja == "") {
        res.innerHTML = "Escribe un numero por favor";
    } else {
        var n = parseFloat(caja);
        var r = 0;

        if (combo == "c-f") {
            r = (n * 9/5) + 32;
            res.innerHTML = n + " °C son " + r.toFixed(2) + " °F";
        } 
        

        if (combo == "f-c") {
            r = (n - 32) * 5/9;
            res.innerHTML = n + " °F son " + r.toFixed(2) + " °C";
        }
    }
}
