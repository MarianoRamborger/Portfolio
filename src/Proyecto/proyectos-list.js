import criadero from '../Proyecto/criaderoPic.png'
import yayta from '../Proyecto/yaytaPic.png'
import metodos from '../Proyecto/metodosPic.png'

const experiences = [
    {
        id : `Criadero "Copos de nieve"`,
        link: "https://www.maltescopodenieve.com.ar/",
        image: criadero,
        desc: "Criadero de Malteses.",
        comment: "Utilicé el SDK de facebook para \n incorporar su messenger a la página."
    },
    {
        id: "Ya&Ta",
        image: yayta,
        link: "https://yayta.netlify.app/",
        desc: 'Tienda online, hecha con el stack MERN. Versión demo..',
        comment: `Me permitió manejar estados complejos, registro/validación de usuarios y sesiones. Use la API de Mercadolibre y ATLAS de MongoDB.`
    },
    {
        id: "Metodos Psicofisiológicos",
        image: metodos,
        link: "https://metodospsicofisiologicos.netlify.app/",
        desc: "Pagina sencilla para la materia de la que soy parte.",
        comment: "SAP en javascript puro. Como la mayoria de los estudiantes acceden desde sus celulares, un diseño sencillo era crucial."
    }
]

export default experiences