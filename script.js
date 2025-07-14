// Arreglo inicial de productos
const products = [
  { name: "Camisa", price: 20, description: "Camisa de algodón" },
  { name: "Pantalón", price: 35, description: "Pantalón de mezclilla" },
  { name: "Zapatos", price: 50, description: "Zapatos de cuero" }
];

// Función para renderizar la lista de productos
function renderProducts() {
  const list = document.getElementById('product-list');
  list.innerHTML = ""; // Limpia la lista antes de volver a renderizar

  products.forEach((product) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${product.name}</strong> - $${product.price}<br>${product.description}`;
    list.appendChild(li);
  });
}

// Evento para agregar un nuevo producto
document.getElementById('add-product').addEventListener('click', () => {
  const name = document.getElementById('new-name').value.trim();
  const price = parseFloat(document.getElementById('new-price').value);
  const description = document.getElementById('new-description').value.trim();

  if (name && !isNaN(price) && description) {
    products.push({ name, price, description });
    renderProducts();

    // Limpia los campos
    document.getElementById('new-name').value = "";
    document.getElementById('new-price').value = "";
    document.getElementById('new-description').value = "";
  } else {
    alert("Por favor completa todos los campos correctamente.");
  }
});

// Renderiza la lista al cargar la página
document.addEventListener('DOMContentLoaded', renderProducts);
