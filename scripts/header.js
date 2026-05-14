const perfil = document.getElementById('perfilBtn');

perfil.addEventListener('click', function(e) {
    e.stopPropagation();
    perfil.classList.toggle('abierto');
});

document.addEventListener('click', function() {
    perfil.classList.remove('abierto');
});