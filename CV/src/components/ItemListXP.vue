<template>
    <div class="container">
        <div class="title">
            {{ title }} <span v-if="firm"> | {{ firm }}</span>
        </div>  

        <div v-if="location || date" class="tags">
            <div v-if="location" class="tag location">{{ location }}</div>
            <div v-if="date" class="tag date">{{ date }}</div>
        </div>
  
        <div class="description"><slot></slot></div>

    </div>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
title: string
firm?: string
location?: string
date?: string
description?: string
}>()
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column; 
  padding: 1% 2%;
  margin: 2% 3%;
  align-items: flex-start;
}

.title{
    font-size: large;
    font-weight: 600;
    margin: 1% 2%;
}

.tags {
display: flex;
gap: 10px;
align-items: start;
}

.tag {
background-color: #d1d0d0;
border-radius: 12px;
padding: 4px 8px;
font-size: 0.875rem;
color: #333;
}

.description {
text-align: justify;
font-size: 1rem;
color: #333;
margin-top: 8px;
}
</style>
