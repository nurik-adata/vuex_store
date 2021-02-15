import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import allProducts from '../components/AllProducts/Products'
import allPhones from '../components/AllPhones/Phones'
import allLaptops from '../components/AllLaptops/Laptops'
import productDetails from '../components/Product Details/productDetails'
import chechoutCart from '../components/Checkout Cart/Checkout'

export default new VueRouter ({
    routes:[
        {
            path: '/',
            name: 'All Products',
            component: allProducts

        },
        {
            path:'/phones',
            name:'All Phones',
            component: allPhones 

        },
        {
            path:'/laptops',
            name: 'All Laptops',
            component: allLaptops

        },
        {
            path: 'product-details',
            name:'Product',
            component : productDetails

        },
        {
            path:'/checkout',
            name:'Checkout Cart',
            component: chechoutCart

        }
    ]
})
