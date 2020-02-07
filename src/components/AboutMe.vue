<template>
    <section class = "about-me">

        <div class="about-me__header">
            <div class="my-photo">

            </div>
        <div class="title">
            <p>Madiyar Omirzakov <br> <abbr>Front-end разработчик</abbr></p>
            <div class="my-info">
                Привет, меня зовут Мадияр.  <br> Я занимаюсь разработкой сайтов и делаю это очень профессионально. <br>
                Любой начатый проект довожу до конца, постоянно совершенствую свой профессиональный уровень
            </div>

        </div>
        </div>


        <div class="social-links">
            <div class="cart" v-bind:title="whatsapp">
                <img src="./icons/whatsapp.png" alt="" width="75px">
            </div>
            <div class="cart" v-bind:title="instagram">
                <a v-bind:href="instagram_link" target="_blank"><img src="./icons/instagram.png" alt="" width="75px"></a>
            </div>
            <div class="cart" v-bind:title="youtube">
                <a v-bind:href="youtube_link" target="_blank"><img src="./icons/youtube.png" alt="" width="75px"></a>
            </div>
            <div class="cart" v-bind:title="facebook">
                <img src="./icons/facebook.png" alt="" width="75px">
            </div>
        </div>
        <div class="git-link">
            <a v-bind:href="github_link" v-bind:title="github" target="_blank"><img src="./icons/github.png" alt="" width="75px"></a>
            <p>GITHUB</p>
        </div>
    </section>

</template>

<script>
    export default {
        name: "AboutMe",
        data() {
            return {
                whatsapp: 'Ссылка на whatsapp',
                youtube: 'Ссылка на youtube',
                facebook: 'Ссылка на facebook',
                instagram: 'Ссылка на instagram',
                github: 'Ссылка на github',
                instagram_link: 'https://www.instagram.com/maestrobigboy/',
                youtube_link: 'https://www.youtube.com/channel/UCWn9sFYdQgwnZG2LacfuOIg/featured?view_as=subscriber',
                github_link: 'https://github.com/huistowns'
            }
        }
    }
</script>

<style scoped>
    .social-links{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin-top: 100px;
        position: relative;
    }

    .cart {
        cursor: pointer;
    }


    .title {
        margin-left: 120px;
    }

    .about-me {
        margin-left: 40px;
    }

    .title p {
        color: white;
        font-family: 'Rubik', sans-serif;
        font-size: 30px;
        margin-right: 50px;
        margin-top: 20px;

    }

    .my-photo {
        width: 200px;
        height: 200px;
        border-radius: 100%;
        margin-top: 30px;
        margin-left: 20px;
        -webkit-box-shadow: 1px 1px 34px 0 rgba(9,150,182,0.65);
        -moz-box-shadow: 1px 1px 34px 0 rgba(9,150,182,0.65);
        box-shadow: 1px 1px 34px 0 rgba(9,150,182,0.65);
        border: 1px solid #0995B6;
        transition: 0.3s ease-out;

        background: url("https://sun9-70.userapi.com/c857220/v857220876/d3323/vVvL8NyrWnw.jpg");
        background-size: cover;
    }

    .my-photo:hover {
        box-shadow: none;
    }

    .title abbr {
        color: #0995B6;
    }


    .title .my-info {
        font-family: 'Rubik', sans-serif;
        color: white;
        margin-top: 40px;
        line-height: 30px;
    }

    .about-me__header {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .git-link {
        margin-top: 25px;
        letter-spacing: 4px;
        text-align: center;
        font-family: 'Rubik', sans-serif;
        color: white;
        line-height: 40px;
    }
</style>