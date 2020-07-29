<template>
    <div class="container_starship">
        <div class="starship_info">
            <div class="text_info" v-if="info">
                <div class="text">
                    <div>
                        <h3>{{info.name}}</h3>
                    </div>
                    <div>
                        <p>Model: {{info.model}}</p>
                    </div>
                    <div>
                        <p>Manufacturer: {{info.manufacturer}}</p>
                    </div>
                    <div>
                        <p>Starship_class: {{info.starship_class}}</p>
                    </div>

                </div>

                <a href="#" class="link_api">Copi api url</a>
            </div>
            <div class="info_content_block">
                <p class="inside_info">MGLT: {{info.MGLT}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "ProfileStarshipComponent",
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
    @media (max-width: 725px) {
        .starship_info {
            flex-direction: column-reverse;
            align-items: center;
        }
        .text_info {
            margin-top: 20px
        }
    }
</style>