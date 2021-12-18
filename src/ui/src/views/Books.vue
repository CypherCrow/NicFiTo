<template>
    <div> 
        <Header /> 

        <div id="storeContent">
            <div id="product" v-for="book in books" :key="book.id">
                <ProductCard :title="book.title" :text="book.synopsis" :type="book.type" />
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
    computed: {
        books() {
            return this.$store.getters.allBooks;
        }
    },  
    mounted(){
        this.$store.dispatch("getBooks")
    }
}
</script>

<style scoped>

div#storeContent {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

div#product {
    display: flex; 
    padding: 0 0.2em 0.2em 0.2em; 
    flex-direction: row;
}

div#sidebar {
    float: right; 
}

</style>