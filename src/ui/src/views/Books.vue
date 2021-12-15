<template>
    <div> 
        <Header /> 

        <div id="storeContent">
            <div id="product" v-for="book in this.books" :key="book.id">
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
import axios from 'axios'

export default {
    name: 'Books', 
    components: {
        Header, ProductCard, StoreSidebar
    }, 
    /* computed: {
        books(){
            books = $store.getters.getBooks()
        }
    }, */
    methods: {
        getBooks() {
            axios.get('http://localhost:8080/api/books')
                .then(response => this.books = response.data)
        },
    }, 
    data(){
        return {
            books: []
        }
    }, 
    mounted() {
        this.getBooks()
        //$store.dispatch('addAllBooks')
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
    padding: 0.2em; 
    flex-direction: row;
}

div#sidebar {
    float: right; 
}

</style>