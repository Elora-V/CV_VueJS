<template>
    <div class="container">
      <div class="name">
        <h2>Elora Vigo</h2>
      </div>
  
      <div class="contacts">
        <div class="contact-text">Contact</div>
        <ul>
          <li v-for="(contact, index) in contacts" :key="index" class="contact-item">
            <div v-if="contact.icon" class="material-icons">{{ contact.icon }}</div>
            <img v-else-if="contact.image" :src="contact.image">
            <a :href="contact.link?contact.link:undefined" target="_blank">{{ contact.text }}</a>
          </li>
        </ul> 
      </div>
    </div>
  </template>

<script setup lang="ts">
import type { ContactDetails } from '@/models/ContactDetails';
import { ref, type Ref } from 'vue';


const contacts:Ref<ContactDetails[]>=ref([
    {icon:"call", text:"06 95 89 04 53"},
    {icon:"mail", text:"elora95.vigo@gmail.com"},
    {icon:"location_on", text:"31 300 Toulouse, France"},
    {text:"LinkedIn",image:"./src/assets/Icons/LinkedIn.png",link:"https://www.linkedin.com/in/elora-vigo-47b598250/"},
    {text:"Elora-V",image:"./src/assets/Icons/Git.png",link:"https://github.com/Elora-V"},
]);


</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
}

.name, .contacts {
  width: 50%;
  display: flex;
  align-items: center;
  padding: 5px;
}

.name{
    justify-content: center;

    h2 {
    margin: 0;
    text-align: center;
    }
}


.contacts {
  display: flex;
  flex-direction: column;
  align-items: center;

  .contact-text {
    font-size: 21px;
    font-weight: bold;
    text-align: center;
    }


    ul {
    padding: 0;
    margin: 2px;
    }

    img {
    height: auto;
    max-height: 23px; /* Maximum height for image */
    width: auto;
    }

    a{
        color: inherit;
    }
    .contact-item {
    display: flex;
    gap: 10px;
    margin: 2px;
    }

}

</style>
