<template>
    <div id="productCard"> 
        <div id="cardTitle">
            <p>{{ title }}</p>
        </div>

        <div id="cardContent"> 
            <p>{{type}}</p>
            <p>{{ text }}</p>
            <p id="price">{{ price }} THETA</p> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductCard', 
    props: {
        title: String, 
        text: String,
        type: String, 
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
    border-radius: 6px; 
    background-color: rgb(202, 200, 200);
    justify-content: center;
    align-items: center;
    margin: 0 10px 10px 15px; 
}

div#cardContent {
    justify-content: space-evenly;
}

p#price {
    float: right; 
}

div#productCard:hover {
    -webkit-box-shadow: 4px red; 
    box-shadow: 4px red; 
    border: 3px solid red; 
    transition-duration: 0.5;
}

</style>