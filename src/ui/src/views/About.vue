<template>
    <div> 
        <Header /> 

        <article>
            <section> 
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