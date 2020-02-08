<template>
    <div class="contact">
        <h1>Мои контакты</h1>
        <div class="map-field">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d727.2042035712768!2d76.90337993696413!3d43.192354414858606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skz!4v1581170519513!5m2!1sru!2skz" width="600px" height="200" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
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
        margin-left: 120px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    * {
        color: white;
        font-family: 'Rubik', sans-serif;
    }

    .map-field {
        text-align: center;
        width: 100%;
        opacity: 0.9;
    }
</style>