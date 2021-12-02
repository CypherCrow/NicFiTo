<template> 
    <div>
        <Header />

        <header>New Book/Story</header>

        <form id="newProductForm" @submit="submit">
            <label for="title">Title</label>
            <input type="text" id="title" name="title" v-model="title" />
            <br>
            <label for="synopsis" id="synopsis">Synopsis (a short summary)</label><br>
            <textarea id="synopsis" name="synopsis" v-model="synopsis" rows="20" cols="70" maxlength=150 placeholder="Keep it short and sweet as possible. :)"></textarea>
            <br>
            <label for="story">Upload Story</label>
            <input type="file" id="story" name="story">
            <br>
            <div class="twoFieldsRow">
                <label for="type">Type</label> 
                <select id="type" name="type" v-model="type"> 
                    <option value="novel">Novel</option> 
                    <option value="novella">Novella</option> 
                    <option value="novellette">Novellette</option>
                    <option value="poem">Poem</option> 
                    <option value="short_story">Short Story</option>
                </select>

                <label for="price">Price</label>
                <input type="number" id="startPrice" name="startPrice" min="0" v-model="price" /> 
            </div>

            <input type="submit" value="Submit!">
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
            price: 0.00, 
            result: ''
        }
    }, 
    methods: {
        submit(e){
            e.preventDefault()

            if(!this.title)
                this.result = 'Missing title'

            if(!this.synopsis)
                this.result = 'Missing synopsis. How will people get excited about your story?'

            if(!this.type)
                this.result = 'Missing story type'

            if(!this.price)
                this.result = "It ain't an NFT is there is no price."

            if(this.title && this.type && this.synopsis && this.price){
               this.$store.dispatch('addBookAction', {
                   'title': title, 
                   'type': type, 
                   'synopsis': synopsis, 
                   'price': price
               })
               this.$router.push('/complete')
            }
        }
    }
}
</script>

<style scoped>

form {
    margin: 20px 0;
}

label {
    margin: 10px;
    font-size: 1.1rem;  
}

select {
    font-size: 1.1rem; 
}

input#story {
    font-size: 1.1rem; 
    margin: 15px 0; 
}

input#title {
    font-size: 1.1rem; 
    margin-bottom: 15px; 
}

textarea#synopsis {
    font-size: 1.1rem;
    margin: 15px 0; 
}

div.twoFieldsRow {
    margin: 15px 0; 
}

</style>
