<template>
    <div class="container_info">
        <div class="content_block">
            <div class="block_info" v-if="info">
                <div class="title_info">
                    <p class="title">Cost in credits</p>
                </div>
                <div class="value_info">
                    <p class="value">{{info.cost_in_credits}}</p>
                </div>
            </div>
            <div class="block_info">
                <div class="title_info">
                    <p class="title">Crew</p>
                </div>
                <div class="value_info">
                    <p class="value">{{info.crew}}</p>
                </div>
            </div>
            <div class="block_info">
                <div class="title_info">
                    <p class="title">Passengers</p>
                </div>
                <div class="value_info">
                    <p class="value">{{info.passengers}}</p>
                </div>
            </div>
            <div class="block_info">
                <div class="title_info">
                    <p class="title">Cargo capacity</p>
                </div>
                <div class="value_info">
                    <p class="value">{{info.cargo_capacity}}</p>
                </div>
            </div>
            <div class="block_info">
                <div class="title_info">
                    <p class="title">Consumables</p>
                </div>
                <div class="value_info">
                    <p class="value">{{info.consumables}}</p>
                </div>
            </div>
            <div class="block_info">
                <div class="title_info">
                    <p class="title">Films counter</p>
                </div>
                <div class="value_info">
                    <p class="value">{{info.films.length}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "ProfileInfoComponent",

        data() {
            return {
                info: null,
                url: null,
            };
        },
        created() {
            this.url = this.$route.params.url
        },

        mounted() {
            axios
                .get(`${this.url}`)
                .then((response) => (this.info = response.data))
                .catch((error) => console.log(error));
        },
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
        margin: 10px 20px 20px 0;
    }
    .title_info {
        font-family: Courier, sans-serif;
        font-size: 18px;
        line-height: 21px;
        text-transform: capitalize;
        font-weight: 600;
    }
    .value_info {
        font-family: Archivo, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 60px;
        line-height: 65px;
        color: #0066FF;
    }
    @media (max-width: 530px) {
        .block_info {
            margin: 10px 0 20px 0;
        }
    }
    @media (max-width: 768px) {

        .content_block {
            justify-content: center;
        }
    }
    @media (max-width: 800px) {
        .block_info {
            width: 343px;
            height: 195px;
            padding: 10px;
        }
    }
</style>