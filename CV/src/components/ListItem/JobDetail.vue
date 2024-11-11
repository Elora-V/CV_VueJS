<template>
   <!-- if Experience-->
  <div v-if="!smallJob" class="container">
    <div class="title">
      {{ jobDetails.title }}
      <span v-if="jobDetails.firm"> | {{ jobDetails.firm }}</span>
      <span v-if="jobDetails.firm && jobDetails.team" class="soft-text"> Equipe {{ jobDetails.team }}</span>
    </div>

    <div v-if="jobDetails.location || jobDetails.date" class="tags">
      <div v-if="jobDetails.location" class="soft-text">
        <span class="material-icons">location_on</span>
        {{ jobDetails.location }}
      </div>
      <div v-if="jobDetails.date" class="soft-text">
        <span class="material-icons">calendar_month</span>
        {{ jobDetails.date }}
      </div>
    </div>

    <div v-if="jobDetails.skills" class="tags">
      <div v-for="skill in jobDetails.skills" :key="skill" class="tag skill">{{ skill }}</div>
    </div>

    <div class="description">
      {{ jobDetails.description }}
    </div>
  </div>

  <!--if Small experience-->
  <div v-else class="small-container">
    <div class="small-title">
      {{ jobDetails.title }}
    </div>  
    <div v-if="jobDetails.date" class="soft-text">
        <span class="material-icons">calendar_month</span>
        {{ jobDetails.date }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { JobDetails } from "@/models/JobDetails"

const props = defineProps<{
  jobDetails: JobDetails,
  smallJob : boolean
}>()

</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0% 2%;
}

.small-container {
  display: flex;
  align-items: flex-start;
  padding: 0% 2%;
  gap: 10px;
}

.title {
  font-size: 1rem;
  font-weight: 600;
  margin: 1% 0%;
}

.small-title {
  font-size: 0.85rem;
  font-weight: 600;
  margin: 0% 0%;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.material-icons {
  font-size: 16px; /* Reduce icon size */
  vertical-align: middle; /* Align with text */
}

.tag {
  background-color: var(--light-grey-bg);
  border-radius: 12px;
  padding: 2px 8px;
  font-size: 0.8rem;
  color: #333;
  display: flex;
  align-items: center;
}

.soft-text {
  color: #6f6f6f;
  font-size: small;
}

.description {
  text-align: justify;
  font-size: 0.9rem;
  color: #333;
  margin-top: 1%;
}
</style>
