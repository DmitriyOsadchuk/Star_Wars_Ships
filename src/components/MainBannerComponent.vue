<template>
    <div class="container">
        <div class="main_title">
            <div class="col-sm-12 banner_face">
                <img class="face" src="images/main-face.png" />
            </div>
            <div class="col-sm-12 description_block">
                <h1 class="main_description">MAY THE FORCE BE WITH YOU</h1>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainBannerComponent",
    };
</script>

<style scoped>
    .container {
        max-width: 1300px;
        margin: auto;
        padding: inherit;
    }
    .main_title {
        display: flex;
        background-color: #000000;
        height: 477px;
        position: relative;
        border-radius: 20px;
    }
    .banner_face {
        display: flex;
        flex: 1;
    }

    .face {
        max-width: 412px;
        left: 35px;
        top: 100px;
        position: absolute;
    }
    .description_block {
        display: flex;
        align-items: flex-end;
        flex: 2;
    }
    .main_description {
        color: #ffffff;
        font-family: Archivo, sans-serif;
        font-style: normal;
        font-size: 132px;
        line-height: 78.1%;
        font-weight: 800;
        position: relative;
        text-align: initial;
        margin: 0;
        top: 5px;

    }
    @media (max-width: 530px) {
        .description_block, .banner_face {
            padding: 0;
        }
        .main_title {
            margin: auto;
            width: 345px;
        }
        .face {
            width: 310px;
            left: 20px;
            top: 12px;
            position: absolute;
        }
        .main_description {
            font-size: 60px;
            line-height: 78.1%;
            top: 5px;
            width: 349px;
        }
    }

    @media (max-width: 768px) {
        .main_title {
            margin: auto;
        }

        .face {
            left: 20px;
            top: 12px;
            position: absolute;
        }
        .main_description {

            font-size: 60px;
        }
    }
</style>