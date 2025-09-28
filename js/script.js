//función que convierte la primera letra de los strings de un array en mayúscula y su resto en minúscula
function capitalizarArray(array) {
  return array.map(str => { 
    if (typeof str === 'string' && str.length > 0) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    } else {
      return str; // Retorna el valor tal cual si no es string o está vacío
    }
  });
}


// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  // Escribe tu solución aquí
  const variable_con_strings = strangeArray.filter((word) => typeof word == "string" );

  const variable_con_strings_mayuscula = capitalizarArray(variable_con_strings)
  // Sugerencia de cómo mostrar el array => showList(strangeArray);
    showList(variable_con_strings_mayuscula.sort())

});
