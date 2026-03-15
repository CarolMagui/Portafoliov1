/* --- VARIABLES --- */
const botonTema = document.getElementById("btn-tema");

/* --- MODULARIDAD (Objeto UI) --- */
const UI = {
    cuerpo: document.body,
    alternarColor: function () {
        this.cuerpo.classList.toggle("modo-oscuro");
        if (this.cuerpo.classList.contains("modo-oscuro")) {
            console.log("Modo oscuro activado: fondo verde");
            botonTema.innerText = "Modo Claro";
        } else {
            console.log("Modo claro activado: fondo crema");
            botonTema.innerText = "Cambiar Tema";
        }
    },
    configuracionInicial: function () {
        console.log("Interfaz de Magaly iniciado correctamente");
    }
};

/* --- INICIALIZAR INTERFAZ --- */
UI.configuracionInicial();

/* --- EVENTO MODULAR --- */
if (botonTema) {
    botonTema.addEventListener("click", () => UI.alternarColor());
}

/*seleccion de enlaces de la pestaña flotante*/
document.querySelectorAll('.nav-flotante a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === "#") {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }

    })

})


document.querySelectorAll(".card-proyecto").forEach(tarjeta => {
    tarjeta.addEventListener("click", () => {
        const titulo = tarjeta.querySelector("p")?.innerText || "Proyecto";
        console.log("Seleccionaste: " + titulo);
    });
});