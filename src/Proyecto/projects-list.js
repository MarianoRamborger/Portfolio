import criadero from '../Proyecto/criaderoPic.png'
import yayta from '../Proyecto/yaytaPic.png'
import metodos from '../Proyecto/metodosPic.png'

const experiences = [
    {
        id : ` Dog breeder - "Snowflakes" `,
        link: "https://criaderocopodenieve.netlify.app/",
        image: criadero,
        desc: "Maltese dogs. Demo version.",
        comment: "I used facebook's SDK to implement their messenger."
       
    },
    {
        id: "Ya&Ta",
        image: yayta,
        link: "https://yayta.netlify.app/",
        desc: 'My first e-shop. Lovingly made with the MERN stack.. Demo version.',
        comment: "This project gave me the chance to manage complex states and user validation. I also made friends with Mercadolibre's API and MongoDB's ATLAS."
    },
    {
        id: "Metodos Psicofisiológicos",
        image: metodos,
        link: "https://metodospsicofisiologicos.netlify.app/",
        desc: "A simple webpage, made for the university course I teach in.",
        comment: "I wanted to make a SAP using only vainilla javascript. Since most students connect from their cellphones, a simple design was paramount."
    }
]

export default experiences