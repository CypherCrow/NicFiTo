<template>
    <div> 
        <Header />

        <article> 
            <section> 
                <h1>What is NicFiTo?</h1> 

                <p>NicFiTo is an NFT marketplace where authors, animators and filmmakers sell their works without risk of plagiarism.</p>
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

section h1 {
    font-size: 2em; 
    margin-bottom: 3.2rem; 
}

</style>