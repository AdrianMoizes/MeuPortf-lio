const hamburguer = document.querySelector('.hamburguer');
const nav = document.querySelector('.nav');

hamburguer.addEventListener("click", () =>
    nav.classList.toggle("active")
);
// Adiciona um event listener para o clique nos links
document.querySelectorAll('.nav-list').forEach(link => {
    link.addEventListener('click', () => {
        // Fecha o menu hamburguer
        nav.classList.remove("active");
    });
});