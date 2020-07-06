import criadero from '../Proyecto/criaderoPic.png'
import yayta from '../Proyecto/yaytaPic.png'
import metodos from '../Proyecto/metodosPic.png'

const experiences = [
    {
        id : `Criadero "Copos de nieve"`,
        link: "https://criaderocopodenieve.netlify.app/",
        image: criadero,
        desc: "Criadero de Malteses. La presentada es la versión demo.",
        comment: "Utilicé el SDK de facebook para incorporar su messenger a la página. Además, esta web me permitió ejercitar mi creatividad. Solo me indicaron la estructura, y que debía tener como fondo la imagen de los gorriones. "
    },
    {
        id: "Ya&Ta",
        image: yayta,
        link: "https://yayta.netlify.app/",
        desc: 'Mi primera e-shop, hecha con el stack MERN. La presentada es la versión demo.',
        comment: "Este proyecto me dio la oportunidad de manejar estados complejos e implementar registro de usuarios y sesiones. Aprendí a utilizar la API de Mercadolibre y el servicio ATLAS de mongoDB."
    },
    {
        id: "Metodos Psicofisiológicos",
        image: metodos,
        link: "https://metodospsicofisiologicos.netlify.app/",
        desc: "Una página sencilla para la materia universitaria de la que soy parte.",
        comment: "Quería hacer una SAP en javascript puro. Como la mayoria de los estudiantes acceden desde sus celulares, un diseño sencillo era crucial."
    }
]

export default experiences