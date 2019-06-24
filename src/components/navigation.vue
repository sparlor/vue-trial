<template>
    <div class = "navbar" id="top">
        <nav class = "logo">
            <a href = "/">Parlor Web Design</a>
        </nav>
        <nav class = "main-nav">
            <a href = "/">Home</a>
            <a href = "/">About</a>
            <a href = "/">Products</a>
            <a href = "/">Contact</a>
        </nav> 
    </div>
</template>

<script>
export default {
    name: 'navigation',
    methods: {
        scrollCheck: function() {
            const nav = document.querySelector(".navbar")
            if(window.pageYOffset > 100) {
                nav.classList.add("scroll")
            } else {
                nav.classList.remove("scroll")
            }
        }
    },
    mounted() {
        document.addEventListener('scroll', this.scrollCheck)
    }
}
</script>

<style scoped>

.logo {
    display:inline-block;
    font-family: 'Raleway', sans-serif;

}

.logo a {
    border:none;
    font-family: 'Raleway', sans-serif;
    color:#a800fc;
    font-size:1.5rem;

}

.logo a:hover {
    border:none;
}

.navbar {
    padding:2rem 0;
    width:100%;
    position:fixed;
    transition: all .5s ease

}

.main-nav {
    float:right;
}

a {
    color:white;
    text-decoration: none;
    margin: 0 1rem;
    padding:1rem;
    border:1px solid transparent;
    transition: all ease .3s;
    font-size:1.2rem;

}

a:hover {
    border:1px solid;
    transition: all ease .3s;
    border-radius: 5px;
}

.navbar.scroll {
    background-color:rgba(0,0,0,.9);
    transition: all .5s ease
}

.scroll a {
    transition: all .5s ease

}

</style>
