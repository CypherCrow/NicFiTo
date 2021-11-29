<template>
    <div> 
        <Header /> 

        <div id="booksContent">
            <div id="productsSection">
                <ProductCard title="Something" text="something something" price="273.12 Theta" /> 
            </div> 

            <StoreSidebar />
        </div>
    </div> 
</template>

<script>
import Header from '../components/Header.vue'
import ProductCard from '../components/ProductCard.vue'
import StoreSidebar from '../components/StoreSidebar.vue'

export default {
    name: 'Books', 
    components: {
        Header, ProductCard, StoreSidebar
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

</style>