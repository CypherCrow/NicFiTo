<template>
    <div id="productCard"> 
        <div id="cardTitle">
            <p>{{ title }}</p>
        </div>

        <div id="cardContent"> 
            <p>{{ text }}</p>
            <p>{{ price }}</p> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductCard', 
    props: {
        title: String, 
        text: String,
        price: String
    }
}
</script>

<style scoped>

div#productCard {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 300px; 
    border-radius: 10px; 
    background-color: grey;
    justify-content: center;
    align-items: center;
}

div#cardContent {
    justify-content: center;
}

div#productCard:hover {
    -webkit-box-shadow: 4px red; 
    box-shadow: 4px red; 
    transition-duration: 0.3;
}

</style>