import type { JobDetails } from "@/models/JobDetails";

export const formations:JobDetails[]=[
    {
        title:"Formation Git",
        display:true,
        firm:"Université Paris-Saclay",
        location:"Orsay",
        date:"19-21 novembre 2025",
    },
    {
        title:"Formation Développement FrontEnd Vue.js",
        display:true,
        firm:"DAWAN",
        location:"Toulouse",
        date:"21-25 octobre 2024",
        tech_skills:["Base Vue.js","Animations","Vue Router","Vuex","Axios"],
    },
    {
        title:"Master Bio-informatique",
        display:true,
        firm:"Université Paris-Saclay",
        location:"Orsay",
        date:"2022-2024",
        tech_skills:["Base de données (SQL)","Python","R","Java","bash","C","Django","Git",
            "Statistiques","Informatique théorique", "Biologie structurale","Analyse -omiques"
        ]
    },
    {
        title:"Double licence Biologie-Mathématiques",
        display:true,
        firm:"Université Paris-Saclay",
        location:"Orsay",
        date:"2019-2022",
        tech_skills:["R","C++","Statistiques","Algèbre linéaire","Calcul différentiel et intégral",
            "Biologie cellulaire","Biologie moléculaire",
            "Génétique des populations","Génétique",
        ]
    },
]

/**
 * {
        title:"Master Bio-informatique",
        display:true,
        firm:"Université Paris-Saclay",
        location:"Orsay",
        date:"2022-2024",
        skills:["Base de données","Python","R","Java","bash","C","Django","Git","Nextflow",
            "Statistiques","Informatique théorique", "Biologie structurale","NGS","Analyse -omiques"
        ]
    },
    {
        title:"Double licence Biologie-Mathématiques",
        display:true,
        firm:"Université Paris-Saclay",
        location:"Orsay",
        date:"2019-2022",
        skills:["R","C++","Statistiques","Algèbre linéaire","Calcul différentiel et intégral",
        "Biologie cellulaire","Biologie moléculaire","Biologie Animale/Végétale",
        "Génétique des populations","Génétique","Biochimie",
        "Ecologie","Evolution"
    ]
    },
 */