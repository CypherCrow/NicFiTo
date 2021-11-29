<template> 
    <div>
        <Header />

        <header>New Book/Story</header>

        <form id="newProductForm" @submit="submit">
            <label for="title">Title</label>
            <input type="text" id="title" name="title" v-model="title" />

            <label for="synopsis">Synopsis (a short summary)</label>
            <input type="textarea" id="synopsis" name="synopsis" v-model="synopsis" />


            <div id="lastTwoFields">

                <label for="type">Type</label> 
                <select id="type" name="type" v-model="type"> 
                    <option value="novel">Novel</option> 
                    <option value="novella">Novella</option> 
                    <option value="novellette">Novellette</option>
                    <option value="poem">Poem</option> 
                    <option value="short_story">Short Story</option>
                </select>

                <label for="startPrice">Starting Price</label>
                <input type="number" id="startPrice" name="startPrice" min="0" v-model="startingPrice" /> 
            </div>

            <input type="submit">
        </form>

        <div> 
            {{ result }}
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
    name: 'NewBook', 
    components: {
        Header, 
    }, 
    data(){
        return {
            title: '', 
            synopsis: '', 
            //include an author field
            type: '', 
            startingPrice: 0.00, 
            result: 'Nothing yet :('
        }
    }, 
    methods: {
        submit(e){
            e.preventDefault()

            if(this.title && this.synopsis && this.startingPrice)
                this.result = `{\n\ttitle: ${this.title}\nsynopsis: ${this.synopsis}\ntype: ${this.type}\nstartingPrice: ${this.startingPrice}}`
        }
    }
}
</script>

<style scoped>

</style>
