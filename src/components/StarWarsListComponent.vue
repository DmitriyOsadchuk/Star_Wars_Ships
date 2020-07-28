<template>
    <div class="container">
        <main>
            <filter-component/>
            <star-wars-starshpis-component/>
        </main>
    </div>

</template>

<script>
    import FilterComponent from "./FilterComponent";
    import StarWarsStarshpisComponent from "./StarWarsStarshpisComponent";
    export default {
        name: "StarWarsListComponent",
        components: {StarWarsStarshpisComponent, FilterComponent}
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
        }
    }
</style>