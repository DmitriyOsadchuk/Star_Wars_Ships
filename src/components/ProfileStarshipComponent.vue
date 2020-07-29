<template>
    <div class="container_starship">
        <div class="starship_info">
            <div class="text_info">
                <div class="text">
                    <h3>Executor</h3>
                    <p>Model: jhfhrdhtrdtrdhtrdtr ytfy dyhdhytchdhtrdyfyutf ytfytf </p>
                    <p>Manufacturer: htrdtrdhtrdtr ytfy dyhdhytchdhtrdyfyutf ytf </p>
                    <p>Starship_class: htrdtrdhtrdtr ytfy dyhdhytchdhtrdyfyutf ytf</p>
                </div>

                <a href="#" class="link_api">Copi api url</a>
            </div>
            <div class="info_content_block">
                <p class="inside_info">MGLT: </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProfileStarshipComponent"
    }
</script>

<style scoped>
    .container_starship {
        max-width: 1300px;
        margin: auto;
    }
    .starship_info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 90px;
    }
    .text_info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }
    .text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .text h3 {
        font-family: Courier, sans-serif;
        font-size: 22px;
        line-height: 25px;
        font-weight: 800;
        margin-bottom: 20px;
    }
    .text p {
        font-family: Courier, sans-serif;
        font-size: 18px;
        line-height: 21px;
    }
    .link_api {
        font-family: Courier, sans-serif;
        font-size: 18px;
        line-height: 21px;
        color: #0066FF;
        text-transform: uppercase;
        font-weight: 600;
    }
    .info_content_block {
        width: 339px;
        height: 297px;
        background-color: #212121;
        border-radius: 11px;
        color: #ffffff;
        display: flex;
        align-items: flex-end;
        padding: 15px;
    }
</style>