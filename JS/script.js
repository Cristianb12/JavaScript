let insumos_arreglo = [];

let nuevo_insumo = new insumos("Malta", "Consumible", "Importado");
nuevo_insumo.setId(1);
insumos_arreglo.push(nuevo_insumo);

nuevo_insumo = new insumos("Cevada", "Consumible", "Importado");
nuevo_insumo.setId(2);
insumos_arreglo.push(nuevo_insumo);

nuevo_insumo = new insumos("Lupulo", "Consumible", "Importado");
nuevo_insumo.setId(3);
insumos_arreglo.push(nuevo_insumo);

nuevo_insumo = new insumos("Barriles", "Almacenamiento por mayor", "Industria Nacional");
nuevo_insumo.setId(4);
insumos_arreglo.push(nuevo_insumo);

nuevo_insumo = new insumos("Botellas", "Almacenamiento por menor", "Fabricacion Propia");
nuevo_insumo.setId(5);
insumos_arreglo.push(nuevo_insumo);

//datos para carga de nuevo insumo//
function carga_insumos() {
  let nombre;
  let tipo;
  let procedencia;
  do {
    nombre = prompt("Ingrese el nombre del insumo");
    tipo = prompt("Ingrese el tipo del insumo");
    procedencia = prompt("Ingrese la procedencia del insumo");

    mensaje =
      "Los datos ingresados son: \n" +
      "Nombre: " +
      nombre +
      "\nTipo: " +
      tipo +
      "\nProcedencia: " +
      procedencia +
      "\n\n Si los datos son correctos confirme, si los quiere volver a cargar presione cancelar";
  } while (!confirm(mensaje));

  insumonew = new insumos(nombre, tipo, procedencia);
  return insumonew;
}
let nombre_insumo_buscado;


function mostrar_lista_insumos(lista) {
  let mensaje1 = "";
  lista.forEach( elemento => {mensaje1 += "\n- " + elemento.nombre;});  
  return mensaje1;
}

//mensaje bienvenida//
alert(
  "Bienvenido a MZ Wines, a continuacion deberá seleccionar que operación desea realizar."
);

do {
  let operacion = prompt(
    "Seleccione una operacion de la lista:" +
      "\n1- Lista de nombres de Insumos cargados" +
      "\n2- Mostrar un Insumo" +
      "\n3- Buscar Insumo por tipo" +
      "\n4- Cargar un nuevo insumo" +
      "\n5- Eliminar un insumo" +
      "\n6- Modificar la Info de un insumo" +
      "\n7- Ordenar Alfabeticamente"
  );

  switch (operacion) {
    case "1":      
      let mensaje = "Los insumos cargados en la base de datos son: ";
      mensaje += mostrar_lista_insumos(insumos_arreglo);
      alert(mensaje);
      break;

    case "2":      
      let mensajelista ="Ingrese el nombre del Insumo del cual desea ver su informacion" +mostrar_lista_insumos(insumos_arreglo);
      nombre_insumo_buscado = prompt(mensajelista).toUpperCase();

      //find 
      let insumoMostrado = insumos_arreglo.find((elemento) => elemento.nombre == nombre_insumo_buscado);
     
      if (insumoMostrado) {
        insumoMostrado.mostrarInsumo();
      } else {
        alert("El insumo buscado no se encuentra en la base de datos");
      }
      break;

    case "3":
      
      let tipobuscado = prompt("Escriba el tipo de insumo que desea buscar:\n- Consumible\n-Almacenamiento por mayor \n- Almacenamiento por menor").toUpperCase();
      
      let insumo_array_tipo = insumos_arreglo.filter((elemento) => elemento.tipo == tipobuscado);
      
      if (insumo_array_tipo.length > 0) {
        let mensaje2 ="Los insumos cargados en la base de datos con el tipo " +tipobuscado.toLowerCase() +" son:";
        mensaje2 += mostrar_lista_insumos(insumo_array_tipo);
        alert(mensaje2);
      } else {
        alert(
          "No existen Insumos del tipo buscado en nuestra base de datos"
        );
      }
      break;

    case "4":      
      let InsumoS = carga_insumos();
      InsumoS.setId(insumos_arreglo.length + 1);
      InsumoS.mostrarInsumo(); //datos del nuevo insumo
      insumos_arreglo.push(InsumoS); //lo agrego 
      break;

    case "5":
      //eliminar un insumo de la lista
      let mensajelista2 ="Ingrese el nombre del Insumo que desea eliminar de la base de datos" +mostrar_lista_insumos(insumos_arreglo);
      let nombre_insumo_eliminado = prompt(mensajelista2).toUpperCase();
      
      if(insumos_arreglo.some((elemento)=> elemento.nombre == nombre_insumo_eliminado)){
        if (confirm("Esta seguro que desea eliminar el " +nombre_insumo_eliminado +" de la base de datos?")) {          
          insumos_arreglo = insumos_arreglo.filter((elemento) => elemento.nombre != nombre_insumo_eliminado);
          alert("Insumo Eliminado con Exito");
        }
      }
      else{
        alert("Ingreso el nombre de un insumo que no existe en nuestra base de datos");
      }
      break;

    case "6":
      //modificar elementos de la lista
      let mensajelista3 ="Ingrese el nombre del Insumo que desea modificar" +mostrar_lista_insumos(insumos_arreglo);
      nombre_insumo_buscado = prompt(mensajelista3).toUpperCase();      
      
      if(insumos_arreglo.some((elemento)=> elemento.nombre == nombre_insumo_buscado)){
          
          let insumoBuscado = insumos_arreglo.find((elemento) => elemento.nombre == nombre_insumo_buscado);
        
          let indice = insumos_arreglo.indexOf(insumoBuscado);

          //nuevos datos
          nombre = prompt("Ingrese el nuevo nombre del insumo");
          tipo = prompt("Ingrese el nuevo tipo del insumo");
          procedencia = prompt("Ingrese la nueva procedencia del insumo");
          
          let id = insumos_arreglo[indice].id;
          
          let insumo_modificado = new insumos(nombre, tipo, procedencia);
          insumo_modificado.setId(id);

          alert("Insumo Actualizado con Exito");
          insumo_modificado.mostrarInsumo();
          
          insumos_arreglo[indice] = insumo_modificado;
      }
      else{
         alert("Ingreso el nombre de un insumo que no existe en nuestra base de datos");
      }
      break;

    case "7":
      //ordena la lista
      let ord = prompt("La lista se ordenara por nombre, si Selecciona A se ordenara de forma ascendente, si Selecciona D se ordenara de forma descendente").toUpperCase();
      if (ord == "A") {
        insumos_arreglo.sort((insumo1, insumo2) => {
          if (insumo1.nombre > insumo2.nombre) {
            return 1;
          }
          if (insumo1.nombre < insumo2.nombre) {
            return -1;
          }
          return 0;
        });
      } else {
        if (ord == "D") {
          insumos_arreglo.sort((insumo1, insumo2) => {
            if (insumo1.nombre > insumo2.nombre) {
              return -1;
            }
            if (insumo1.nombre < insumo2.nombre) {
              return 1;
            }
            return 0;
          });
        } else {
          alert("No ingreso una opcion valida");
        }
      }
      break;

      default:
      alert("No ingreso una opcion valida");

  
  }
} while (confirm("Desea seguir realizando otra operacion?"));
