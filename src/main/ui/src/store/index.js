import { createStore } from 'vuex'

const store = createStore({
    state: {
        prose: [
            poems: [], 
            shortStories: [],
            novelettes: [], 
            novellas: [], 
            novels: [], 
        ], 
        comics: [
            regular: [], 
            manga: [], 
        ],
        television: [
            live: [], 
            animated: [],
        ], 
        movies: [],
    }, 
    mutations: {}, 
    actions: {}, 
    getters: {}, 
    modules: {}, 
})

