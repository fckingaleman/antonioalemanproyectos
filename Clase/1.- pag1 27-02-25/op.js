
var op =0;
alert("Estructura switch en JavaScript");
op = prompt("Escoga una Opcion:\n1.¿Qué es?\n2.¿Para qué sirve? \n3.Historia\n4.Características \n5.Motores \n6.Ejemplos de aplicaciones");

switch (op) {
    case "1" : {
        alert("¿Que es?: \n La estructura switch en JavaScript es una declaracion de control que permite ejecutar un bloque de\ncodigo en función del valor de una expresión. Es util cuando se necesita comparar una misma variable\ncon diferentes valores posibles y ejecutar un codigo diferente dependiendo del valor que tome dicha\nvariable. La sintaxis de un switch facilita la lectura y escritura del codigo cuando hay múltiples\ncondiciones posibles.\nReferencias: \nMozilla Developer Network (MDN). (s.f.). Switch statement. Recuperado de\nhttps://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/switch");
        break;
    }
    case "2" : {
        alert("¿Para que sirve?\nLa estructura switch en JavaScript sirve para evaluar una expresión y comparar su valor con diferentes\ncasos predefinidos. Su principal utilidad radica en simplificar el código cuando hay múltiples\ncondiciones que dependen del valor de una sola variable. Es una forma más ordenada y eficiente de\nmanejar situaciones con varias opciones posibles en comparación con múltiples declaraciones if-else.\nReferencias:\nMozilla Developer Network (MDN). (s.f.). Switch statement. Recuperado de\nhttps://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/switch");
        break;
    }
    case "3" : {
        alert("Historia:\nLa estructura switch en JavaScript es una herramienta clave dentro del lenguaje para el control de\nflujo. Esta estructura se introdujo desde las primeras versiones de JavaScript, ya que proporciona una\nmanera sencilla y legible de manejar múltiples condiciones que dependen de una sola variable.\nReferencias: \nFlanagan, D. (2020). JavaScript: The Definitive Guide (7.ª ed.). O'Reilly Media. ");
        break;
    }
    case "4" : {
        alert("Características:\n1.-Evaluación de una única expresión\n2.-Casos específicos (case)\n3.-Caso por defecto (default)\n4.-Mayor claridad en el código\nReferencias:\nCrockford, D. (2008). JavaScript: The Good Parts. O'Reilly Media.");
        break;
    }
    case "5" : {
        alert("Motores: \n1.-V8 (Google Chrome y Node.js)  \n2.-SpiderMonkey (Mozilla Firefox)  \n3.-JavaScriptCore (WebKit - Safari) \n4.-Chakra (Microsoft Edge - antes de Chromium) \nReferencias: \nGoogle. (s.f.). V8: The JavaScript engine. Recuperado de https://v8.dev/");
        break;
    }
    case "6" : {
        alert("Ejemplos de aplicaciones:\n1.-Google Maps  \n2.-Facebook  \n3.-WhatsApp Web  \n4.-React Native  \n5.-Phaser ");
        break;
    }
    default : {
        alert("Opcion No Valida");
        break;
    }
}