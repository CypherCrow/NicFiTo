import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home'
import Books from '../views/Books'
import NewBook from '../views/NewBook'

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
        path: '/books/new',
        name: 'New Book', 
        component: NewBook  
    }
]

const router = createRouter({
    history: createWebHistory(), 
    routes
})

export default router