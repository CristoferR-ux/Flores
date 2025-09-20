document.addEventListener('DOMContentLoaded', () => {

    // -----------------------------------------------------------------
    // ✨ ÁREA DE CONFIGURACIÓN: ¡EDITA TODO DESDE AQUÍ! ✨
    // -----------------------------------------------------------------

    const config = {
        titulo: "Para mi Girasol", // <-- Cambia el título principal aquí
        imagenPrincipal: "imagenes/IMG_20250727_201210.jpg", // <-- Cambia la imagen del ramo
        mensajeAmor: "Como los girasoles buscan el sol, mi corazón siempre te busca a ti. Eres la luz que ilumina mi mundo.", // <-- Cambia el mensaje de amor
        
        // Textos de los botones del pie de página
        botonAgradecimiento: "Gracias por ser tú",
        botonRegalo: "Un regalo extra",

        // Mensajes de alerta para los botones
        alertaAgradecimiento: "Eres mi mayor alegría y mi mejor aventura. Gracias por cada sonrisa, cada recuerdo y por iluminar mi vida.",
        alertaRegalo: "¡Un regalo extra para ti! Esta es nuestra canción favorita. 💕 (https://www.youtube.com/watch?v=ayPV5e2EAHY&list=RDayPV5e2EAHY&start_radio=1)"
    };

    const galeriaDeImagenes = [
        {
            url: "imagenes/IMG_20220728_165505.jpg", // <-- URL de la imagen 1
            descripcion: " ¡Nuestra alegría era tan brillante! 🌻 " // <-- Descripción 1
        },
        {
            url: "imagenes/IMG_20221207_170107.jpg", // <-- URL de la imagen 2
            descripcion: "El comienzo de algo mágico. ✨ " // <-- Descripción 2
        },
        {
            url: "imagenes/IMG_20230101_014110.jpg", // <-- URL de la imagen 3
            descripcion: "Contigo, cada aventura es mejor. 😂 " // <-- Descripción 3
        },
        {
            url: "imagenes/IMG_20230101_062756.jpg", // <-- URL de la imagen 4
            descripcion: "Los pequeños momentos contigo son los que más valoro. 💖 " // <-- Descripción 4
        },
         {
            url: "imagenes/IMG_20250302_020751.jpg", // <-- URL de la imagen 1
            descripcion: "tu compañia es la mejor 😘" // <-- Descripción 1
        },
    
         {
            url: "imagenes/IMG_20250719_232526.jpg", // <-- URL de la imagen 1
            descripcion: " Una noche magica a tu lado 💞 " // <-- Descripción 1
        },
        // Puedes agregar más imágenes aquí, solo copia y pega el formato de arriba.
    ];

    // -----------------------------------------------------------------
    // ⚙️ LÓGICA DEL PROGRAMA (No es necesario editar de aquí en adelante)
    // -----------------------------------------------------------------

    // Cargar contenido dinámico
    document.getElementById('main-message').textContent = config.titulo;
     document.getElementById('sunflower-image-container').style.backgroundImage = `url('${config.imagenPrincipal}')`;
    document.getElementById('love-message').textContent = config.mensajeAmor;
    document.getElementById('thanks-button').textContent = config.botonAgradecimiento;
    document.getElementById('gift-button').textContent = config.botonRegalo;

    const galleryGrid = document.getElementById('gallery-grid');
    galeriaDeImagenes.forEach(imagen => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = imagen.url;
        img.alt = 'Recuerdo';
        
        const caption = document.createElement('p');
        caption.className = 'caption';
        caption.textContent = imagen.descripcion;

        item.appendChild(img);
        item.appendChild(caption);
        galleryGrid.appendChild(item);
    });

    // Funcionalidad del sobre
    const envelopeContainer = document.getElementById('envelope-container');
    const contentContainer = document.getElementById('content-container');
    const openButton = document.getElementById('open-button');
    const lid = document.querySelector('.lid');

    openButton.addEventListener('click', () => {
        lid.style.transform = 'rotateX(180deg)';
        setTimeout(() => {
            envelopeContainer.style.opacity = '0';
            envelopeContainer.style.transform = 'translateY(-50px)';
            contentContainer.style.display = 'block';
            
            setTimeout(() => {
                contentContainer.classList.add('active');
                envelopeContainer.style.display = 'none';
            }, 1000);
        }, 500);
    });

    // Botones del pie de página
    const thanksButton = document.getElementById('thanks-button');
    const giftButton = document.getElementById('gift-button');

    thanksButton.addEventListener('click', () => {
        alert(config.alertaAgradecimiento);
    });

    giftButton.addEventListener('click', () => {
        alert(config.alertaRegalo);
    });
});