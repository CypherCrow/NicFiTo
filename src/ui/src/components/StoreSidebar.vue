<template>
    <div id="sidebar">
        <h3>Store Assistant</h3>
        <hr/>
        <h4 class="sidebarHeader">Filter Options</h4> 
        <label for="words">Word(s):</label>  <!-- For matching against search value -->
        <input type="text" id="words" name="words" v-model="wordsValue" />
        <br> 
        <label for="sort">Sort by:</label> 
        <select id="sort" name="sort" v-model="sortValue"> 
            <option value="dsc_date_published">Date Published (Descending)</option>
            <option value="asc_data_published">Date Published (Ascending)</option>
            <option value="asc_title">Title (Ascending)</option>
            <option value="dsc_title">Title (Descending)</option>
            <option value="popular">Most Popular</option>
        </select>
        <br>
        <label for="genre">Genre:</label>
        <select id="genre" name="genre" v-model="genreValue"> <!-- Account for works of multiple genres -->
            <option value="general">General</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="fantasy">Fantasy</option>
            <option value="romance">Romance</option> 
            <option value="mystery">Mystery</option>
            <option value="action">Action</option>
            <option value="historical">Historical</option>
            <option value="military">Military</option>
            <option value="horror">Horror</option>
        </select>
        <br>
        <label for="audience">Audience:</label>
        <select id="audience" name="audience" v-model="audienceValue"> <!-- Account for works of multiple genres -->
            <option value="Adult">Adult</option>
            <option value="Young Adult">Young Adult</option>
            <option value="Kids">Kids</option> 
        </select>
        <h4 class="sidebarHeader">Search Bar</h4>
        <input type="text" id="search" name="search" placeholder="Search for product title" v-model="searchValue" /> 
        <br> 
        <h4 class="sidebarHeader">New Book</h4>
        <button @click="redirectToNewBook()">Upload Here!</button>
    </div>
</template>

<script> 

export default {
    name: 'StoreSidebar', 
    data(){
        return {
            wordsValue: ['',], 
            sortValue: '',
            genreValue: '', 
            audienceValue: '', 
            searchValue: ''
        }
    }, 
    methods: {
        redirectToNewBook(){
            this.$router.push('/books/new')
        }, 
    }, 
}

</script> 

<style scoped> 
div#sidebar {
    float: right; 
    background-color: chartreuse;
    justify-content: center;
    align-items: center;
    padding: 10px; 
    margin-right: 30px;
    width: 300px;
    height: 500px;
    border-radius: 1.3rem; 
}

.sidebarHeader {
    margin: 20px 0; 
}

input {
    margin: 5px; 
}

input#words {
    border-radius: 5px; 
}

input#search {
    border-radius: 5px;
    width: 300;
}

select {
    margin: 5px;
}

</style>