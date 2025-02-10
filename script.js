document.addEventListener("DOMContentLoaded", function () {
    fetch('menu.json')
        .then(response => response.json())
        .then(data => {
            let menuContainer = document.getElementById("menu-container");

            data.forEach(producto => {
                let productoDiv = document.createElement("div");
                productoDiv.classList.add("producto");

                productoDiv.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <h2>${producto.nombre}</h2>
                    <p>${producto.descripcion}</p>
                    <p><strong>Precio: ${producto.precio}</strong></p>
                `;

                menuContainer.appendChild(productoDiv);
            });
        })
        .catch(error => console.error("Error cargando el menú:", error));
});
