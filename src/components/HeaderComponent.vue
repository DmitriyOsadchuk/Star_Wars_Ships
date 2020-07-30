<template>
    <header>
        <div class="header-container">
            <router-link :to="{ name: 'home' }" class="header-logo">
                <img class="logo" src="images/Logotype.png" />
            </router-link>
            <div class="header_nav">
                <ul class="menu">
                    <li class="manu_item"><a href="#">Hero</a></li>
                    <li class="manu_item"><a href="#">List</a></li>
                    <li class="manu_item"><a href="#">CTA Block</a></li>
                    <li class="manu_item"><a href="#">Footer</a></li>
                </ul>
                <button class="header_btn d-none d-lg-flex">
                    <a class="fake-sign-up" href="#">fake sign up</a>
                </button>
            </div>

        </div>
    </header>
</template>

<script>
    export default {
        name: "HeaderComponent"
    }
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
        width: 80%
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
        padding: 0;
    }
    .header_btn {
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


    @media (min-width: 768px) {
        .header-container {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;


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
</style>