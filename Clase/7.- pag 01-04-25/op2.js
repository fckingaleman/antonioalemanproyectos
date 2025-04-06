objeto5 = new Object ();
objeto5.inicio=0;
objeto5.fin=0;

function o5f1 () {
    var suma=0;
    objeto5.inicio=parseInt(prompt("Ingrese el inicio de la serie"));
    objeto5.fin=parseInt(prompt("Ingrese el final de la serie"));
    for (var i = objeto5.inicio; i <= objeto5.fin; i++) {
        suma += i;
    }
    alert("La sumatoria de la serie es: "+suma);
}