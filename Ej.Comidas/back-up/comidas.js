fetch('./data/comidas.json')  // Si está en la carpeta "static" de un proyecto Flask
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {
    //console.log(data);  // Aquí tienes acceso al JSON en formato de objeto JS  
    comidas = data;
    mostrarComidas(comidas);
  })
  .catch(error => {
    console.error('Error al leer el archivo JSON:', error);
  });

const varCont = document.querySelector(".contenedor");

//let comidas50 = JSON.parse(fs.readFileSync("./data/comidas.json", "utf8"));
let comidas = [];

const container = document.getElementById('comidaContainer');

function mostrarComidas(lista){

  container.innerHTML = ''

  lista.forEach(comida => {
    // Crear una tarjeta por cada comida
    const card = document.createElement('div');
    card.classList.add('card');
  
    // Nombre de la comida
    const nombre = document.createElement('h3');
    nombre.textContent = comida.nombre;
    card.appendChild(nombre);
  
    // Categoría como superíndice
    const categoria = document.createElement('span');
    categoria.classList.add('categoria');
    categoria.textContent = comida.categoria;
    card.appendChild(categoria);  // Lo agregamos a la tarjeta
  
    // Provincia de la comida
    const provincia = document.createElement('p');
    provincia.textContent = `Provincia: ${comida.provincia}`;
    card.appendChild(provincia);
  
    // Ingredientes de la comida
    const ingredientes = document.createElement('div');
    ingredientes.classList.add('ingredientes');
    const ingredientesTitle = document.createElement('p');
    ingredientesTitle.textContent = 'Ingredientes:';
    ingredientes.appendChild(ingredientesTitle);
  
    comida.ingredientes.forEach(ingrediente => {
      const ingredienteSpan = document.createElement('span');
      ingredienteSpan.textContent = ingrediente;
      ingredientes.appendChild(ingredienteSpan);
    });
  
    card.appendChild(ingredientes);
  
    // Agregar la tarjeta al contenedor
    container.appendChild(card);
  });
  
}

// Evento para agregar comida con el formulario
document.getElementById('comidaForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const categoria = document.getElementById('categoria').value;
  const provincia = document.getElementById('provincia').value;
  const ingredientes = document.getElementById('ingredientes').value.split(',').map(ing => ing.trim());

  // Crear nueva comida
  const nuevaComida = {
    nombre,
    categoria,
    provincia,
    ingredientes
  };

  // Agregar la nueva comida a la lista
  comidas.push(nuevaComida);

  // Limpiar el formulario
  document.getElementById('comidaForm').reset();

  // Actualizar la visualización de comidas
  mostrarComidas();
});

// Referencias a los selectores de filtros
const filtroCategoria = document.getElementById('filtroCategoria');
const filtroProvincia = document.getElementById('filtroProvincia');

// Función para filtrar y mostrar comidas según los selectores
function aplicarFiltros() {
  const categoriaSeleccionada = filtroCategoria.value;
  const provinciaSeleccionada = filtroProvincia.value;

  const comidasFiltradas = comidas.filter(comida => {
    const coincideCategoria = categoriaSeleccionada === '' || comida.categoria === categoriaSeleccionada;
    const coincideProvincia = provinciaSeleccionada === '' || comida.provincia === provinciaSeleccionada;
    return coincideCategoria && coincideProvincia;
  });

  // Mostrar solo las comidas filtradas
  container.innerHTML = '';
  mostrarComidas(comidasFiltradas);
}

// Agregar eventos para que los filtros se apliquen al cambiar
filtroCategoria.addEventListener('change', aplicarFiltros);
filtroProvincia.addEventListener('change', aplicarFiltros);

// Filtrar comidas por nombre o ubicación
searchBar.addEventListener('input', () => {
  const searchTerm = searchBar.value.toLowerCase();
  const filteredFoods = comidas.filter(comida => 
    comida.nombre.toLowerCase().includes(searchTerm) ||
    comida.categoria.toLowerCase().includes(searchTerm) ||
    comida.provincia.toLowerCase().includes(searchTerm)
  );
  mostrarComidas(filteredFoods);
});