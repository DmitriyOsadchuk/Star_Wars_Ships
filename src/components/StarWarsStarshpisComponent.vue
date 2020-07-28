<template>
        <div class="starships_content">
            <div class="information" v-for="post in info"
                 :key="post.id">

                <div class="info_content">
                    <p class="inside_info">MGLT: {{post.MGLT}}</p>
                </div>
                <p>{{post.name}}</p>
                <p>CR: {{post.cost_in_credits}}</p>
                <p>CREW: {{post.crew}}</p>
                <p>PSNGS: {{post.passengers}}</p>

            </div>
            <button class="btn_more">
                <a class="view_more" href="#">view more</a>
                <img src="images/mdi_autorenew.png" alt="View more">
            </button>
        </div>




</template>

<script>
    import axios from 'axios'

    export default {
        name: "StarWarsStarshpisComponent",

        data() {
            return {
                info: null,
                showAllStarShips: false,
            };
        },

        computed: {
            renderStarShips() {
                if (this.showAllStarShips) {
                    return this.info
                } else {
                    return this.info.slice(0, 6)
                }
            }
        },

        mounted() {
            axios
                .get('https://swapi.dev/api/starships/')
                .then(response => (this.info = response.data.results))
                .catch(error => console.log(error));
        }
    }
</script>

<style>
    .starships_content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: 100px 10px 10px 10px;
    }
    .information {
        text-align: start;
    }

    .info_content {
        height: 225px;
        width: 235px;
        background-color: #212121;
        border-radius: 11px;
        color: #ffffff;
        display: flex;
        align-items: flex-end;
        padding: 15px;

    }
    .inside_info {
        font-family: Archivo Black;
        font-size: 24px;
        line-height: 26px;
        font-weight: 600;
    }
    .btn_more {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 238px;
        height: 58px;
        background-color: #000000;
        border-style: none;
        padding: 0px 30px;

    }
    .view_more {
        color: #ffffff;
        font-family: Courier, sans-serif;
        font-size: 16px;
        line-height: 18px;
        align-items: center;
        text-transform: uppercase;
        /*margin: 7px;*/

        border-radius: 5px;
    }

    @media (max-width: 530px ) {
        .starships_content {
            flex-direction: column;
            align-items: center;
        }
        .info_content {
            width: 334px;
            height: 220px;
        }
    }

</style>