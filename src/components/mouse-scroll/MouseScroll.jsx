import { useEffect } from 'react';

const MouseScroll = () => {
    useEffect(() => {
        const handleScroll = () => {
            const mouseScroll = document.querySelector('.mouse-scroll');

            // Define un rango de desplazamiento para afectar la opacidad (ejemplo: 0 a 500px)
            const maxScroll = 100; // Cambia esto según la altura de tu contenido
            const scrollY = window.scrollY;

            // Calcula la opacidad basada en el desplazamiento
            let opacity = 1 - scrollY / maxScroll;
            if (opacity < 0) opacity = 0; // No permitas opacidades negativas

            // Aplica la opacidad calculada
            mouseScroll.style.opacity = opacity;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Limpia el evento
    }, []);

    return <div className="mouse-scroll"></div>;
};

export default MouseScroll;