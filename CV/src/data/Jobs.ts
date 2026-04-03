import type { JobDetails } from "@/models/JobDetails";

export const experiences:JobDetails[]=[
    {
        title:"Ingenieur full stack à l'IFB",
        display:true,
        firm:"Institut Francais de Bioinformatique",
        location:"Strasbourg, Institut de biologie moleculaire des plantes",
        date:"mars 2025 - février 2027",
        description:"Conception en équipe de l'application 'madbot' de gestion de données biologiques facilitant le travail de chercheurs.",
        pro_skills:["Methode Scrum","Intégration dans un projet","Création projet", "Présentation projet"],
        tech_skills:["Nuxt","Django","FastAPI"]
    },
    {
        title:"Ingenieur d'étude en bio-informatique",
        display:true,
        firm:"INRAE ToxAlim",
        location:"Toulouse, saint-martin-du-touch",
        date:"septembre-decembre 2024",
        description:"Transformation d’un prototype en outil exploitable : qualité du code, tests, intégration UI et documentation pour les développeurs.",
        pro_skills:["Gestion des priorités","Communication technique","Adaptabilité aux besoins utilisateurs"],
        tech_skills:["Typescript","Jest","Vue.js","Vuetify"],
    },
    {
        title:"Stage : Developpement d'un algorithme",
        display:true,
        firm:"INRAE ToxAlim",
        location:"Toulouse, saint-martin-du-touch",
        date:"mars-aout 2024",
        description:"Développement d’un algorithme de visualisation de réseaux métaboliques pour MetExplore.",
        pro_skills:["Logique","Esprit critique","Communication des résultats","Adaptation aux outils"],
        tech_skills:["Typescript","Théorie des graphes","Bibliographie"],
    },
    {
        title:"Stage : Modification d'interface web",
        display:true,
        firm:"INRAE",
        team:"MaIAGE",
        location:"Jouy-en-Josas",
        date:"mai-juin 2023",
        description:"Ajout d'une information de fiabilité des résultats dans la base \
        de données sur les micro-organismes de l'équipe, et intégration de l'information \
        dans l'interface web d'Omnicrobe.",
        pro_skills:["Adaptabilité aux besoins utilisateurs", "Intégration dans un projet", "Adaptation aux outils"],
        tech_skills:["HTML","CSS","Javascript","Python","Flask","SQL"],
    },
    {
        title:"TER : Etude reproductibilité des workflows",
        display:true,
        firm:"LISN",
        location:"Orsay",
        date:"octobre-decembre 2022",
        pro_skills:["Esprit d'analyse", "Communication des résultats","Rigueur scientifique"],
        tech_skills:["git","Python","Docker"],
        description : "Études et recherches sur la reproductibilité des workflows, \
        avec une évaluation comparative de graphes de workflows."
    },
    {
        title:"Stage : Etude comportementale chez les rats",
        display:true,
        firm:"NeuroPSI",
        location:"Orsay",
        date:"mai-juin 2021",
        pro_skills:["Rigueur scientifique","Analyse et communication de résultats"],
        tech_skills:["R","Bibliographie"],
        description:"Etude comportementale de l'estimation du temps \
        chez les rats : application de protocoles d'apprentissage \
        et analyse des résultats.",
    },
    
]


export const smallExperiences:JobDetails[]=[
    {
        title:"Caissière",
        firm:"Intermaché",
        display:false,
        location:"Gif-sur-Yvette",
        date:"aout 2023",
        pro_skills:["Service client","Rigueur et respect des consignes","Gestion de situations imprévues"],
        description:"Gestion d'une caisse avec espèces, facing (réorganisation des produits pour les rendre plus visibles) des rayons occasionnel.",
    },
    {
        title:"Vacataire surveillance concours oraux",
        firm:"ENS",
        display:false,
        location:"Gif-sur-Yvette",
        date:"juin 2022",
        pro_skills:["Organisation logistique","Gestion du temps","Rigueur et respect des consignes"],
        description:"Gestion des émargements, gestion et surveillence de la salle d'examen, et orientation des candidats dans les locaux.",
    },
    {
        title:"Caissière",
        firm:"Intermaché",
        display:false,
        location:"Gif-sur-Yvette",
        date:"aout 2021",
        pro_skills:["Relation et service client", "Rigueur et respect des consignes"],
        description:"Gestion d'une caisse sans espèces.",
    },
    {
        title:"Stage en Bibliothèque",
        display:false,
        location:"Chevreuse",
        date:"2 semaines en juin 2017",
        pro_skills:["Organisation logistique","Sens du service et relation usager"],
        description:"Rangement, trie, préparation et prêt de livres.",
    },
];