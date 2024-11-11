<template>
    <div class="containerSkills">
        <div class="circular-image">
            <img src="@/assets/images/CV-photo.png" alt="Portrait CV">
        </div>
    </div>
</template>

<style scoped>

.containerSkills{
    display: flex;
    align-items: center;
    justify-content: center;
}

.circular-image {
    width: 170px;            
    height: 170px;           
    border-radius: 50%; 
    border: solid 2px var(--border-image-cv);
    overflow: hidden;  /* hide what is not inside border */
}

.circular-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;       /* cover circle without distortion */
}

</style>