<template>
    <div class="container-flex text-vertical-div">

        <!--Description-->
        <div class="description">
            J’ai réalisé un Master spécialisé
            en bio-informatique, et j’ai un
            fort intérêt pour le développement web, 
            les bases de données et l’algorithmique.
        </div>

        
        <!-- Skills -->
        <div>
            <div class="title-vertical-div">Compétences Informatiques</div>
            <ul class="list point-list">
                <li v-for="skill in skills">
                    <span class="material-icons icon-align">chevron_right</span>
                    <div v-html="skill"></div>
                </li>
            </ul>
        </div>

        <!-- Other Skills -->
        <div>
            <div class="title-vertical-div">Autres compétences</div>
            <ul class="list point-list">
                <li v-for="skill in otherSkills">
                    <span class="material-icons icon-align">chevron_right</span>
                    {{ skill }}
                </li>
            </ul>
        </div>

        <!--Languages-->
        <div>
            <div class="title-vertical-div">Langues</div>

            
        </div>
        
    </div>     
</template>

<script lang="ts" setup>
import {skills, otherSkills} from "@/data/Skills"
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
    font-weight: 600;
    padding-bottom: 4%;
}

.text-vertical-div {
    color: var(--text-vertical-div);
    font-size: 1rem;
}

.list {
    display: flex;
    flex-direction: column;
    gap: 4px; /* Small gap to save space */
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

.icon-align {
    font-size: 1rem;
    align-self: flex-start; /* Align icon at the top of the li element */
    margin-top: 2px; /* Adjust for slight vertical alignment if needed */
}

</style>