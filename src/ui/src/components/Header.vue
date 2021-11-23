<template>
    <div id="header">
        <div id="logo"> 
            <p>NicFiTo</p>
        </div>  

        <div id="nav"> 
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/books">Books</router-link></li>
                <li>Comics</li>
                <li>TV Series</li>
                <li>Movies</li>
                <li><router-link to="/about">About</router-link></li>
            </ul>
        </div>
    </div> 
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>

div#header {
    display: flex;
    margin: -60px 60px 40px 90px;
    flex-direction: row;
    justify-content: space-around;
}

div#logo p {
    font-size: 50px; 
    color: rgb(165, 181, 146); 
}

div#nav {
    display: flex; 
    flex-direction: row;
    /* margin-left: 10px; */
    float: right; 
}

div#nav ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
}

li {
    font-size: 20px; 
    margin: 15px; 
}

a {
    text-decoration: none;
    color: black;
}

a:hover {
    color: rgb(165, 181, 130);
    transition-duration: 0.3s;
}

a:visited {
    text-decoration: none;
}

</style>