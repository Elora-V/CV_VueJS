<template>
    <div class="container">
      <div class="name">
        <h2>Elora Vigo</h2>
      </div>
  
      <div class="contacts">
        <h3>Contact</h3>
        <ul>
          <li v-for="(contact, index) in contacts" :key="index" class="contact-item">
            <div v-if="contact.icon" class="material-icons">{{ contact.icon }}</div>
            <img v-else-if="contact.image" :src="contact.image" height="20" width="20">
            <div>{{ contact.text }}</div>
          </li>
        </ul> 
      </div>
    </div>
  </template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';


const contacts:Ref<{ text:string,icon?:string,image?:string,link?:string}[]>=ref([
    {icon:"call", text:"06 95 89 04 53"},
    {icon:"mail", text:"elora95.vigo@gmail.com"},
    {icon:"location_on", text:"31 300 Toulouse, France"},
    {text:"LinkedIn",image:"./src/assets/Icons/Git.png",link:""},
    {icon:"", text:"Elora-V",link:""}
]);

const logoGit=""

</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  overflow: hidden;
}

.name, .contacts {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.name h2 {
  margin: 0;
  text-align: center;
}

.contacts {
  flex-direction: column;
  align-items: flex-start;
  background-color: blueviolet;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 2%;
}

</style>