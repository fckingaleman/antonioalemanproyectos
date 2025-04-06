function info () {
    alert("Funcion que muestra informacion");
    alert("Plantel: Cecyteq No.5 \nMateria: Programacion \nFecha:05-03-25 ");
}

function alum () {
    alert("Funcion que muestra datos del alumno");
    alert("Nombre: Antonio Lopez Aleman \nGrupo: 4TPROG-AM");
}

function serie () {
    var n1 =0, n2=0;
    alert("Función que muestre una serie de 1 en 1");
    n1= parseInt(prompt("Ingrese el numero de partida de la sucesion"));
    n2= parseInt(prompt("Ingrese el numero a llegar de la sucesion"));
    for (n1;n1<=n2;n1++) {
        alert(n1);
    }
}

function tabla () {
    var n1 =0;
    alert("Función que calcule la tabla de multiplicar de un número y la muestre en pantalla");
    n1= parseInt(prompt("Ingrese el numero a conozer la tabla"));
    for (var i = 1 ; i<=10; i ++) {
        alert(n1+"*"+i+"="+(n1*i));
    }
}

function sumaserie() {
    var s=0;
    var n1 =0, n2=0;
    alert("Función que calcule la suma de una serie de números");
    n1= parseInt(prompt("Ingrese el numero de partida de la sucesion"));
    n2= parseInt(prompt("Ingrese el numero a llegar de la sucesion"));
    for (var i = n1; i <= n2; i++) {
        s += i;
    }
    alert("La suma de la sucesión es: " + s);
}

function raiz () {
    var r= 0;
    var d= " ";
    var n1 =0;
    alert("Función que calcule la raíz de un número, cuando sea positivo N veces");
    d=prompt("Desea Ejecutar el programa   S/N");
    while (d=="s"||d=="S"){
        n1= parseInt(prompt("Ingresa el numero que desea conocer raiz"));
    if (n1>0){
        r= Math.sqrt(n1);
        alert("La raiz es: "+r);
    }
    else {
        alert("Numero no valido");
    }
    d=prompt("Desea Ejecutar el programa   S/N");
    }
    
}

function rango () {
    var n1 =0, n2=0;
    alert("Función que muestra los múltiplos de 3 y 5 en un determinado rango");
    n1= parseInt(prompt("Ingrese el numero de partida de el rango"));
    n2= parseInt(prompt("Ingrese el numero a llegar de el rango"));
    for (var i = n1; i <= n2; i++) {
        if (i % 3 === 0 ) {
            alert("El numero "+i+" es multiplo de 3");
        }
        if (i % 5 === 0) {
            alert("El numero "+i+" es multiplo de 5");
        }
    }
}

function sumacuadrados () {
    var n1=0,n2=0;
    var r=0, s=0;;
    alert("Función que calcula la suma de los cuadrados de los cinco  números siguientes al número inicial");
    n1=parseInt(prompt("Ingrese el numero"));
    n2=n1+5;
    for (var i = (n1+1); i<=n2;i++){
        r=i**2
        s+=r
    }
    alert("El resultado es: "+s)
}

function promediorango() {
    var n1=0, n2=0;
    var s=0, r=0,numn=0;
    alert("Función que calcule el promedio de un rango que proporciona el usuario");
    n1= parseInt(prompt("Ingrese el numero de partida de el rango"));
    n2= parseInt(prompt("Ingrese el numero a llegar de el rango"));
    var i = n1
    while (i <= n2) {
        s += i;
        numn++; 
        i++;     
    }
    r = s / numn; 
    alert("El promedio del rango es: " + r);

}


alert("Pagina que utiliza funciones y diferentes ciclos")
info();
alum();
serie();
tabla();
sumaserie();
raiz();
rango();
sumacuadrados();
promediorango();