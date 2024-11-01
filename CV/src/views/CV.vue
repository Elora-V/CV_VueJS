<template>
    <div class="container">
        <A4Page>
            <div>
                <h1> Title</h1> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, accusantium distinctio dolorem, 
                veritatis repellat consequuntur ipsa deleniti nesciunt recusandae,
                 placeat quibusdam repudiandae quis doloribus dolore vero deserunt fugiat pariatur delectus?
            </div>
        </A4Page>
       
    </div>
</template>

<script setup lang="ts">
import A4Page from '@/components/A4Page.vue';
</script>

<style scoped>

.container {
  display: flex;
  align-items: center; /**vertical alignment of child in container**/
  justify-content: center; /**horizontal alignment of child in container**/
}

h1{
    color: red;
}

</style>