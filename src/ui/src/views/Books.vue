<template>
    <div> 
        <Header /> 

        <div id="storeContent">
            <div id="productsSection">
                <ProductCard title="Something" text="something something" price="273.12 Theta" /> 
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
}
</script>

<style scoped>

div#storeContent {
    display: flex;
    justify-content: space-evenly;
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