<template>
    <aside>
        <div class="starships_title">
            <h1>Our starships</h1>
            <div class="select_filter">
                <select v-model="select">
                    <option v-for="(select, index) in selects" :key="index">{{select}}</option>
                </select>
            </div>
        </div>

        <div class="filters">
            <div class="title_pilots_num">
                <h3 class="title_filter">Pilots</h3>
                <span class="pilots_number">({{ info.length }})</span>
            </div>
            <div class="filter_pilotns">
                <div class="check_pilot" v-for="post in renderPilots" :key="post.id">
                    <input
                            class="form-check-input"
                            type="checkbox"
                            id="name"
                            name="name"
                    />
                    <label class="pilot_name" for="name">{{ post.name }}</label>
                </div>
                <a></a>
                <button class="more_pilots_btn" @click="showAllPilots = !showAllPilots">
                    <p v-if="showAllPilots" class="view_pilots">View less</p>
                    <p v-else class="view_pilots">View more</p>
                </button>
            </div>
            <div class="filter_slide">
                <h3 class="title_filter">Crew Size</h3>
                <div class="range_values">
                    <p class="slider_value">{{ minCrew }}</p>
                    <p class="slider_value">{{ maxCrew }}</p>
                </div>
                <div class="range_slider">
                    <input
                            type="range"
                            min="0"
                            max="99999"
                            step="1"
                            v-model.number="minCrew"
                            @change="setRangeSlider"
                    />
                    <input
                            type="range"
                            min="0"
                            max="99999"
                            step="1"
                            v-model.number="maxCrew"
                            @change="setRangeSlider"
                    />
                </div>
            </div>
            <div class="filter_slide">
                <h3 class="title_filter">Passengers Capacity</h3>
                <div class="range_values">
                    <p class="slider_value">{{ minPassengers }}</p>
                    <p class="slider_value">{{ maxPassengers }}</p>
                </div>
                <div class="range_slider">
                    <input
                            type="range"
                            min="0"
                            max="99999"
                            step="1"
                            v-model.number="minPassengers"
                            @change="setRangeSlider"
                    />
                    <input
                            type="range"
                            min="0"
                            max="99999"
                            step="1"
                            v-model.number="maxPassengers"
                            @change="setRangeSlider"
                    />
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
                info: [],
                minCrew: 0,
                maxCrew: 33333,
                minPassengers: 0,
                maxPassengers: 33333,
                showAllPilots: false,
                selects: ["BY CREW SIZE", "BY COST IN CREDITS", "BY MGLT NUMBER"],
                select: "BY CREW SIZE",
            };
        },
        methods: {
            setRangeSlider() {
                if (this.minCrew > this.maxCrew) {
                    let tmp = this.maxCrew;
                    this.maxCrew = this.minCrew;
                    this.minCrew = tmp;
                }
                if (this.minPassengers > this.maxPassengers) {
                    let tmp = this.maxPassengers;
                    this.maxPassengers = this.minPassengers;
                    this.minPassengers = tmp;
                }
            },
        },
        computed: {
            renderPilots() {
                if (this.info && !this.showAllPilots) {
                    return this.info.slice(0, 5);
                } else {
                    return this.info;
                }
            },
        },
        mounted() {
            axios
                .get("https://swapi.dev/api/people/")
                .then((response) => (this.info = response.data.results))
                .catch((error) => console.log(error));
        },
    };
</script>

<style scoped>
    aside {
        display: flex;
    }

    h1 {
        writing-mode: vertical-rl;
        transform: rotate(-180deg) translateY(-100%);
        text-align: initial;
        text-transform: uppercase;
        font-size: 24px;
        line-height: 26px;
        font-weight: 800;
    }
    select {
        width: 238px;
        height: 58px;
        background: #212121;
        border-radius: 3px;
        color: #ffffff;
        border-style: none;
        padding: 11px;
        font-family: Courier sans-serif;
        font-size: 16px;
        line-height: 18px;
        font-weight: 600;
    }

    .filters {
        height: 765px;
        width: 348px;
        margin: 15px 0;
        border: 1px solid #ededed;
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
        color: #0066ff;
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
    .pilot_name {
        margin-left: 12px;
        font-family: Courier, sans-serif;
        font-size: 18px;
        line-height: 21px;
        text-transform: capitalize;
        font-weight: 500;
    }
    .more_pilots_btn {
        border: none;
        background-color: #fff;
        padding: 0;

    }
    .view_pilots{
        margin: 0;

        font-family: Courier, sans-serif;
        font-size: 16px;
        color: #0066ff;
        font-weight: 600;
    }
    .view_pilots:hover {
        text-decoration: underline;
    }

    .range_values {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .slider_value {
        border: 1px solid #ededed;
        padding: 0 16px;
        font-family: Courier, sans-serif;
        font-size: 14px;
        line-height: 16px;
        color: #0066ff;
    }

    .range_slider {
        width: 255px;
        text-align: center;
        position: relative;
        padding: 7px;
    }
    .range_slider svg,
    .range_slider input[type="range"] {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 255px;
        height: 2px;
    }
    input[type="range"]::-webkit-slider-thumb {
        z-index: 2;
        position: relative;
        top: 2px;
        margin-top: -7px;
        cursor: all-scroll;
        appearance: none;
    }

    @media (min-width: 530px) {
        .select_filter {
            display: none;
        }
    }
    @media (max-width: 530px) {
        aside {
            flex-direction: column;
            align-items: center;
        }

        h1 {
            writing-mode: initial;
            transform: none;
        }
        .starships_title {
            margin-right: 108px;
        }
    }
</style>
