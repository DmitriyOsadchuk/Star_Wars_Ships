<template>
    <footer>
        <div class="footer_container">
            <a class="footer_logo" href="#">
                <img class="logo" src="images/Logotype.png">
            </a>
            <div class="footer_nav">
                <ul class="menu">
                    <li class="manu_item"><a href="#">Hero</a></li>
                    <li class="manu_item"><a href="#">List</a></li>
                    <li class="manu_item"><a href="#">CTA Block</a></li>
                    <li class="manu_item"><a href="#">Footer</a></li>
                </ul>
                <button class="footer_btn">
                    <a class="go_top" href="#">mne naverh</a>
                </button>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "FooterComponent"
    }
</script>

<style scoped>

    footer {
        margin: 35px 0;
    }
    .footer_container {
        width: 100%;
        max-width: 1300px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin: auto;
    }

    .footer_nav {
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


    .footer_btn {
        height: 48px;
        background-color: #000000;
        border-style: none;
        border-radius: 5px;
    }
    .go_top {
        color: #ffffff;
        font-family: Courier, sans-serif;
        font-size: 16px;
        line-height: 18px;
        align-items: center;
        text-transform: uppercase;
        margin: 20px;
    }


    @media (min-width: 768px) {
        .footer_container {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;


        }
    }
    @media (max-width: 720px) {
        .footer_container {
            flex-direction: column-reverse;
        }
        .footer_nav {
            flex-direction: column;
        }
        .menu {
            display: none;
        }
        .footer_logo {
            margin: 15px 0;
        }
        .footer_btn {
            margin: 15px 0;
        }
    }
</style>