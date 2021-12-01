<template>
    <div>
        <Header />

        <header>{{ title }}</header>

        <div> 
            <p>Type: {{ type }}</p>
            
            <div>
                <h4>Synopsis</h4> 
                <p>{{ synopsis }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
    name: 'Book', 
    components: {
        Header, 
    }, 
    data() {
        return {
            title: "", 
            synopsis: "", 
            type: "", 
        }
    },
}
</script>