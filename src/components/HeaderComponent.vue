<template>
    <header>
        <div class="header-container">
            <router-link :to="{ name: 'home' }" class="header-logo">
                <img class="logo" src="images/Logotype.png" />
            </router-link>
            <div class="header_nav d-none d-md-flex">
                <ul class="menu">
                    <li class="menu_item"><a href="#">Hero</a></li>
                    <li class="menu_item"><a href="#">List</a></li>
                    <li class="menu_item"><a href="#">CTA Block</a></li>
                    <li class="menu_item"><a href="#">Footer</a></li>
                </ul>
                <button class="header_btn d-none d-md-flex">
                    <a class="fake-sign-up" href="#">fake sign up</a>
                </button>
            </div>
            <v-burger
                    class="d-flex d-md-none"
                    :active="isActive"
                    @updated="isActive = $event"
                    :key="burger"
                    :burgerStyle="burgerStyle"
            >
            </v-burger>
            <div v-if="isActive" class="header_nav_mobile">
                <ul class="menu-mobile">
                    <li class="menu_item"><a href="#">Hero</a></li>
                    <li class="menu_item"><a href="#">List</a></li>
                    <li class="menu_item"><a href="#">CTA Block</a></li>
                    <li class="menu_item"><a href="#">Footer</a></li>
                </ul>
                <button class="header_btn">
                    <a class="fake-sign-up" href="#">fake sign up</a>
                </button>
            </div>
        </div>
    </header>
</template>

<script>
    import { VBurger } from "vue-burger";

    export default {
        name: "HeaderComponent",
        component: {
            VBurger,
        },
        data() {
            return {
                isActive: false,
                burgerStyle: {
                    "--padding": "30px",
                },
            };
        },
    };
</script>

<style scoped>

    header {
        margin: 15px 0;
    }

    .header-container {
        width: 100%;
        max-width: 1300px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin: auto;
    }

    .header_nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        width: 80%;
    }

    .menu {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        color: #000000;
        font-family: Courier, sans-serif;
        font-weight: 600;
        font-size: 16px;
        line-height: 18px;
        margin: 0;
        width: 50%;
    }
    a {
        color: #000000;
    }

    .header_btn {
        display: flex;
        justify-content: flex-end;
        width: 160px;
        height: 48px;
        background-color: #000000;
        border-style: none;
        border-radius: 5px;
    }
    .fake-sign-up {
        color: #ffffff;
        font-family: Courier, sans-serif;
        font-size: 16px;
        line-height: 18px;
        align-items: center;
        text-transform: uppercase;
        padding: 16px;
    }
    .header_nav_mobile {
        z-index: 99;
        background: #fff;
        position: absolute;
        top: 92px;
        width: 100%;
        height: 510px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (min-width: 768px) {
        .header-container {
            flex-direction: row;
        }
        ul {
            padding: 0;
        }
    }
    @media (max-width: 375px) {
        header {
            height: 107px;
            margin: 0;
        }
        .header-container {
            flex-direction: row;
        }
        .header_nav {
            width: 20%;
        }
    }
    @media (max-width: 768px) {
        ul {
            padding: 0;
        }
        .menu_item {
            margin: 20px;
        }
    }
</style>
