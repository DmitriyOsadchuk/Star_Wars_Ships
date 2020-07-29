<template>
    <section>
        <profile-starship-component/>
        <profile-info-component/>
    </section>


</template>

<script>
    import ProfileInfoComponent from "../components/ProfileInfoComponent";
    import ProfileStarshipComponent from "../components/ProfileStarshipComponent";
    export default {
        name: "Profile",
        components: {
            ProfileInfoComponent,
            ProfileStarshipComponent

        }
    }
</script>

<style scoped>

</style>