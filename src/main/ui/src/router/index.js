import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home'
import Books from '../views/Books'

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
]

const router = createRouter({
    history: createWebHistory(), 
    routes
})

export default router