<template>
    <div class="contact">
        <div class="mobile-field">
            <div class="mobile-numbers">
                <p>+7(776)-288-49-55</p>
                <p>+7(776)-153-44-76</p>
                <hr width="50%">
                <div class="home-contact">
                    <p>International Information Technology University</p>
                    <p>Казахфильм 8 - 88 (г. Алматы)</p>
                    <a href="https://mail.google.com/mail/u/0/#search/huistowns%40gmail.com" target="_blank">huistowns@gmail.com</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped>
    .contact {
        width: 100%;
        display: flex;
        justify-content: center;
    }


    * {
        color: white;
        font-family: 'Rubik', sans-serif;
    }

    .mobile-numbers {
        letter-spacing: 4px;
        font-size: 20px;
    }

    .map-field p {
        text-align: center;
    }

    .mobile-numbers > p:nth-child(1) {
        margin-top: 50px;
        color: darksalmon;
    }

    .mobile-numbers > p:nth-child(2) {
        margin-top: 8px;
        margin-bottom: 40px;
    }


    .home-contact {
        margin-top: 40px;
        letter-spacing: 2px;
        line-height: 40px;
    }

    .home-contact a {
        color: crimson;
        text-decoration: none;
    }
</style>