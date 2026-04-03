import type { LanguageDetails } from "@/models/LanguageDetails";
import type { SkillDetails } from "@/models/SkillDetails";

export const pro_skills:SkillDetails[]=[
    //{skill:"Sérieux"},
    {skill:"Rigueur"},
    {skill:"Sens du détail"},
    {skill:"Esprit d'analyse"},
    //{skill:"Ponctualité"},
    //{skill:"Organisation"},
    {skill:"Travail en équipe"},
    {skill:"Adaptabilité"},
    {skill:"Curiosité technique"},
    //{skill:"Autonomie"},

];

export const technical_skills:SkillDetails[]=[
    {title:"Developpement web",skill:"HTML, CSS, Javascript/Typescript"},
    {title:"Front",skill:"Vue.js, Vuetify, Nuxt, Nuxt UI"},
    {title:"Back", skill:"Python, Django, FastAPI"},
    {title:"Base de données",skill:"SQL"},
    {skill:"Git, Gitlab"}
    //{title:"Test",skill:"Jest"},
];

export const otherSkills:SkillDetails[]=[
    // {skill:"Git"},
    // {title:"Informatique théorique :",
    //    skill:"Graphes"},
    // {skill:"LateX"}
];

export const languages:LanguageDetails[]=[
    {language:"Français", level:"langue maternelle"},
    {language:"Anglais",level:"B2"}
]