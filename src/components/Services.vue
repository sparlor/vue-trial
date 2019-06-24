<template>
    <div class = "services">
        <h1 v-scroll-reveal.reset>Take your Business to the Next Level.</h1>
        <div class= "serv-list">
            <div class ="item" v-for="service in services" v-bind:key="service.index" v-scroll-reveal.reset>
                <p id="one">{{service.title}}</p>
                <p id ="two">{{service.second}}</p>
                <p id="description"> {{service.description}}</p>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
    name: "Services",
    data: function() {
        return{
            services: [
                {title: "Organic", second:"SEO", description: "Generate traffic to your site with organic search results. Increase traffic, increase revenue."},
                {title: "Affordable", second:"Hosting", description: "Bring hosting costs down with reliable hosting infrastructure. Reduce Downtime and keep your site up for every eye to see."},
                {title: "Reliable", second:"Sevice", description: "Call or email us anytime for any need. We actively monitor your site to ensure your customers satisfaction."},
                {title: "Custom", second:"Design", description: "By using our designers and web developers, beat the competition by having a unique and updated website."},
                {title: "Mobile", second:"Apps", description: "Progressive Web Applications are an affordable and reliable way to reach your clients on mobile devices."},
                {title: "Measurable", second:"Results", description: "Measure key performance indicators to optimize your needs. Why pay for things you don't use?"},


                // {title: "test2"},

            ],
        }
    }
}
</script>

<style scoped>

@media handheld, screen and (max-width:900px){
    .serv-list{
        display: grid;
        grid-template-columns: auto auto !important;
        width: 100% !important;
        margin: 0 auto;
    }
}

.services {
    text-align:center;
    min-height:100vh;
    background-color:black;
    color:#a800fc;
}

.serv-list {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-row-gap: 2rem;
    width: 95%;
    margin: 0 auto;
    grid-column-gap: 5rem;
}

h1 {
    margin: 0;
    font-size: 4rem;
    width: 90%;
    margin: 0 auto;
    padding-bottom: 5rem;
    color:white;
    position: relative;
    top:2rem;
}

.item {
    display: grid;
    grid-template-rows: auto auto 50%;
    grid-template-columns: auto auto;
    padding-bottom:1rem;
    margin-bottom:1rem;
    border-bottom:1px solid gray;

}

p#one {
    font-size: 4rem;
    margin: 0;
    text-transform: uppercase;
    grid-column-end: 3;
    grid-column-start: 1;
    justify-self: flex-end;
}

p#two {
    font-size: 2rem;
    margin: 0;
    grid-row-start: 2;
    grid-column-start: 2;
    justify-self:baseline;
}

p#description {
    grid-row-start: 3;
    grid-column-end: 3;
    grid-column-start: 1;
    padding-top: 2rem;
    text-align: right;
}
</style>