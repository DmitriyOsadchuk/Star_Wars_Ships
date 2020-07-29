<template>

    <aside>
        <div class="starships_title">
            <h1>Our<tr/> starships</h1>
        </div>
        <div class="filters">
            <div class="title_pilots_num">
                <h3 class="title_filter">Pilots</h3>
                <span class="pilots_number">(314)</span>
            </div>
            <div class="filter_pilotns">

                <div class="check_pilot" v-for="post in info"
                     :key="post.id">
                    <input class="form-check-input" type="checkbox" id="name" name="name">
                    <label class="pilit_name" for="name">{{post.name}}</label>
                </div>
                <a href="#">View All</a>
<!--                <button class="btn_more" @click="showAllPilots = !showAllPilots">-->
<!--                    <p v-if="showAllPilots" class="view_more">view less</p>-->
<!--                    <p v-else class="view_more">view more</p>-->
<!--                </button>-->
            </div>
            <div class="filter_slide">
                <h3 class="title_filter">Crew Size</h3>
                <div class="range_values">
                    <p class="slider_value">{{minCrew}}</p>
                    <p class="slider_value">{{maxCrew}}</p>
                </div>
                <div class="range_slider">
                    <input
                            type="range"
                            min="0"
                            max="99999"
                            step="1"
                            v-model.number="minCrew"
                            @change="setRangeSlider">
                    <input
                            type="range"
                            min="0"
                            max="99999"
                            step="1"
                            v-model.number="maxCrew"
                            @change="setRangeSlider">
                </div>
            </div>
            <div class="filter_slide">
                <h3 class="title_filter">Passengers Capacity</h3>
                <div class="range_values">
                    <p class="slider_value">{{minPassengers}}</p>
                    <p class="slider_value">{{maxPassengers}}</p>
                </div>
                <div class="range_slider">
                    <input
                            type="range"
                            min="0"
                            max="99999"
                            step="1"
                            v-model.number="minPassengers"
                            @change="setRangeSlider">
                    <input
                            type="range"
                            min="0"
                            max="99999"
                            step="1"
                            v-model.number="maxPassengers"
                            @change="setRangeSlider">
                </div>
            </div>
        </div>

    </aside>
</template>

<script>

    import axios from "axios";

    export default {
        name: "FilterComponent",
        data() {

            return {
                info: null,
                minCrew: 0,
                maxCrew: 33333,
                minPassengers: 0,
                maxPassengers: 33333,
                showAllPilots: false,

            }
        },
        methods: {
            setRangeSlider() {
                if(this.minCrew>this.maxCrew) {
                    let tmp = this.maxCrew;
                    this.maxCrew = this.minCrew;
                    this.minCrew = tmp;
                }
                if(this.minPassengers>this.maxPassengers) {
                    let tmp = this.maxPassengers;
                    this.maxPassengers = this.minPassengers;
                    this.minPassengers = tmp;
                }
            }

        },
        computed: {
            renderPilots() {
                if (this.showAllPilots) {
                    return this.info;
                } else {
                    return this.info.slice(0, 5);
                }
            },
        },
        mounted() {
            axios
                .get('https://swapi.dev/api/people/')

                .then(response => (this.info = response.data.results))
                .catch(error => console.log(error));
        }
    }
</script>

<style scoped>
    aside {
        display: flex;
    }
    h1  {
        writing-mode: vertical-rl;
        transform: rotate(-180deg) translateY(-100%);
        text-align: initial;
        text-transform: uppercase;
        font-size: 24px;
        line-height: 26px;
        font-weight: 800;
    }
    .filters {
        height: 765px;
        width: 348px;
        margin: 15px 0;
        border: 1px solid #EDEDED;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        text-align: initial;
    }
    .title_pilots_num {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .pilots_number {
        color: #0066FF;
        font-size: 16px;
        margin-left: 143px;
        margin-top: 30px;
    }
    .check_pilot {
        text-align: initial;
    }

    .title_filter {
        font-family: Archivo Black, sans-serif;
        font-size: 22px;
        line-height: 24px;
        font-weight: 800;
        margin: 30px 0;
    }
    .pilit_name {
        margin-left: 12px;
        font-family: Courier, sans-serif;
        font-size: 18px;
        line-height: 21px;
        text-transform: capitalize;
        font-weight: 500;
    }

    .range_values {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .slider_value {
        border: 1px solid #EDEDED;
        padding: 0 16px;
        font-family: Courier, sans-serif;
        font-size: 14px;
        line-height: 16px;
        color: #0066FF;
    }

    .range_slider {
        width: 255px;
        /*margin: auto 16px;*/
        text-align: center;
        position: relative;
        padding: 7px;
    }
    .range_slider svg, .range_slider input[type=range] {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 255px;
        height: 2px;
    }
    input[type=range]::-webkit-slider-thumb {
        z-index: 2;
        position: relative;
        top: 2px;
        margin-top: -7px;
        cursor: all-scroll;
        appearance: none;
    }
    @media (max-width: 530px ) {
        aside {
            flex-direction: column;
            align-items: center;
        }
        h1  {
            writing-mode: initial;
            transform: none;

        }
    }


</style>