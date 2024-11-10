import type { JobDetails } from "@/models/JobDetails";

export const experiences:JobDetails[]=[
    {
        title:"Ingenieur d'étude",
        firm:"INRAE",
        team:"MeX",
        location:"Toulouse, saint-martin-du-touch",
        date:"septembre-decembre 2024",
        skills:["Typescript","Jest","Vue.js","Vuetify"],
        description:"Rendre disponible un algorithme : tests unitaires,\
        documentation, packaging et panel utilisateur."
    },
    {
        title:"Stage : Developpement d'un algorithme",
        firm:"INRAE",
        team:"MeX",
        location:"Toulouse, saint-martin-du-touch",
        date:"mars-aout 2024",
        skills:["Typescript","Théorie des graphes","Bibliographie"],
        description:"Developpement d'un algorithme de dessin de graphe \
        adapté aux réseaux métaboliques."
    },
    {
        title:"Stage : Modification d'interface web",
        firm:"INRAE",
        team:"MaIAGE",
        location:"Jouy-en-Josas",
        date:"mai-juin 2023",
        skills:["HTML","CSS","Javascript","Python","Flask","SQL"],
        description:"Intégration d'une information de fiabilité dans la base \
        de données et dans l'interface web d'Omnicrobe."
    },
    {
        title:"TER : Etude reproductibilité des workflows",
        firm:"LISN",
        location:"Orsay",
        date:"octobre-decembre 2022",
        skills:["git","Python","Docker"],
        description:"Travaux d'Etude et de Recherche sur l'évaluation de \
        la reproductibilité des workflows Nextflow présent sur github."
    },
    {
        title:"Stage : Etude comportementale chez les rats",
        firm:"NeuroPSI",
        team: "Mémoire, émotion, et temps",
        location:"Orsay",
        date:"mai-juin 2021",
        skills:["R","Bibliographie"],
        description:"Etude comportementale de l'estimation du temps \
        chez les rats."
    }

]