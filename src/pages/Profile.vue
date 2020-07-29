<template>
    <section>
        <profile-banner-component/>
        <profile-starship-component/>
        <profile-info-component/>
        <profile-communicate-component/>
    </section>


</template>

<script>
    import ProfileInfoComponent from "../components/ProfileInfoComponent";
    import ProfileStarshipComponent from "../components/ProfileStarshipComponent";
    import ProfileBannerComponent from "../components/ProfileBannerComponent";
    import ProfileCommunicateComponent from "../components/ProfileCommunicateComponent";
    export default {
        name: "Profile",
        components: {
            ProfileCommunicateComponent,
            ProfileBannerComponent,
            ProfileInfoComponent,
            ProfileStarshipComponent

        }
    }
</script>

<style scoped>

</style>