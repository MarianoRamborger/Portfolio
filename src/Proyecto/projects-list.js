import criadero from './Images/Maltes.jpg'
import yayta from './Images/Yata.jpg'
import metodos from './Images/Metodos.png'
import lanas from './Images/Lanas.jpg'

const experiences = [
    {
        id : ` Maradans - Yarns `,
        link: "https://lanasmaradans.netlify.app/",
        image: lanas,
        desc: "A highly personalized and customer-oriented yarn shop.",
        comment: "They gave me near-absolute design freedom!"
    },
    {
        id : ` Dog breeder - "Snowflakes" `,
        link: "https://www.maltescopodenieve.com.ar/",
        image: criadero,
        desc: "A breeder specializing in Maltese dogs.",
        comment: "I used facebook's SDK to implement their messenger."
       
    },
    {
        id: "Ya&Ta",
        image: yayta,
        link: "https://yayta.netlify.app/",
        desc: 'My first e-shop. Lovingly made with the MERN stack. Demo version.',
        comment: "This project gave me the chance to manage complex states and user validation. I also made friends with Mercadolibre's API and MongoDB's ATLAS."
    },
    {
        id: "Metodos Psicofisiológicos",
        image: metodos,
        link: "https://metodospsicofisiologicos.netlify.app/",
        desc: "A simple webpage, made for the university course I teach in.",
        comment: "A SAP using vainilla javascript. Since most students connect from their cellphones, a simple design was paramount."
    }
]

export default experiences