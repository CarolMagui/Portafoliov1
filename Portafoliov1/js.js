/* --- LÓGICA DE EJECUCIÓN (Call Stack) --- */
function cepillarDientes() {
    console.log("1. Cepillando los dientes ....");
}

function bañarse() {
    cepillarDientes(); 
    console.log("2. Cuerpo limpio.");
}

function empezarDia(){
    bañarse(); 
    console.log("3. Listo para trabajar.");
}
empezarDia(); 

/* --- VARIABLES --- */
const botonTema = document.getElementById("btn-tema");

/* --- MODULARIDAD (Objeto UI) --- */
const UI = {
    cuerpo: document.body,
    verdeOscuro: "rgb(77, 93, 75)", // #4d5d4b
    fondoCrema: "rgb(253, 245, 240)",  // #fdf5f0
    alternarColor: function() {
        let fondoActual = window.getComputedStyle(this.cuerpo).backgroundColor;

        if (fondoActual === this.fondoCrema) {
            this.cuerpo.style.backgroundColor = this.verdeOscuro;
            this.cuerpo.style.color = this.verdeOscuro; 
        } else {
            this.cuerpo.style.backgroundColor = this.fondoCrema;
            this.cuerpo.style.color = this.verdeOscuro;
        }
    },
    configuracionInicial: function() {
        this.cuerpo.style.backgroundColor = this.fondoCrema;
        this.cuerpo.style.color = this.verdeOscuro;
        console.log("Letras Verdes fijas.");
    }
};

/* --- INICIALIZAR INTERFAZ --- */
UI.configuracionInicial();

/* --- EVENTO MODULAR --- */
if (botonTema) {
    botonTema.addEventListener("click", () => UI.alternarColor());
}

/* --- DESPLAZAMIENTO SUAVE --- */
const botonProyectos = document.getElementById("ver-proyectos");
if (botonProyectos) {
    botonProyectos.addEventListener("click", () => {
        const seccion = document.querySelector(".seccion-proyectos");
        if (seccion) seccion.scrollIntoView({ behavior: "smooth" });
    });
}

/* --- INTERACCIÓN CON TARJETAS --- */
document.querySelectorAll(".card-proyecto").forEach(tarjeta => {
    tarjeta.addEventListener("click", () => {
        const titulo = tarjeta.querySelector("p")?.innerText || "Proyecto";
        alert("Seleccionaste: " + titulo);
    });
});

/* --- ASYNC / FETCH (GITHUB) --- */
async function cargarProyectos() {
    try {
        const response = await fetch("https://api.github.com/users/loquendo2309/repos");
        const proyectos = await response.json();
        const contenedor = document.querySelector(".contenedor-grid");
        
        if(contenedor) {
            contenedor.innerHTML = ""; 
            proyectos.forEach(repo => {
                contenedor.innerHTML += `
                    <div class="card-proyecto" style="border: 1px solid ${UI.verdeOscuro}; margin: 10px; padding: 10px; border-radius: 15px;">
                        <h3>${repo.name}</h3>  
                        <p>${repo.description || "Magaly Dev Project"}</p>
                        <a href="${repo.html_url}" target="_blank" style="color: ${UI.verdeOscuro}; font-weight: bold;">Ver GitHub</a>
                    </div>`;
            });
        }
    } catch (e) { console.error("Error cargando proyectos:", e); }
}
cargarProyectos();