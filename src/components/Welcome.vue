<template>
    <div class = "welcome">
        <h1>Look Better than the Other Guy.</h1>
    </div>
</template>

<script>
export default {
    name: 'Welcome'
}
</script>

<style scoped>
    .welcome {
        height:100vh;
        width:100vw;
        background-image:radial-gradient(closest-side at 45% 50%, transparent,black), url('../assets/peacock.jpg');
        background-size:cover;
        background-position: center center;
        display:flex;
        justify-content: flex-end;
    }

    h1 {
        margin:0;
        color:white;
        align-self: center;
        font-size:4em;
        width:30%;
    }


</style>

