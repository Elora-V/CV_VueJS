<template>
  <div class="container">
    <div class="name">
      <h2>Elora Vigo</h2>
      <div class="job">Ingénieur d'études en bio-informatique</div>
    </div>

    <div class="contacts">
      <div class="contact-text">Contact</div>
      <ul>
        <li v-for="(contact, index) in contacts" :key="index" class="contact-item">
          <div v-if="contact.icon" class="material-icons">{{ contact.icon }}</div>
          <img v-else-if="contact.image" :src="contact.image" />

          <!-- Display multiple links if contact.text is an array -->
          <template v-if="Array.isArray(contact.text)">
            <a
              v-for="(text, i) in contact.text"
              :key="i"
              :href="contact.link && contact.link[i] ? contact.link[i] : undefined"
              target="_blank"
            >
              {{ text }}
            </a>
          </template>

          <!-- Display a single link if contact.text is not an array -->
          <template v-else>
            <a :href="!Array.isArray(contact.link) ? contact.link : undefined" target="_blank">
              {{ contact.text }}
            </a>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { contacts } from "@/data/Contacts";
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
}

.name,
.contacts {
  width: 50%;
  display: flex;
  align-items: center;
  padding: 5px;
  color: var(--text-horizontal-div);
}

.name {
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
    max-height: 23px;
    width: auto;
  }

  a {
    color: inherit;
  }

  .contact-item {
    display: flex;
    gap: 10px;
    margin: 2px;
    color: var(--text-horizontal-div);
  }
}
</style>
