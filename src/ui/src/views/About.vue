<template>
    <div> 
<<<<<<< HEAD
        <Header /> 

        <article id="about">
            <section class="section1"> 
                <h1>What is NicFiTo?</h1>

                <p>NicFiTo is an NFT marketplace for fictional works, deployed on the Theta blockchain. These fictional works range from short stories to movies.</p>
=======
        <Header />

        <article> 
            <section> 
                <h1>What is NicFiTo?</h1> 

                <p>NicFiTo is an NFT marketplace where authors, animators and filmmakers sell their works without risk of plagiarism.</p>
>>>>>>> b0e40a94 (Added ui's /assets content)
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

<<<<<<< HEAD
article#about .section1 h1 {
    font-size: 2.3rem; 
    margin-bottom: 1.5rem; 
=======
section h1 {
    font-size: 2em; 
    margin-bottom: 3.2rem; 
>>>>>>> b0e40a94 (Added ui's /assets content)
}

</style>