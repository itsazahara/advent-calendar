document.addEventListener("DOMContentLoaded", () => {
    // Código del calendario de Adviento
    const casillas = document.querySelectorAll(".dia");
    const hoy = new Date().getDate(); // Día actual

    casillas.forEach(casilla => {
        const dia = parseInt(casilla.dataset.dia, 10);

        let abierta = false;

        if (dia > hoy) {
            casilla.classList.add("bloqueado");
        }

        casilla.addEventListener("click", () => {
            if (dia > hoy) {
                alert(`Aún no puedes abrir esta casilla. ¡Espera al día ${dia}! 🎅`);
            } else if (abierta) {
                alert(`Ya has recibido el regalo del día ${dia}. 🎁`);
            } else {
                // Añadir clase para mostrar la imagen
                casilla.classList.add("abierta");

                // Mostrar la imagen asociada
                const imagen = casilla.querySelector(".imagen-dia");
                if (imagen) {
                    imagen.style.display = "block";
                }

                // Marcar como abierta
                abierta = true;
            }
        });
    });

    // Animación de nieve
    const nieve = document.createElement("div");
    nieve.classList.add("nieve");
    document.body.appendChild(nieve);

    function crearCopo() {
        const copo = document.createElement("div");
        copo.classList.add("copo");

        const x = Math.random() * window.innerWidth;
        copo.style.left = `${x}px`;

        const tamano = Math.random() * 5 + 5;
        copo.style.width = `${tamano}px`;
        copo.style.height = `${tamano}px`;

        nieve.appendChild(copo);

        setTimeout(() => {
            copo.remove();
        }, 5000);
    }

    setInterval(crearCopo, 100);
});
