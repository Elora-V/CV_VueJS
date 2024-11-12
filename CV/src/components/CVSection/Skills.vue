<template>
    <div class="container-flex text-vertical-div">

        <!--Description-->
        <div class="description">
            <div class="title-vertical-div">Profil</div>
            Je suis ingénieur d'études en bio-informatique, et j’ai un
            fort intérêt pour le développement web, 
            les bases de données et l’algorithmique.
        </div>

        
        <!-- Skills -->
        <div>
            <div class="title-vertical-div">Compétences Informatiques</div>
            <ul class="list point-list">
                <SkillDetail v-for="skill in skills" :skill="skill"/>
            </ul>
        </div>

        <!-- Other Skills -->
        <div>
            <div class="title-vertical-div">Autres compétences</div>
            <ul class="list point-list">
                <SkillDetail v-for="skill in otherSkills" :skill="skill"/>
            </ul>
        </div>

        <!--Languages-->
        <div>
            <div class="title-vertical-div">Langues</div>
                <ul class="list point-list">
                    <LanguageDetails v-for="language in languages" :language="language"/>
                </ul>
        </div>
        
    </div>     
</template>

<script lang="ts" setup>
import {skills, otherSkills,languages} from "@/data/Skills"
import SkillDetail from "../ListItem/SkillDetail.vue";
import LanguageDetails from "../ListItem/LanguageDetails.vue";
</script>

<style scoped>

.container-flex {
    padding: 10% 6%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-top: 5%;
}

.description {
    text-align: justify;
}

.title-vertical-div {
    font-size: 1.2rem;
    font-weight: 700;
    padding-bottom: 6%;
}

.text-vertical-div {
    color: var(--text-vertical-div);
    font-size: 1rem;
}

.list {
    display: flex;
    flex-direction: column;
    gap: 5px; /* Small gap to save space */
    list-style-type: none; /* Remove default bullet points */
    padding: 0;
    margin: 0 7%;
}

.point-list li {
    display: flex;
    align-items: flex-start; /* Align items to the top of the container */
    font-size: 1.1rem; /* Slightly smaller font for compactness */
    gap: 6px; /* Space between icon and text */
}


</style>