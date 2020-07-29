<template>
    <div class="container_info">
        <div class="content_block">
            <div class="block_info">
                <div class="title_info">
                    <p class="title">Cost in credits</p>
                </div>
                <div class="value_info">
                    <p class="value">1343343400</p>
                </div>
            </div>
            <div class="block_info">
                <div class="title_info">
                    <p class="title">Crew</p>
                </div>
                <div class="value_info">
                    <p class="value">1343343400</p>
                </div>
            </div>
            <div class="block_info">
                <div class="title_info">
                    <p class="title">Passengers</p>
                </div>
                <div class="value_info">
                    <p class="value">1343343400</p>
                </div>
            </div>
            <div class="block_info">
                <div class="title_info">
                    <p class="title">Cargo capacity</p>
                </div>
                <div class="value_info">
                    <p class="value">13433434</p>
                </div>
            </div>
            <div class="block_info">
                <div class="title_info">
                    <p class="title">Consumables</p>
                </div>
                <div class="value_info">
                    <p class="value">1343343400</p>
                </div>
            </div>
            <div class="block_info">
                <div class="title_info">
                    <p class="title">Films counter</p>
                </div>
                <div class="value_info">
                    <p class="value">13433434</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProfileInfoComponent"
    }
</script>

<style scoped>
    .container_info {
        max-width: 1300px;
        margin: auto;
    }
    .content_block {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-bottom: 200px;
    }
    .block_info {
        padding: 20px;
        width: 382px;
        height: 250px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.15);
        border-radius: 11px;
        margin: 10px 20px 20px 0px
    }
    .title_info {
        font-family: Courier, sans-serif;
        font-size: 18px;
        line-height: 21px;
        text-transform: capitalize;
        font-weight: 600;
    }
    .value_info {
        font-family: Archivo;
        font-style: normal;
        font-weight: bold;
        font-size: 60px;
        line-height: 65px;
        color: #0066FF;
    }
</style>