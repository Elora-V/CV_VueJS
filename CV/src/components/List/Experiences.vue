<template>
    <div class="container-main">

        <div class="title"> Expériences </div>
        <div class="flex-col">
            <JobDetail v-for="(experience, index) in experiences" :key="index"
            :job-details="experience"
            >
            <div v-html="experience.description"></div>
            </JobDetail>
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
    gap:8px;
}
</style>