<template>
    <div>
        <Header />
        <p>{{ msg }}</p>
    </div>
</template>

<script>
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
        fetch("/api/messages/hello")
            .then((response) => response.text())
            .then((data) => {
                this.msg = data;
            })
    },
}
</script>

<style scoped>

</style>