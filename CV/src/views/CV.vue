<template>
    <div class="containerA4Page">
        <A4Page>
            <div class="containerGrid">
                <div class="vertical" ><Skills/></div>
                <div class="horizontal-left"></div>
                <div class="horizontal-right"><Contact/></div>
                <div class="remaining-space"><Experiences/></div>
            </div>
        </A4Page>
       
    </div>
</template>

<script setup lang="ts">
import A4Page from '@/components/A4Page.vue';
import Contact from '@/components/Contact.vue';
import Experiences from '@/components/Experiences.vue';
import Skills from '@/components/Skills.vue';
</script>

<style scoped>

.containerA4Page {
  display: flex;
  align-items: center; /*vertical alignment of child in container*/
  justify-content: center; /*horizontal alignment of child in container*/
}

.containerGrid {
  display: grid;
  grid-template-rows: 2% 15% auto; /*one row of x%, then x% then the remaining space (auto) */
  grid-template-columns: 3% 28% auto; /*one column of x% , then x% then remaining space (auto)*/
  height: 100%;
  width: 100%;
  gap: 0;
}

.vertical {
  grid-row: 1/4; /* start from 1 (top) to 4 (bottom)*/
  grid-column: 2 / 3; /* strat from 2 (end of 1 column / beginning of 2 column) and end to 3 (end of 2 column/ start 3 column) */
  background-color: var(--vertical-div-cv);
}

.horizontal-left {
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  background-color: var(--horizontal-div-cv);
}

.horizontal-right {
  grid-row: 2 / 3;
  grid-column: 3 / 4;
  background-color: var(--horizontal-div-cv);
}

.remaining-space {
  grid-row: 3 / 4;
  grid-column: 3 / 4;
}

</style>