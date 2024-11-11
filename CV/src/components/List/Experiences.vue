<template>
    <div class="container-main">

        <div class="title"> Expériences </div>
         <!--Experiences-->
        <div class="flex-col">
            <JobDetail v-for="(experience, index) in experiencesToDisplay" :key="index"
            :job-details="experience"
            :small-job="false"
            >
            <div v-html="experience.description"></div>
            </JobDetail>
        </div>

        <br v-if="smallExperiencesToDisplay.length>0">

        <!--Small experiences-->
        <div class="small-flex-col">
        <JobDetail v-for="(experience, index) in smallExperiencesToDisplay" :key="index"
            :job-details="experience"
            :small-job="true"
            />
        </div>

        <br>

        <div class="title"> Formations </div>
        <div class="flex-col">

        </div>

    </div>
</template>


<script setup lang="ts">
import JobDetail from "../ListItem/JobDetail.vue"
import {experiences} from "@/data/Jobs"
import {smallExperiences} from "@/data/Jobs"

const experiencesToDisplay=experiences.filter(job=> job.display);
const smallExperiencesToDisplay=smallExperiences.filter(job=> job.display);

</script>

<style scoped>

.container-main{
    padding: 2%;
}
.title{
    font-size: larger;
    font-weight: 800;
    margin-bottom: 1%;
    background-color: var(--light-grey-bg);
}

.flex-col{
    display: flex;
    flex-direction: column;
    gap:0px;
}

.small-flex-col{
    display: flex;
    flex-direction: column;
    gap:2px;
}
</style>