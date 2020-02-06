<template>
    <nav>
        <ul>
            <li><a href="#">Обо мне</a></li>
            <li><a href="#">Контакты</a></li>
            <li><a href="#">Навыки</a></li>
            <li><a href="#">Где меня найти</a></li>

        </ul>
    </nav>
</template>

<script>
    export default {
        name: "MenuLinks"
    }
</script>

<style scoped>
    li {
        list-style: none;
        margin-top: 90px;
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
        left: 20px;
        transform: translateY(-50%);
        width: 2px;
        height: 70%;
        max-height: 750px;
        background-color: white;
        opacity: .35;
        z-index: 10;
    }

    li::before {
        content: '';
        width: 7px;
        height: 7px;
        border-radius: 100%;
        box-shadow: 0px 0px 0px 5px rgba(255, 255, 255, 0);
        background: white;
        display: inline-block;
        position: relative;
        top: -1px;
        right: 23px;
        transition: 0.3s;
    }

    li::before:hover {
        background: #0995B6;
        opacity: 0.9;
    }


</style>