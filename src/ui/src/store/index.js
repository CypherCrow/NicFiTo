import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state: {
        books: [], 
        comics: [],
        television: [], 
        movies: [],
    }, 
    mutations: {
        setBooks(state, books){
            state.books = books
        },
        addBook(state, title, type, synopsis, price){
            let newBook = { 'title': title, 'type': type, 'price': price, 'synopsis': synopsis }

            state.books.push(newBook) 
        }, 
        addComic(state, title, type, synopsis, price){
            let newComic = { 'title': title, 'type': type, 'price': price, 'synopsis': synopsis }

            state.comics.push(newComic)
        }, 
        addTelevision(state, title, type, synopsis, price){
            let newTelevision = { 'title': title, 'type': type, 'price': price, 'synopsis': synopsis }

            state.television.push(newTelevision)
        },
        addMovie(state, title, type, synopsis, price){
            let newMovie = { 'title': title, 'type': type, 'price': price, 'synopsis': synopsis }

            state.movies.push(newMovie)
        },
    }, 
    actions: {
        addBookAction(context, newBook){
            context.commit('addBook', newBook)

            axios.post('http://localhost:8080/api/books', newBook)
                .then(response => { console.log(response) })
                .catch(error => console.log(error))
        }, 
        editBookAction(context, detail){
            context.commit('editBook', detail)

            axios.patch('http://localhost:8080/api/books', detail)
                .then(response => console.log(response))
                .catch(error => console.log(error))
        }, 
        getBooks({ commit }){
            axios.get("http://localhost:8080/api/books")
                .then(response => {
                    commit('setBooks', response.data)
                })
        }
    },
    getters: {
        allBooks: (state) => state.books
    }, 
    modules: {}, 
})

export default store