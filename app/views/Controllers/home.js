document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el div con la clase 'dashboard-content'
    var dashboardContent = document.querySelector('.dashboard-content');

    // Borra el contenido existente del div 'dashboard-content'
    dashboardContent.innerHTML = '';

    // Crea un nuevo elemento h1
    var h1 = document.createElement('h1');

    // Asigna el texto "Hola" al elemento h1
    h1.textContent = 'Hola';

    // Inserta el elemento h1 dentro del div 'dashboard-content'
    dashboardContent.appendChild(h1);
});
