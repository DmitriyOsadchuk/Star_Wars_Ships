<template>
    <div class="container_banner">
        <div class="bg_banner">
            <div class="description_banner">
                <h1 class="title_banner">Profile description</h1>
            </div>
            <img class="face_banner" src="images/small_face.png" alt="small face">
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProfileBannerComponent"
    }
</script>

<style scoped>
    .container_banner {
        max-width: 1300px;
        margin: auto;
    }
    .bg_banner {
        background-color: #000000;
        height: 262px;
        border-radius: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        position: relative;
        margin-bottom: 100px;
    }
    .description_banner {
        display: flex;
        flex-direction: column-reverse;
        padding: 0 0 0 205px;
    }
    .title_banner {
        color: #ffffff;
        font-family: Archivo Black, sans-serif;
        font-size: 132px;
        line-height: 78.1%;
        font-weight: 800;
        position: relative;
        text-align: initial;
        text-transform: uppercase;
        margin: 0;
    }
    .face_banner {
        position: absolute;
    }
</style>