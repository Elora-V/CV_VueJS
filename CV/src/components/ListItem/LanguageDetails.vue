<template>
    <li>
        <div class="container-language">
            <div class="language-skill">{{ language.language }}</div>
            <div>({{ language.level }})</div>
        </div>
    </li>
</template>

<script setup lang="ts">
import type { LanguageDetails } from '@/models/LanguageDetails';

const props=defineProps<{
  language: LanguageDetails,
}>()

</script>

<style scoped>

.container-language{
    display: flex;
    flex-wrap: wrap;
}
.language-skill{
    font-weight: 600;
    padding-right: 10px;
}
</style>