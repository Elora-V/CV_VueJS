<template>
    <div class="A4">
        <slot></slot>
    </div>
</template>

<style scoped>
.A4 {
  width: 215mm;
  height: 307mm;
  background-color: white;
}
.A4:hover{
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 127, 0.5);
}
</style>