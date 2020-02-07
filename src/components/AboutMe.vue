<template>
    <section class = "about-me">
        <div class="about-me__header">
        <div class="my-photo">
        </div>
        <div class="title">
            <p>WEB - STUDIO</p>

        </div>
        </div>
    </section>

</template>

<script>
    export default {
        name: "AboutMe"
    }
</script>

<style scoped>
    .about-me {
        width: 80%;
        margin-right: 15px;
        margin-left: 60px;
        height: 570px;
        -webkit-box-shadow: -1px -2px 24px -6px rgba(9,150,182,1);
        -moz-box-shadow: -1px -2px 24px -6px rgba(9,150,182,1);
        box-shadow: -1px -2px 24px -6px rgba(9,150,182,1);
        border-radius: 10px;
        border: 2px solid #0995B6;
    }

    .my-photo {
        width: 150px;
        height: 150px;
        border-radius: 100%;

        transition: 0.5s ease;
        background-size: cover;
        margin-left: 30px;
        margin-top: 20px;
    }

    .title {
        color: white;
        font-family: 'Rubik', sans-serif;
        font-size: 30px;
        margin-right: 50px;
        margin-top: 20px;
    }

    .my-photo:hover {
        -webkit-box-shadow: -1px -2px 24px -6px rgba(9,150,182,1);
        -moz-box-shadow: -1px -2px 24px -6px rgba(9,150,182,1);
        box-shadow: -1px -2px 24px -6px rgba(9,150,182,1);
    }

    .about-me__header {
        display: flex;
        justify-content: space-between;
    }
</style>