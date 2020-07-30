<template>
    <nav>
        <transition name="fade" mode="out-in">
            <i class="material-icons menu" v-if="!show" @click="show = !show" key="menu">menu</i>
            <i class="material-icons clear" v-else @click="show = !show" key="clear">clear</i>
        </transition>
        <transition name="fade">
            <ul v-if="show">
                <li v-bind="item in items">{{item}}</li>
            </ul>

        </transition>

        <template v-for="burger in burgers">
            <v-burger
                    :active="isActive"
                    @updated="isActive = $event"
                    :type="burger"
                    :key="burger"
                    :burgerStyle="burgerStyle"
            >
            </v-burger>
        </template>
    </nav>


</template>

<script>
    import { VBurger } from 'vue-burger';
    const burgers = ["boring"];

    export default {
        name: "HamburgerComponent",
        data() {
            return {
                items: [
                    'Hero',
                    'List',
                    'CTA Block',
                    'Footer'
                ],
                show: false,
                component: {
                    VBurger
                },
                isActive: false,
                burgers,
                burgerStyle: {
                    "--padding": "30px"
                }
            }
        },
    }
</script>

<style scoped>
    @import url("https://fonts.googleapis.com/icon?fam...");

</style>