
/*Popup*/
var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function () {
    overlay.classList.add('active');
    popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function (e) {
    e.preventDefault();
    overlay.classList.remove('active');
    popup.classList.remove('active');
});

function InfoPost(idName) {
    const article = document.getElementById(idName);

    document.getElementById('popupImg').src = article.dataset.img;
    document.getElementById('popupNombre').innerHTML = article.dataset.nombre;
    document.getElementById('popupPrecio').innerHTML = "Precio: " + article.dataset.precio;
    document.getElementById('popupDescripcion').innerHTML = article.dataset.descripcion;


}