import { createStore } from 'vuex'

const store = createStore({
    state: {
        books: [], 
        comics: [],
        television: [], 
        movies: [],
    }, 
    mutations: {
        addBook(state, title, type, synopsis, price){
            let newProse = { 'title': title, 'type': type, 'price': price, 'synopsis': synopsis }

            this.state.books.push(newProse) 
        }, 
        addComic(state, title, type, synopsis, price){
            let newComic = { 'title': title, 'type': type, 'price': price, 'synopsis': synopsis }

            this.state.comics.push(newComic)
        }, 
        addTelevision(state, title, type, synopsis, price){
            let newTelevision = { 'title': title, 'type': type, 'price': price, 'synopsis': synopsis }

            this.state.television.push(newTelevision)
        },
        addMovie(title, type, synopsis, price){
            let newMovie = { 'title': title, 'type': type, 'price': price, 'synopsis': synopsis }

            this.state.movies.push(newMovie)
        },
    }, 
    actions: {}, 
    getters: {}, 
    modules: {}, 
})

