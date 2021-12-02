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
        addBook(state, title, type, synopsis, price){
            let newBook = { 'title': title, 'type': type, 'price': price, 'synopsis': synopsis }

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
    actions: {
        addBookAction({ commit }, newBook){
            commit('addBook')

            axios.post('http://localhost:8080/api/books', newBook)
                .then(response => { console.log(response) })
                .catch(error => console.log(error))
        }, 
        addAllBooks({ commit }){
            axios.get('http://localhost:8080/api/books')
                .then(response => {
                    console.log(response)
                    response.data.forEach((book) => {
                        commit('addBook', book.title, book.type, book.synopsis, book.price)
                    })
                })
                .catch(error => console.log(error))
        }
    },
    getters: {}, 
    modules: {}, 
})

export default store