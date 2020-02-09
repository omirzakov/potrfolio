<template>
    <header>
        <div class="logo">
            <img src="https://1.bp.blogspot.com/-Kcxa5-DHVXM/We9AwTPxRwI/AAAAAAAAAL8/fupKL3cKfmYWd-bUEOridXqnhPRWbJOMwCLcBGAs/s1600/1.png" alt="Logo" width="60px">
            <a href="/"><p>Madiyar Omirzakov</p></a>
        </div>
        
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .logo {
        display: flex;
    }
    .logo a {
        position: relative;
        top: 15px;
        transition: 0.3s;
        cursor: pointer;
        text-decoration: none;
        color: white;
    }

    .logo a:hover {
        color: #0995B6;
        opacity: 0.9;
    }

    header {
        font-family: 'Teko', sans-serif;
        color: white;
        font-size: 20px;
        padding: 20px 40px;
    }
</style>