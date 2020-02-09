<template>
    <div class="skills">

        <div class="cart-field">
            <div class="cart" title="C++">
                <img src="./icons/icons8-c++-100.png" alt="">
            </div>
            <div class="cart" title="Bootstrap">
                <img src="./icons/icons8-bootstrap-100.png" alt="">
            </div>
            <div class="cart" title="JS">
                <img src="./icons/icons8-javascript-100.png" alt="">
            </div>
            <div class="cart" title="django">
                <img src="./icons/icons8-django-100.png" alt="">
            </div>
            <div class="cart" title="VUE">
                <img src="./icons/icons8-vue-js-100.png" alt="">
            </div>
            <div class="cart" title="java">
                <img src="./icons/icons8-java-100.png" alt="">
            </div>
            <div class="cart" title="CSS3">
                <img src="./icons/icons8-css3-100.png" alt="">
            </div>
            <div class="cart" title="Python">
                <img src="./icons/icons8-python-100.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Skills"
    }
</script>

<style scoped>
    * {
        font-family: 'Rubik', sans-serif;
        color: white;
        text-decoration: none;
    }

    h2 {
        text-align: center;
    }


    .skills {
        position: relative;
        top: 150px;
        width: 80%;
        margin: 0  auto;
    }

    .cart-field {
        width: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        align-self: center;
        overflow-x: auto;
        max-height: 80vh;
    }

    .cart {
        padding: 10px 50px;
        display: flex;
        border-radius: 3px;
        margin: 5px;
        background: rgba(255, 255, 255, 0.02);
        box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.12);
        position: relative;
        height: calc(100vh / 4 - 30px);
        width: 15%;
        align-content: center;
        text-align: center;
        max-height: 100px;
        font-size: 20px;
        align-items: center;
        justify-content: center;

    }
    .cart img {
        opacity: 0.3;
        transition: 0.3s ease-out;
    }

    .cart img:hover {
        opacity: 1;
    }
</style>