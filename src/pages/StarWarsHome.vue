<template>
    <div class="container">
        <main-banner-component/>
        <main>
            <filter-component/>
            <star-wars-starshpis-component/>
        </main>
        <communicate-component/>
    </div>

</template>

<script>
    import FilterComponent from "../components/FilterComponent";
    import StarWarsStarshpisComponent from "../components/StarWarsStarshpisComponent";
    import MainBannerComponent from "../components/MainBannerComponent";
    import CommunicateComponent from "../components/CommunicateComponent";
    export default {
        name: "StarWarsHome",
        components: {
            StarWarsStarshpisComponent,
            FilterComponent,
            MainBannerComponent,
            CommunicateComponent

        }
    }
</script>

<style scoped>
    .container {
        max-width: 1300px;
        margin: auto;
        padding: inherit;
    }
    main {
        display: flex;
        margin-top: 100px;
        flex-direction: row;
    }
    @media (max-width: 760px ) {
        main {
            flex-direction: column;
            align-items: center;
        }
    }
</style>