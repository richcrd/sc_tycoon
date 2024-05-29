let monedas = 100;

function cargarMonedas() {
    const monedasGuardadas = localStorage.getItem('monedas');
    if(monedasGuardadas){
        monedas = JSON.parse(monedasGuardadas);
    }
}

function mostrarMonedas() {
    document.getElementById('monedas').textContent = "Monedas: " + monedas;
}

function guardarMonedas() {
    localStorage.setItem('monedas', JSON.stringify(monedas));
}

// Iniciar Juego y Seleccion de Equipo
function iniciar() {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('inicio-2').style.display = 'block';
}

function confirmarEquipo() {
    var equipo = document.getElementById('equipo').value;
    localStorage.setItem('equipoSeleccionado', equipo);
    document.getElementById('seleccion-equipo').style.display = 'none';
    document.getElementById('partido').style.display = 'block';
}

function crearNuevoJuego() {
    document.getElementById('inicio-2').style.display = 'none';
    document.getElementById('seleccion-equipo').style.display = 'block';
}

function continuarJuego() {
    // Logica aqui
}
// Simulacion de Partido

function iniciarPartido() {
    var temporizador = 90;
    var intervalo = setInterval(function() {
        document.getElementById('temporizador').textContent = temporizador + ":00";
        temporizador--;
        if(temporizador < 0){
            clearInterval(intervalo);
            var resultado = Math.random() > 0.5 ? "Ganaste" : "Perdiste";
            document.getElementById('resultado').textContent = resultado;
        }
    }, 1000);
}

// Tienda
function verTienda() {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('tienda').style.display = 'block';
}

function comprarMonedas(cantidad) {
    monedas += cantidad;
    mostrarMonedas();
    guardarMonedas();
}

// Ver Tabla

function verTabla() {
    // Aquí puedes agregar lógica para mostrar la tabla de la liga
    alert("Tabla de Liga: (en construcción)");
}

// function verEstadisticas() {
//     var equipo = localStorage.getItem('equipoSeleccionado');
//     document.getElementById('estadisticas-equipo').innerText = "Equipo: " + equipo;
//     document.getElementById('inicio').style.display = 'none';
//     document.getElementById('estadisticas').style.display = 'block';
// }

function volver(menuActual) {
    document.getElementById(menuActual).style.display = 'none';
    document.getElementById('inicio').style.display = 'block';
}

// Inicializar
window.onload = function() {
    cargarMonedas();
    mostrarMonedas();
}