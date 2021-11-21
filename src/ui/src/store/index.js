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
    mutations: {
        add_prose(type, title, price){

            let newProse = { 'title': title, 'price': price }

            if(type === 'poem')
                this.state.prose.poems.append(newProse)
            if(type === 'short_story')
                this.state.prose.shortStories.append(newProse)
            if(type === 'novelette')
                this.state.prose.novelettes.append(newProse)
            if(type === 'novella')
                this.state.prose.novellas.append(newProse)
            if(type === 'novel')
                this.state.prose.novels.append(newProse)

        }, 
        add_comic(type, title, price){

            let newComic = { 'title': title, 'price': price }

            if(type === 'regular')
                this.state.comics.regular.append(newComic)
            if(type === 'manga')
                this.state.comics.manga.append(newComic)
        }
    }, 
    actions: {}, 
    getters: {}, 
    modules: {}, 
})

