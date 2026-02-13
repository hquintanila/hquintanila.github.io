// --- CONFIGURACIÓN DEL CONTADOR ---
const baseAños = 2;
const baseMeses = 2;
const baseDias = 17;

const momentoInicioCarga = new Date();

function actualizarContador() {
    const ahora = new Date();
    
    // Obtenemos los valores de la hora actual
    const segundos = ahora.getSeconds();
    const minutos = ahora.getMinutes();
    const horas = ahora.getHours();

    // Actualizar el DOM para el contador
    document.getElementById("years").innerText = baseAños;
    document.getElementById("months").innerText = baseMeses;
    document.getElementById("days").innerText = baseDias;
    
    document.getElementById("hours").innerText = (horas < 10) ? "0" + horas : horas;
    document.getElementById("minutes").innerText = (minutos < 10) ? "0" + minutos : minutos;
    document.getElementById("seconds").innerText = (segundos < 10) ? "0" + segundos : segundos;
}

// --- FUNCIÓN PARA CREAR CORAZONES FLOTANTES ---
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    
    // Posición horizontal aleatoria (0 a 100% del ancho de la pantalla)
    heart.style.left = Math.random() * 100 + "vw";
    
    // Tamaño aleatorio para que se vea más natural
    const size = (Math.random() * 20 + 15) + "px";
    heart.style.width = size;
    heart.style.height = size;
    
    // Velocidad de subida aleatoria (entre 6 y 10 segundos)
    const duration = (Math.random() * 4 + 6) + "s";
    heart.style.animationDuration = duration;
    
    document.body.appendChild(heart);

    // Eliminar el corazón cuando termine la animación para no consumir memoria
    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// --- INICIALIZACIÓN ---

// Ejecutar contador cada segundo
setInterval(actualizarContador, 1000);
actualizarContador();

// Crear un corazón nuevo cada 400 milisegundos
setInterval(createHeart, 400);