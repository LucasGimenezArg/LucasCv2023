var colorState = 0;

function changeColor() {
    var root = document.documentElement;
    var colorPrimario;
    var colorMedio;
    var colorClaro;
    var colorTextoHover;

    switch (colorState) {
        case 0:
            colorPrimario = "#15202b";
            colorMedio = "#192734";
            colorClaro = "#22303c";
            colorTextoHover = "#091D2E";
            colorState = 1;
            break;
        case 1:
            colorPrimario = "#D86816";
            colorMedio = "#F0A242";
            colorClaro = "#F9C067";
            colorTextoHover = "#ad500d";
            colorState = 0;
            break;
        default:
            break;
    }

    root.style.setProperty("--color-primario", colorPrimario);
    root.style.setProperty("--color-medio", colorMedio);
    root.style.setProperty("--color-claro", colorClaro);
    root.style.setProperty("--color-textohover", colorTextoHover);

    // Guardar los valores de los colores seleccionados en el almacenamiento local
    localStorage.setItem("colorPrimario", colorPrimario);
    localStorage.setItem("colorMedio", colorMedio);
    localStorage.setItem("colorClaro", colorClaro);
    localStorage.setItem("colorTextoHover", colorTextoHover);
}