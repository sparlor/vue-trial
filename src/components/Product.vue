<template>
    <div class = "products-section">
        <div class ="product" v-for="product in products" v-bind:key="product.index">
            <h1 id="heading">{{product.heading}}</h1>
            <p id ="subheading">{{product.subheading}}</p>
            <button :href = product.route class = "more-info">Learn More</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Product",
    data: function() {
        return{
            products: [
                {heading:"Enterprise", subheading:"Software Applications", route:'/' },
                {heading:"Marketing", subheading:"Websites and SEO", route:'/' },
                {heading:"Hosting", subheading:"Hosting Web Apps", route:'/' },
                {heading:"Marketing", subheading:"Websites and SEO", route:'/' }

            ]
        }
    }
}
</script>

<style scoped>
    .products-section {
        min-height: 70vh;
        display: grid;
        grid-template-columns: auto auto auto auto;
        width: 95%;
        margin: 0 auto;
    }

    h1 {
        margin:0;
        color:#a800fc;
    }

    p {
        margin:0;
    }

    .product {
        width: 80%;
        height:45vh;
        border-radius: 10px;
        justify-self: center;
        align-self: center;
        text-align: center;
        border:1px solid lightgray;
        color:black;
        display:grid;
        grid-template-rows: 15% 10% auto;
        grid-template-columns: auto;

    }

    #heading {
        grid-row-start:1;

    }

    #subheading {
        grid-row-start: 2;
    }

    button.more-info {
        height: 15%;
        width: 60%;
        border-radius: 5px;
        background-color: #54007e;
        color: white;
        font-size: 1.2rem;
        border: none;
        justify-self: center;
        align-self: end;
        position:relative;
        bottom:3rem;
    }
</style>