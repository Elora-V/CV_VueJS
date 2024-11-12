import type { JobDetails } from "@/models/JobDetails";

export const experiences:JobDetails[]=[
    {
        title:"Ingenieur d'étude",
        display:true,
        firm:"INRAE ToxAlim",
        team:"MeX",
        location:"Toulouse, saint-martin-du-touch",
        date:"septembre-decembre 2024",
        skills:["Typescript","Jest","Vue.js","Vuetify"],
        description:"Rendre disponible un algorithme de dessin de graphe en typescript: nettoyage de code, tests unitaires,\
        documentation, packaging. L'intégrer à un outil de visualisation créé par l'équipe \
        en réalisant un panel utilisateur avec Vue.js."
    },
    {
        title:"Stage : Developpement d'un algorithme",
        display:true,
        firm:"INRAE ToxAlim",
        team:"MeX",
        location:"Toulouse, saint-martin-du-touch",
        date:"mars-aout 2024",
        skills:["Typescript","Théorie des graphes","Bibliographie"],
        description:"Développement en TypeScript d'un algorithme de dessin de graphes, adapté aux réseaux métaboliques.\
        Cet algorithme prend en entrée un graphe représentant le réseau métabolique et modifie les positions des nœuds.\
        Il s'appuie sur la bibliothèque GraphViz et utilise des concepts de théorie des graphes."
    },
    {
        title:"Stage : Modification d'interface web",
        display:true,
        firm:"INRAE",
        team:"MaIAGE",
        location:"Jouy-en-Josas",
        date:"mai-juin 2023",
        skills:["HTML","CSS","Javascript","Python","Flask","SQL"],
        description:"Ajout d'une information de fiabilité des résultats dans la base \
        de données sur les micro-organismes de l'équipe, et intégration de l'information \
        dans l'interface web d'Omnicrobe réalisé avec le framework Flask."
    },
    {
        title:"TER : Etude reproductibilité des workflows",
        display:true,
        firm:"LISN",
        location:"Orsay",
        date:"octobre-decembre 2022",
        skills:["git","Python","Docker"],
        description : "Études et recherches sur la reproductibilité des workflows, \
        avec une évaluation comparative des graphes de workflows Nextflow disponibles sur GitHub \
        afin d'analyser la réutilisation de leurs étapes."},
    {
        title:"Stage : Etude comportementale chez les rats",
        display:true,
        firm:"NeuroPSI",
        team: "Mémoire, émotion, et temps",
        location:"Orsay",
        date:"mai-juin 2021",
        skills:["R","Bibliographie"],
        description:"Etude comportementale de l'estimation du temps \
        chez les rats : application de protocoles d'apprentissage \
        et analyse des résultats pour déterminer le passage au protocole suivant.",
    },
]

export const smallExperiences:JobDetails[]=[
    {
        title:"Caissière en supermarché",
        date:"aout 2021, aout 2023",
        display:false
    },
    {
        title:"Vacataire surveillance concours ENS",
        date:"juin 2022",
        display:false
    },
    {
        title:"Stage en bibliothèque",
        date:"juin 2017",
        display:false,
    }
]