<template>
    <li>
        <span class="material-icons icon-align">chevron_right</span>
        <div>
            <span v-if="skill.title" class="title-skill">{{ skill.title }}</span>
            <div :class="{ 'title-skill': !skill.title }">{{ skill.skill }}</div>
        </div>
    </li>
</template>

<script setup lang="ts">
import type { SkillDetails } from '@/models/SkillDetails';

const props=defineProps<{
  skill: SkillDetails,
}>()

</script>

<style scoped>
.title-skill{
    font-weight: 600;
}


.icon-align {
    font-size: 1rem;
    align-self: flex-start; /* Align icon at the top of the li element : need to be in a flex column div */
    margin-top: 2px; /* Adjust for slight vertical alignment if needed */
}
</style>