import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home'
import About from '../views/About'
import Book from '../views/Book'
import Books from '../views/Books'
import NewBook from '../views/NewBook'
import UploadComplete from '../views/UploadComplete'

const routes = [
    {
        path: '/', 
        name: 'Home', 
        component: Home
    }, 
    {
        path: '/books', 
        name: 'Books',
        component: Books
    },
    {
        path: '/books/:id', 
        name: 'Book', 
        component: Book,
        props: (route) => {
            const id = Number.parseInt(route.params.id)
            return { id }
        }
    },
    {
        path: '/books/new',
        name: 'New Book', 
        component: NewBook  
    }, 
    {
        path: '/about',
        name: 'About', 
        component: About
    }, 
    {
        path: '/complete', 
        name: 'UploadComplete', 
        component: UploadComplete
    },
]

const router = createRouter({
    history: createWebHistory(), 
    routes
})

export default router