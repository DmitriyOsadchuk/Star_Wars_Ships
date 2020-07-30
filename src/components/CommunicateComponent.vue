<template>
    <div class="container">
        <div class=" communicate">
            <div class="col-md communicate_content">
                <div class="contact_form">
                    <form action="#">
                        <div class="form_item">
                            <input class="form_input" type="text" id="email" name="email" placeholder="EMEIL">
                        </div>
                        <div class="form_item">
                            <input class="form_input" type="text" id="number" name="number" placeholder="PHONE">
                        </div>
                        <div class="form_item">
                            <button class="btn_form" type="submit">GET YOUR 20% OFF COUPON
                                <img src="images/mdi_arrow_right_alt.png" alt="go to">
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-md sputnik">
                <img class="communicate_img" src="images/sputnik.png" alt="sputnik">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommunicateComponent"
    }
</script>

<style scoped>

    .container {
        max-width: 1300px;
        padding: inherit;
        margin: auto;
    }
    .communicate {
        display: flex;
        background: #0066FF;
        border-radius: 20px;
        height: 497px;
        position: relative;
        flex-direction: row;
        justify-content: space-around;align-items: center;
    }
    .communicate_content {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .contact_form {
        width: 100%;
    }

    .form_input, .btn_form {
        width: 90%;
        padding: 25px;
        border: none;
        height: 84px;
        font-family: Archivo Black, sans-serif;
        font-size: 16px;
    }

    .communicate_img {
        position: relative;
        max-width: 100%;
    }

    .form_input::placeholder {
        color: #000000;
        font-weight: 800;
    }

    .btn_form {
        color: #ffffff;
        background-color: #000000;
        font-weight: 600;
        border: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .form_item {
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;
    }
    @media (max-width: 530px) {
        .container {
            display: flex;
            justify-content: center;
        }
        .communicate {
            flex-direction: column-reverse;
            width: 345px;
            height: 763px;
        }
        .contact_form {
            margin-bottom: 85px;
        }
        .form_item {
            justify-content: center;
        }
        .communicate_img {
            bottom: 25px;
        }
    }

    @media (min-width: 768px ) {
        .contact_form {
            width: 350px;

        }

    }
    @media (min-width: 1200px) {
        .contact_form {
            width: 524px;
        }
    }
    @media (max-width: 780px) {

        .communicate_img {
            bottom: 25px;
        }
    }

</style>