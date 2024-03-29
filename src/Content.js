import Hero_icon from "@/assets/images/Hero/person.png";

import figma from "@/assets/images/Skills/figma.png";
import html from "@/assets/images/Skills/html.png";
import css from "@/assets/images/Skills/css.png";
import tailwind from "@/assets/images/Skills/tailwind.png";
import reactjs from "@/assets/images/Skills/react.png";
import javascript from "@/assets/images/Skills/javascript.png";
import mysql from "@/assets/images/Skills/mysql.png";
import git from "@/assets/images/Skills/git.png";

import uismarket from "@/assets/images/Projects/uismarket.png";
import flamma from "@/assets/images/Projects/flamma.png";
import todo from "@/assets/images/Projects/todo.png";
import mascotas from "@/assets/images/Projects/logo_huellita1.png";
import pokemon from "@/assets/images/Projects/pokemon.png";
import starwars from "@/assets/images/Projects/starwars.png";
import peliculas from "@/assets/images/Projects/peliculas.png";
import carrito from "@/assets/images/Projects/carrito.png";
import MD from "@/assets/images/Projects/MD.png";
import calculator from "@/assets/images/Projects/calc.png";
import quote from "@/assets/images/Projects/quote.png";
import reloj from "@/assets/images/Projects/reloj.png";
import DM from "@/assets/images/Projects/DM.png";
import person_project from "@/assets/images/Hero/person.png";


export const content = {
  hero: {
    title: "Dessarrolladora web",
    title_en: "Web Developer",
    firstName: "JENNY",
    LastName: "SANTAMARÍA",
    image: Hero_icon,
    hero_content:
    {
      title: "Ingeniera de sistemas",
      text: "Universidad Industrial de Santander",
    },
    hero_content_en:
    {
      title: "Systems Engineer",
      text: "Universidad Industrial de Santander",
    }
  },
  skills: {
    title: "Habilidades",
    title_en: "Skills",
    skills_content: [
      {
        name: "React.js",
        logo: reactjs,
      },
      {
        name: "HTML",
        logo: html,
      },
      {
        name: "Css",
        logo: css,
      },
      {
        name: "Tailwind Css",
        logo: tailwind,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
      {
        name: "MySQL",
        logo: mysql,
      },
      {
        name: "GIT",
        logo: git,
      },
      {
        name: "Figma",
        logo: figma,
      },
    ],
  },
  Projects: {
    title: "Proyectos",
    title_en: "Projects",
    image: person_project,
    project_content: [
      {
        id:1,
        color: "uismarket",
        image: uismarket,
        description: "Proyecto de grado: e-commerce donde los emprendedores de la Universidad Industrial de Santander podrían vender sus productos.",
        description_en: "Degree project: e-commerce website where entrepreneurs from the Universidad Industrial de Santander could sell their products.",
        color_description: "white",
        url: "https://github.com/Caceres-Santamaria/UisMarket",
        technologies: ["Laravel", "TailwindCss", "MySQL"],
        flip: false
      },
      {
        id:2,
        color: "black",
        image: flamma,
        description: "Sitio web de e-commerce para el emprendimiento Flamma.",
        description_en: "E-commerce website for the Flamma entrepreneurship.",
        color_description: "white",
        url: "https://github.com/jmsr06/Flamma",
        technologies: ["Laravel", "TailwindCss", "MySQL" ],
        flip: false
      },
      {
        id:3,
        color: "white",
        image: todo,
        description: "Lista de tareas para organizar tu día por horas. tareas completadas y tareas pendientes.",
        description_en: "To do list to organize your day by hours, completed tasks, pending tasks.",
        color_description: "black",
        url: "https://to-do-list1-react.netlify.app",
        technologies: ["ReactJs", "TailwindCss" ],
        flip: false
      },
      {
        id:4,
        color: "white",
        image: mascotas,
        description: "Sitio web donde puedes publicar mascotas en adopción, mascotas perdidas y mascotas encontradas.",
        description_en: "Website where you can post pets for adoption, lost pets and found pets.",
        color_description: "black",
        url: "https://github.com/jmsr06/mascotas",
        technologies: ["ReactJs", "TailwindCss", "Nodejs", "MySQL" ],
        flip: false
      },
      {
        id:5,
        color: "black",
        image: MD,
        description: "Previsualizador de Markdown",
        description_en: "Markdown Previewer project",
        color_description: "white",
        url: "https://markdown-previewer-react-sass.netlify.app/",
        technologies: ["ReactJs", "Sass"],
        flip: false
      },
      {
        id:6,
        color: "white",
        image: calculator,
        description: "Calculadora que tiene las cuatro funciones estándar para suma, resta, multiplicación y división.",
        description_en: "Calculator that has the four standard functions for addition, subtraction, multiplication, and division.",
        color_description: "black",
        url: "https://calculator-react-fcc.netlify.app",
        technologies: ["ReactJs", "TailwindCss"],
        flip: false
      },
      {
        id:7,
        color: "white",
        image: reloj,
        description: "Reloj que permite programar un tiempo de ejecución de trabajos y un tiempo de descanso con aviso sonoro.",
        description_en: "Clock that allows programming a job execution time and a rest time with an audible warning.",
        color_description: "black",
        url: "https://pomodoro-timer-react-js.netlify.app",
        technologies: ["ReactJs", "TailwindCss"],
        flip: false
      },
      {
        id:8,
        color: "white",
        image: DM,
        description: "Este proyecto permite realizar patrones de ritmo mediante un generador de sonidos de instrumentos.",
        description_en: "This project allows you to make rhythm patterns using an instrument sound generator.",
        color_description: "black",
        url: "https://drum-machine-js.netlify.app",
        technologies: ["ReactJs", "TailwindCss"],
        flip: false
      },
      {
        id:9,
        color: "white",
        image: carrito,
        description: "Catálogo de productos y carrito de compras.",
        description_en: "Product catalog and shopping cart.",
        color_description: "black",
        url: "https://react-shopping-cart-js.netlify.app",
        technologies: ["ReactJs", "TailwindCss"],
        flip: false
      },
      {
        id:10,
        color: "white",
        image: pokemon,
        description: "Búsqueda de pokemones y su descripción, implementando scroll infinito, buscador y ventana modal.",
        description_en: "Search for pokemons and their description, implementing infinite scroll, search engine and modal window.",
        color_description: "black",
        url: "https://info-pokemons.netlify.app",
        technologies: ["ReactJs", "TailwindCss" ],
        flip: false
      },
      {
        id:11,
        color: "white",
        image: peliculas,
        description: "Búsqueda de películas y su año de lanzamiento consumiento OMDb API, implementando paginación y ordenamiento.",
        description_en: "Search for movies and their release year using OMDb API, implementing paging and sorting.",
        color_description: "black",
        url: "https://react-buscador-peliculas.netlify.app/",
        technologies: ["ReactJs", "TailwindCss" ],
        flip: false
      },
      {
        id:12,
        color: "white",
        image: quote,
        description: "Frases aleatorias para publicar en Twitter.",
        description_en: "Random phrases to post on Twitter.",
        color_description: "black",
        url: "https://react-random-quote-machine-js.netlify.app/",
        technologies: ["ReactJs", "Css" ],
        flip: false
      },
      {
        id:13,
        color: "black",
        image: starwars,
        description: "Búsqueda de personajes de Star Wars y su descripción, implementando paginación y buscador.",
        description_en: "Search for star wars characters and their description, implementing pagination and search engine.",
        color_description: "white",
        url: "https://star-wars-character-list.netlify.app",
        technologies: ["ReactJs", "TailwindCss" ],
        flip: false
      }
    ],
  },
  Contact: {
    title: "Contáctame",
    title_en: "Contact Me",
    social_media: [
      {
        text: "jennysantamaria06@gmail.com",
        icon: 'fa-solid fa-envelope',
        link: "mailto:jennysantamaria06@gmail.com",
      },
      {
        text: "Jenny Marcela Santamaría Rincón",
        icon: 'fa-brands fa-linkedin',
        link: "https://linkedin.com/in/jenny-marcela-santamaría-rincón-537022237",
      },
      {
        text: "jmsr06",
        icon: 'fa-brands fa-github',
        link: "https://github.com/jmsr06",
      },
    ],
  },
};
