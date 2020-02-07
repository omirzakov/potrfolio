<template>
    <nav>
        <transition name="component-fade" mode="out-in" >
            <ul>
                <li><a href="#" @click="removeMain">Обо мне</a></li>
                <li><a href="#">Контакты</a></li>
                <li><a href="#">Навыки</a></li>
                <li><a href="#">Мои работы</a></li>
            </ul>
        </transition>
    </nav>
</template>

<script>


    export default {
        name: "MenuLinks",
        data() {
            return {
                showAboutMe: true,
            }
        },
        components: {
        },
        methods: {
            removeMain: function() {
                this.showAboutMe = false;
                alert('1')
            },
        }
    }
</script>

<style scoped>
    li {
        list-style: none;
        margin-top: 100px;
    }

    a {
        color: white;
        text-decoration: none;
        font-family: 'Rubik', sans-serif;
        font-size: 15px;
        transition: 0.3s ease-out;
    }

    a:hover {
        color: #0995B6;
        opacity: 0.9;
    }


    nav {
        margin-left: 40px;
    }


    nav::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 19px;
        transform: translateY(-50%);
        width: 3px;
        height: 70%;
        max-height: 750px;
        background-color: white;
        opacity: .35;
        z-index: 10;
    }

    li::before {
        content: '';
        position: relative;
        z-index: 11;
        cursor: pointer;
        width: 7px;
        height: 7px;
        border-radius: 100%;
        box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.1);
        background: #0995B6;
        display: inline-block;
        top: 0;
        right: 23px;
        transition: 0.3s;
    }

    li::before:hover {
        background: #0995B6;
        opacity: 0.9;
        -webkit-box-shadow: 10px 10px 5px -2px rgba(204,204,204,1);
        -moz-box-shadow: 10px 10px 5px -2px rgba(204,204,204,1);
        box-shadow: 10px 10px 5px -2px rgba(204,204,204,1);
    }


</style>