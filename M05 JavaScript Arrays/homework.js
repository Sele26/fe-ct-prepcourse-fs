/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
let array= [array]
for (let i=0; i=array.lenght; i++) {
   array=array[i];
}
return unshift.array;
}


function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array.pop()
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.lenght;
 
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
  for(i = 0; i < array.lenght; i++) {
   array[i]=array[i]+1;
  }
  return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
    
   array.push("elemento");
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.shift ("elemento");
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
for(i=0; i<palabras.lenght; i++) {
   if (i === "Hola" + "palabras" + ("")[i]) {
      return [i];
   }
}

}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   let arrayContiene= "elemento";
  while(i= "elemento"){
     i= "elemento" +1;
       return true;
   }
        return false;
   }



function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   for(i=0; i<arrayOfNums.lenght; i++){
      suma=arrayOfNums+1
}
       return suma;
     }
function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let suma = 0;
   for(i=0; i<resultadosTest.lenght; i++) {
      const elementos=resultadosTest[i];
      suma=+ elementos;
   }
   let promedio = suma/ resultadosTest.lenght;
   return promedio;
}


function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   let mayor = 0;
   for(i=0; i<arrayOfNums.lenght; i++) {
      if(arrayOfNums[i]> mayor){
         mayor=arrayOfNums[i]
      }
    return mayor;
   }
   }
const numeroGrande=[1,2,3,4,5]

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if(!arguments.length){
      return 0;
   }
   if(arguments.length === 1){
      return arguments[0];
   }
   let multiplicar=1
   if(arguments.length > 1){
      for(i=0; i<arguments.lenght; i++){
         multiplicar=multiplicar * arguments[i]
      }
   } 
   return multiplicar;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let elementos = 0
    for(i=0; i<elementos.lenght; i++) {
      if(elementos> 18){
         elementos += 1;
      }
    }
return elementos;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if(numeroDeDia===1 || numeroDeDia===7){
      return "Es fin de semana";
   }else{
      return "Es dia laboral";
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   if(num.toString()[0]===("9")) {
      return true;
   }else{
      return false;
   }
   }


function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
 let flag = array[0]
 for(let i=0; i<array.lenght; i++){
   if(array[i] !== flag){
      return false;
   }
 } 
 return true;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   let meses=["Enero"];["Marzo"];["Noviembre"]
   for(let i = 0; i<array.lenght; i++){
      if(array[i]=== meses){
         return meses;
      }else{
         return "No se encontraron los meses pedidos";
      }
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let tablaDelSeis=(num)
   for(let i=0; i<num-length;i++){
      if (num[i]===(num*6)) {
         num[i]< 60;
      }
   }
   return array(num);
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let numeroCien = (enteros)
   for(let i=0; i<enteros.lenght; i++){
      if(enteros[i]<= 100){
         enteros[i] = 100 +1;
      }
   }return numeroCien;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let sumandoDe2=[]
   for(let i=0; i<10; i++){
      num[i]+= 2
      sumandoDe2.push(num);
      return sumandoDe2;
 
      if(sumandoDe2[i]===10){
      } else {
         break;
      }if (sumandoDe2[i] < 10){
         return "Se interrumpió la ejecución";
      }  
      }
   }         
      
   
  


function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let saltar5=[];
   for(let i=0; i<10; i++){
      if(i===5) continue;
      i += 2;
      saltar5.push(num);
   }
   return saltar5;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
