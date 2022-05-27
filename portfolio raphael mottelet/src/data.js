import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoDiscord,
} from "react-icons/io5";
import img1 from "./images/thumb-fooddeliveryapp-reactjs-dec.png";
import img2 from "./images/thumb-fullstack-socialmedia-app-react-sanity.png";
import img3 from "./images/thumb-google-map-clone-nextjs-feb22.png";
import img4 from "./images/thumb-pinterest-clone-reactjs.png";
import img5 from "./images/thumb-videoblog-firebase-reactjs-feb-22.png";
import img6 from "./images/thumb-whatsappui-clone-nextjs.png";

import lvcbeauvais from "./images/projets LVC/lvcbeauvais.png"
import fmea from "./images/projets LVC/fmea.png"
import analysetechnique from "./images/projets LVC/analysetechnique.png"
import analysefonctionelle from "./images/projets LVC/analysefonctionelle.png"
import header1 from "./images/projets LVC/header1.png"
import header2 from "./images/projets LVC/header2.png"
import miniapi from "./images/projets LVC/miniapi.png"
import ovh from "./images/projets LVC/ovh.png"
import ecommerce1 from "./images/projets LVC/ecommerce1.png"
import redux from "./images/projets LVC/redux.png"
import gantt from "./images/projets LVC/gantt.png"

import cookoff from "./images/Projets perso/cookoff.png"
import medkit from "./images/Projets perso/medkit.png"
import three from "./images/Projets perso/three.png"
import todo from "./images/Projets perso/todo.png"



import promeo from "./images/Projets Promeo/promeo.png"
import minitwitter from "./images/Projets Promeo/promeo.png"
import ppe1 from "./images/Projets Promeo/ppe1.png"

export const Experience = [
  {
    id: 1,
    date: "mars 2022 - à ce jour",
    iconsSrc: <IoCodeWorking />,
    title: "Devellopement de la version ecommerce",
    location: "Entreprise : La Vie Claire Beauvais",
    description:
      "Création de modules de notation, communautaire, creation de compte, management produit, management publicités et communication sur le site, migration en ecommerce / Utilisation de technologies tel que: Redux, Django-rest-framework, PostgreSQL, Mysql",

  },
  {
    id: 2,
    date: "Janvier à Mars 2022",
    iconsSrc: <IoCodeWorking />,
    title: "Premiers prototypes API Django",
    location: "Entreprise : La Vie Claire Beauvais",
    description:
      "Choix de la base de donnée de production (entre MySQL et PostgreSQL), test de technologies pour le ecommerce, apprentissage de Redux.JS, Django, Python orienté object",
  },
  {
    id: 3,
    date: "Decembre 2021 - Janvier 2022",
    iconsSrc: <IoCodeWorking />,
    title: "Recherche d'un framework Backend, maintiens du site vitrine",
    location: "Entreprise : La Vie Claire Beauvais",
    description:
      "Recherche d'un framework approprié pour la création d'un CMS, mise à jour du contenu du site vitrine les3.bio",
  },
  {
    id: 4,
    date: "Juin 2021 - Novembre 2021",
    iconsSrc: <IoCodeWorking />,
    title: "Maintien et amélioration du site vitrine",
    location: "Entreprise : La Vie Claire Beauvais",
    description:
      "Amélioration du site vitrine dans sa version finale, correction des différents bug et création de contenus publicitaire et produits",
  },
  {
    id: 5,
    date: "Juin 2021",
    iconsSrc: <IoCodeWorking />,
    title: "Mise en Ligne du site vitrine",
    location: "Entreprise : La Vie Claire Beauvais",
    description:
      "Mise en ligne du site vitrine, et obtention d'un premier retour client sur l'utilisation du site",
  },
  {
    id: 6,
    date: "Mai 2021 - Juin 2021",
    iconsSrc: <IoCodeWorking />,
    title: "Choix de la plateforme d'hébergement et du DNS",
    location: "Entreprise : La Vie Claire Beauvais",
    description:
      "Choix de la plateforme d'hébergement OVHcloud, avec Système d'exploitation Debian11, paramétrage du serveur, implémentation de divers protocoles tel que Fail2ban, choix du DNS et liaison avec le serveur, instalation de NodeJS, création d'une structure de dossier afin d'implémenter rapidement les nouvelles version",
  },
  {
    id: 7,
    date: "Mai 2021 - Juin 2021",
    iconsSrc: <IoCodeWorking />,
    title: "Premier prototype du site vitrine",
    location: "Entreprise : La Vie Claire Beauvais",
    description:
      "Finalisation du premier prototype de site vitrine, prise en compte du premier retour utilisateur réalisé auprès des membres du personnel",
  },
  {
    id: 7,
    date: "Mars 2021",
    iconsSrc: <IoCodeWorking />,
    title: "Premier prototype du site vitrine",
    location: "Entreprise : La Vie Claire Beauvais",
    description:
      "Début du dévellopement du site vitrine La Vie Claire Beauvais, avec le framework ReactJS, implémentation de liens youtube, carousels avec slider manuel et automatique, création de pages en fonction des besoins, intégration de liens google map pour localiser le magasin, création de contenu via prise photographique du magasin et de ses produits. ",
  },
  {
    id: 7,
    date: "Décembre 2020 - Mars 2021",
    iconsSrc: <IoCodeWorking />,
    title: "Gestion de projet",
    location: "Entreprise : La Vie Claire Beauvais",
    description:
      "Expréssion des besoins du site, etablissement d'une chartre visuelle, creation de l'analyse fonctionelle et de l'analyse technique, création d'une gestion des risque FMEA, prévision des couts moyens du projet avec CUMP, création de l'analyse organique et du cahier de recette, gestion prévisionelle avec diagramme de Gantt, recherche des technologies les plus adaptés au besoin.",
  },
  {
    id: 7,
    date: "Mars 2021",
    iconsSrc: <IoCodeWorking />,
    title: "Novembre 2020 - Arrivée dans l'entreprise",
    location: "Entreprise : La Vie Claire Beauvais",
    description:
      "Prise de contact avec l'enssemble du personnel, période d'intégration, profilage de la catégorie de clientelle visée par le site, établissement des besoins de l'entreprise",
  },
];

export const Projects = [
  {
    id: 1,
    name: "Header et Animation 1",
    imageSrc: header1,
    techs: "Html5, CSS",
    github: "#",
  },
  {
    id: 2,
    name: "Header et Animation 2",
    imageSrc: header2,
    techs: "Html5, CSS",
    github: "#",
  },
  {
    id: 4,
    name: "Analyse de la clientelle",
    imageSrc: lvcbeauvais,
    techs: "Documentation",
    github: "#",
  },
  {
    id: 4,
    name: "Analyse prévisionelle du projet",
    imageSrc: gantt,
    techs: "Gantt Project",
    github: "#",
  },
  {
    id: 3,
    name: "Analyse technique",
    imageSrc: analysetechnique,
    techs: "Documentation",
    github: "#",
  },
  {
    id: 4,
    name: "Analyse fonctionelle",
    imageSrc: analysefonctionelle,
    techs: "Documentation",
    github: "#",
  },
  {
    id: 5,
    name: "Site Vitrine LVC V1",
    imageSrc: lvcbeauvais,
    techs: "ReactJS",
    github: "#",
  },
  {
    id: 6,
    name: "Site Vitrine LVC V2",
    imageSrc: lvcbeauvais,
    techs: "ReactJS",
    github: "#",
  },
  {
    id: 7,
    name: "Site Vitrine LVC V3",
    imageSrc: lvcbeauvais,
    techs: "ReactJS",
    github: "https://www.les3.bio/",
  },
  {
    id: 7,
    name: "Choix de l'hébergeur, serveur et DNS",
    imageSrc: ovh,
    techs: "ReactJS",
    github: "#",
  },
  {
    id: 8,
    name: "Mini API ecommerce",
    imageSrc: miniapi,
    techs: "Django, SQLite3",
    github: "#",
  },
  {
    id: 9,
    name: "Mini API + Redux",
    imageSrc: redux,
    techs: "ReactJS, Redux.JS, Django, django-rest-framework, SQLite3",
    github: "#",
  },
  {
    id: 10,
    name: "Site e-commerce V1",
    imageSrc: ecommerce1,
    techs: "ReactJS, Redux.JS, Django, django-rest-framework, MySQL",
    github: "https://www.les3.bio/",
  },
];

export const Promeo_Projects = [
  {
    id: 1,
    name: "PPE1",
    imageSrc: ppe1,
    techs: "Html5, CSS, PHP",
    github: "#",
  },
  {
    id: 2,
    name: "Projet CSIS",
    imageSrc: promeo,
    techs: "Html5, CSS",
    github: "https://promeo-formalion.fr/",
  },

  {
    id: 3,
    name: "Mini Meteo App",
    imageSrc: miniapi,
    techs: "Html5, CSS3, PHP",
    github: "#",
  },
  {
    id: 4,
    name: "Mini Twitter",
    imageSrc: minitwitter,
    techs: "ReactJS, PHP",
    github: "#",
  },
];

export const Personal_Projects = [
  {
    id: 1,
    name: "Projet 1 ThreeJS",
    imageSrc: three,
    techs: "ThreeJS, ReactJS, react-three-fiber",
    github: "#",
  },
  {
    id: 2,
    name: "Mini API gestion de produit",
    imageSrc: miniapi,
    techs: "Django, Django-Rest-Framework",
    github: "#",
  },
  {
    id: 4,
    name: "Todo APP",
    imageSrc: todo,
    techs: "ReactJS",
    github: "#",
  },
  {
    id: 5,
    name: "Cook-Off, app de cuisine",
    imageSrc: cookoff,
    techs: "ReactJS, ReactNative, Django",
    github: "#",
  },
  {
    id: 6,
    name: "Medkit, site de ressource de cours",
    imageSrc: medkit,
    techs: "ReactJS, Django",
    github: "#",
  },
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "https://github.com/raphael-mottelet",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoLinkedin className="text-textBase text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/raphael-mottelet-90b41523b/",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoDiscord className="text-textBase  text-3xl cursor-pointer" />
    ),
    name: "Discord",
    link: "https://discord.gg/5qyTYFtG",
  },

];
