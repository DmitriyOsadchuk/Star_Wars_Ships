<template>

           <div class="container">
               <div class="rov main_title">
                   <div class="col-md-4">
                       <img class="main_photo" src="images/main-face.png">
                   </div>
                   <div class="col-md-8 description_block">
                       <h1 class="main_description">MAY THE FORCE BE WITH YOU</h1>
                   </div>
               </div>
<!--               <div class="main-title">-->
<!--                   <img class="main-photo" src="images/main-face.png">-->
<!--                    <h1>MAY THE FORCE BE WITH YOU</h1>-->
<!--               </div>-->
           </div>

</template>

<script>
    export default {
        name: "MainTitleComponent"
    }
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
    .main-title {
        /*position: fixed;*/

    }
    .main_photo {
        max-width: 412px;
        left: 35px;
        top: 100px;
        position: absolute;
    }
    .description_block {
        display: flex;
        align-items: flex-end;
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
        left: 25px;
    }


</style>