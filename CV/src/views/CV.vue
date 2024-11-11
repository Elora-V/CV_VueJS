<template>
    <div class="containerA4Page">
        <A4Page>
            <div class="containerGrid">
                <div class="vertical vertical-top" ></div>
                <div class="vertical vertical-middle" ><Photo/></div>
                <div class="vertical vertical-bottom" ><Skills/></div>
                <div class="horizontal horizontal-left"></div>
                <div class="horizontal horizontal-right"><Contact/></div>
                <div class="remaining-space"><Experiences/></div>
            </div>
        </A4Page>
       
    </div>
</template>

<script setup lang="ts">
import A4Page from '@/components/A4Page.vue';
import Contact from '@/components/CVSection/Contact.vue';
import Experiences from '@/components/CVSection/Experiences.vue';
import Photo from '@/components/Photo.vue';
import Skills from '@/components/CVSection/Skills.vue';
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

.vertical{
  background-color: var(--vertical-div-cv);
  border-left: solid 2px var(--vertical-border);
  border-right: solid 2px var(--vertical-border);
}

.vertical-top {
  grid-row: 1/2; /* start from 1 (top) to 2 (end of row 1/start row 2)*/
  grid-column: 2 / 3; /* strat from 2 (end of 1 column / beginning of 2 column) and end to 3 (end of 2 column/ start 3 column) */
}

.vertical-middle {
  grid-row: 2/3; /* start from 1 (top) to 4 (bottom)*/
  grid-column: 2 / 3;
}

.vertical-bottom {
  grid-row: 3/4; 
  grid-column: 2 / 3;
}

.horizontal{
  background-color: var(--horizontal-div-cv);
  border-top: solid 2px var(--horizontal-border);
  border-bottom: solid 2px var(--horizontal-border);
}

.horizontal-left {
  grid-row: 2 / 3;
  grid-column: 1 / 2;
}

.horizontal-right {
  display: flex;
  grid-row: 2 / 3;
  grid-column: 3 / 4;
}

.remaining-space {
  grid-row: 3 / 4;
  grid-column: 3 / 4;
}

</style>