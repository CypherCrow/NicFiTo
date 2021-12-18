<template>
    <div>
        <Header />

        <header>{{ title }}</header>

        <div id="details"> 
            <p>Type: {{ type }}</p>
            
            <div>
                <h4>Synopsis</h4> 
                <p>{{ synopsis }}</p>
            </div>
        </div>

        <div id="options"> 
            <button>Purchase</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

import Header from '../components/Header.vue'

export default {
    name: 'Book', 
    components: {
        Header, 
    }, 
    props: {
        id: {
            type: Number,
            required: true, 
        }, 
    }, 
    data() {
        return {
            title: "", 
            type: "", 
            synopsis: "", 
        }
    },
    mounted() {
        axios.get('http://localhost:8080/api/books/' + this.id, function(data) {
            this.title = data.title
            this.type = data.type
            this.synopsis = data.synopsis
        })
    }, 
}
</script>