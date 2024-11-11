import type { LanguageDetails } from "@/models/LanguageDetails";
import type { SkillDetails } from "@/models/SkillDetails";

export const skills:SkillDetails[]=[
    {skill:"Javascript/Typescript"},
    {skill:"HTML"},
    {skill:"CSS"},
    {title:"Framework web :",skill:"Vue.js, Django"},
    {skill:"SQL"},
    {skill:"Python"},
    {skill:"Java"},
    {skill:"R"},
    {skill:"Bash"}
];

export const otherSkills:SkillDetails[]=[
     {skill:"Git"},
     {title:"Statistiques :",
        skill:"Méthode de vraisemblance,\
        Régression, Classification"},
     {title:"Informatique théorique :",
        skill:"Graphes, Languages"},
     {skill:"LateX"}
];

export const languages:LanguageDetails[]=[
    {language:"Français", level:"langue maternelle"},
    {language:"Anglais",level:"B2"}
]