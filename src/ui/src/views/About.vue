<template>
    <div> 
        <Header /> 

        <article id="about">
            <section class="section1"> 
                <h1>What is NicFiTo?</h1>

                <p>NicFiTo is an NFT marketplace for fictional works, deployed on the Theta blockchain. These fictional works range from short stories to movies.</p>
            </section>
        </article>
    </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
    name: 'About', 
    components: {
        Header, 
    }
}
</script>

<style scoped>

article#about .section1 h1 {
    font-size: 2.3rem; 
    margin-bottom: 1.5rem; 
}

</style>