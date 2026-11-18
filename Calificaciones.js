function calcularPromedio() {

    let nombre = document.getElementById("nombre").value;
    let c1 = document.getElementById("cal1").value;
    let c2 = document.getElementById("cal2").value;
    let c3 = document.getElementById("cal3").value;


    if (nombre.trim() === "") {
        alert("Por favor, ingresa el nombre del estudiante.");
        return;
    }

    if (c1 === "" || c2 === "" || c3 === "") {
        alert("Por favor, ingresa las tres calificaciones.");
        return;
    }


    let num1 = parseFloat(c1);
    let num2 = parseFloat(c2);
    let num3 = parseFloat(c3);


    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Las calificaciones deben ser números válidos.");
        return;
    }

    if (num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10 || num3 < 0 || num3 > 10) {
        alert("Las calificaciones deben estar entre 0 y 10.");
        return;
    }


    let promedio = (num1 + num2 + num3) / 3;


    let estado = "";
    if (promedio >= 6 && promedio <= 10) {
        estado = "APROBADO";
    } else {
        estado = "REPROBADO";
    }


    let observacion = "";
    if (promedio >= 9) {
        observacion = "Excelente desempeño";
    } else if (promedio >= 8) {
        observacion = "Muy buen desempeño";
    } else if (promedio >= 7) {
        observacion = "Buen desempeño";
    } else if (promedio >= 6) {
        observacion = "Desempeño suficiente";
    } else {
        observacion = "Necesita mejorar";
    }


    let cajaResultado = document.getElementById("resultado");
    cajaResultado.innerHTML = 
        "<h3>Resultados:</h3>" +
        "<p><b>Estudiante:</b> " + nombre + "</p>" +
        "<p><b>Calificaciones:</b> " + num1 + ", " + num2 + ", " + num3 + "</p>" +
        "<p><b>Promedio obtenido:</b> " + promedio.toFixed(1) + "</p>" +
        "<p><b>Estado:</b> " + estado + "</p>" +
        "<p><b>Observación:</b> " + observacion + "</p>";
}
