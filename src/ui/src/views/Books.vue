<template>
    <div> 
        <Header /> 

        <div id="booksContent">
            <div id="productsSection">
                <ProductCard title="Something" text="something something" price="273.12 Theta" /> 
            </div> 

            <div id="sidebar"> 
                <button @click="create">New Book</button>
            </div>
        </div>
    </div> 
</template>

<script>
import Header from '../components/Header.vue'
import ProductCard from '../components/ProductCard.vue'

export default {
    name: 'Books', 
    components: {
        Header, ProductCard,
    }, 
    methods: {
        create(){
            this.$router.push({ path: '/books/new' })
        }
    }
}
</script>

<style scoped>

div#booksContent {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

div#productsSection {
    display: flex; 
    padding: 1.2em 12.3em; 
    flex-direction: row;
}

div#sidebar {
    float: right; 
    background-color: chartreuse;
    justify-content: center;
    align-items: center;
    padding: 10px; 
    margin-right: 30px;
    width: 200px;
    height: 500px;
    border-radius: 1.3rem; 
}

</style>