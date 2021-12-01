<template>
    <div>
        <Header />
        <p>{{ msg }}</p>
    </div>
</template>

<script>
import axios from 'axios'

import Header from '../components/Header.vue'

export default {
    name: 'Home', 
    components: {
        Header, 
    }, 
    data(){
        return {
            msg: ''
        }
    }, 
    mounted(){
        axios.get('http://localhost:8080/api/message/hello')
            .then(response => this.msg = response.data)
            .catch(error => this.msg = error)
    },
}
</script>

<style scoped>

</style>