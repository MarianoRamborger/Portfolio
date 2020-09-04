import criadero from './Images/Maltes.jpg'
import yayta from './Images/Yata.jpg'
import metodos from './Images/Metodos.png'
import lanas from './Images/Lanas.jpg'

const experiences = [
    {
        id : ` Lo de Vilma `,
        link: "https://lodevilma.netlify.app/",
        image: "./Videos/vilma.mp4",
        desc: "La mejor pizza que probé en años. En serio.",
        comment: "Me dijeron que querían un sitio web muy animado.",
        video: true
       
    },
    {
        id : `Lanas Maradans`,
        link: "https://lanasmaradans.netlify.app/",
        image: lanas,
        desc: "Un negocio de venta de lana altamente orientado al cliente.",
        comment: "Me dieron libertad de diseño casi absoluta!",
        video: false

    }
    ,
    {
        id : `Criadero "Copos de nieve"`,
        link: "https://www.maltescopodenieve.com.ar/",
        image: criadero,
        desc: "Criadero de Malteses.",
        comment: "Utilicé el SDK de facebook para \n incorporar su messenger a la página.",
        video: false
    },
    {
        id: "Ya&Ta",
        image: yayta,
        link: "https://yayta.netlify.app/",
        desc: 'Tienda online, hecha con el stack MERN. Versión demo..',
        comment: `Me permitió manejar estados complejos, registro/validación de usuarios y sesiones. Use la API de Mercadolibre y ATLAS de MongoDB.`,
        video: false
    },
    {
        id: "Metodos Psicofisiológicos",
        image: metodos,
        link: "https://metodospsicofisiologicos.netlify.app/",
        desc: "Pagina sencilla para la materia de la que soy parte.",
        comment: "SAP en javascript puro. Como la mayoria de los estudiantes acceden desde sus celulares, un diseño sencillo era crucial.",
        video: false

    }
]

export default experiences