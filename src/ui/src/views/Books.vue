<template>
    <div> 
        <Header /> 

        <div id="storeContent">
            <div id="productsSection" v-for="book in $store.state.books" :key="book.id">
                <ProductCard :title="book.title" :text="book.synopsis" :type="book.type" :price="book.price" />
            </div> 

            <div id="sidebar">
                <StoreSidebar />
            </div>
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
    data(){
        return {
            books: []
        }
    }, 
    mounted() {
        $store.dispatch('addAllBooks')
    }
}
</script>

<style scoped>

div#storeContent {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

div#productsSection {
    display: flex; 
    padding: 0.2em 12.3em; 
    flex-direction: row;
}

div#sidebar {
    float: right; 
}

</style>