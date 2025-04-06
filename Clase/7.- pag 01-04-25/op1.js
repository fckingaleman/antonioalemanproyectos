objeto4 = new Object ();
objeto4.digito=0;

function o4f1 () {
    objeto4.digito=parseInt(prompt("Ingrese un numero entero"));
    if (objeto4.digito >= 0 && objeto4.digito < 10) {
        alert("True - El Numero se encuentra entre el 0 y 9");
    }
    else {
        alert("False - El Numero NO se encuentra entre el 0 y 9");
    }
}