<template>
    <div class="A4" @dblclick="printPage">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

/** Open print page */
function printPage():void {
  window.print()
}

</script>

<style scoped>
.A4 {
  width: 215mm;
  height: 307mm;
  background-color: var(--background-page);
}
.A4:hover{
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 127, 0.5);
}
</style>