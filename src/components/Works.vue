<template>
    <div class="jobs">
        <div class="header">
            <nav>
                <li><a href="#">Верстка </a></li>
                <li><a href="#"> Дизайн </a></li>
            </nav>
        </div>
        <div class="website-field">
            <div class="cart" @mouseenter="showInfo" @mouseleave="hideInfo">
                <div class="cart__bg"></div>
                <div class="cart__information">
                    <span>Uber Eats</span>
                    <button><a href="#" @click="modalWindowOpen"> Смотреть </a></button>
                </div>
            </div>
            <div class="cart" @mouseenter="showInfo" @mouseleave="hideInfo">
                <div class="cart__bg"></div>
                <div class="cart__information">
                    <span>Uber Eats</span>
                    <button><a href="#" @click="modalWindowOpen"> Смотреть </a></button>
                </div>
            </div>
            <div class="cart" @mouseenter="showInfo" @mouseleave="hideInfo">
                <div class="cart__bg"></div>
                <div class="cart__information">
                    <span>Uber Eats</span>
                    <button><a href="#" @click="modalWindowOpen"> Смотреть </a></button>
                </div>
            </div>
        </div>

        <div class="modal-window">
            <a href="#" class="close-window" @click="closeModalWindow">X</a>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, atque deserunt ducimus error id impedit magni, maiores neque placeat quam quas sequi soluta sunt tenetur vero voluptate, voluptatem. Adipisci aperiam atque consequuntur deserunt distinctio doloremque laborum minus officiis provident voluptates.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Works",
        methods: {
            showInfo: function () {
                let cartInfo = document.querySelector('.cart__information');
                cartInfo.style.display = 'flex';
                cartInfo.style.justifyContent = 'space-between';
                cartInfo.style.padding = '5px 10px 0 10px '
            },
            hideInfo: function () {
                let cartInfo = document.querySelector('.cart__information');
                cartInfo.style.display = 'none';
            },
            modalWindowOpen: function () {
                let modalWindow = document.querySelector('.modal-window');
                modalWindow.style.display = 'block';
                document.body.style.background = 'black';
            },
            closeModalWindow: function () {
                let closeWindow = document.querySelector('.modal-window');
                closeWindow.style.display = 'none';

            }
        }
    }
</script>

<style scoped>
    * {
        color: white;
        list-style: none;
        font-family: 'Rubik', sans-serif;
    }

    a {
        text-decoration: none;
    }

    .jobs {
        position: relative;
        width: 100%;
        margin: 0 50px;
    }

    nav {
        display: flex;
    }

    nav li {
        padding: 10px 50px;
        display: flex;
        border-radius: 3px;
        margin: 5px;
        background: rgba(255, 255, 255, 0.02);
        box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.12);
        position: relative;
        width: 15%;
        align-content: center;
        text-align: center;
        max-height: 100px;
        font-size: 20px;
        align-items: center;
        justify-content: center;
    }

    .website-field {
        display: flex;
        width: 100%;
    }

    .cart {
        width: 33.3333%;
        height: 50%;
        background: black;
        border-radius: 0 0 5px 5px;
        margin: 10px;
        transition: 0.3s ease-out;
    }

    .cart__information {
        position: relative;
        box-sizing: border-box;
        margin-bottom: 5px;
        display: none;
        transition: 0.3s ease-out;
    }

    .cart__information span {
        margin-top: 5px;
    }

    .cart:hover {
        display: block;
    }

    .cart__information button {
        color: mintcream;
        font-family: 'Teko', sans-serif;
        font-size: 15px;
        border: none;
        text-align: center;
        padding: 4px 10px;
        background: #0995B6;
    }

    .cart__bg {
        background: url("./icons/1.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        height: 200px;
    }

    .modal-window {
        position: absolute;
        width: 40%;
        height: 300px;
        background: darkcyan;
        padding: 10px;
        top: 50%;
        left: 30%;
        margin: -125px 0 0 -125px;
        display: none;
    }

    .close-window {
        position: absolute;
        top: 5px;
        right: 10px;
    }
</style>