import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        phones : [
            {
                name:'Iphone 11 Pro Max',
                price: 669890,
                image:'https://object.pscloud.io/cms/cms/Photo/img_0_81_2151_2.jpg',
                productdetails:'Good good good'
            },
            {
                name: 'Iphone 12 Mini',
                price: 399890,
                image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-family-select-2020?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604343709000',
                productdetails:'Good good good'

            },
            {
                name: 'Samsung s20 Ultra',
                price: 649890,
                image:'https://htstatic.imgsmail.ru/pic_image/1d89a5b32c5948fdf16902bdb96fb874/450/450/1682947/',
                productdetails:'Good good good'

            },
        
        ],
        laptops:[
            {
                name:'Asus Zenbook',
                price: 319990,
                image: 'https://dlcdnwebimgs.asus.com/gain/df619ee8-daca-485c-b1b3-24bd99b09f9e/',
                productdetails:'Good good good'

            },
            {
                name:'Asus Zenbook',
                price: 319990,
                image: 'https://dlcdnwebimgs.asus.com/gain/df619ee8-daca-485c-b1b3-24bd99b09f9e/',
                productdetails:'Good good good'

            },
            {
                name:'Asus Zenbook',
                price: 319990,
                image: 'https://dlcdnwebimgs.asus.com/gain/df619ee8-daca-485c-b1b3-24bd99b09f9e/',
                productdetails:'Good good good'

            },
        ],
        cartProducts: [],
        currentProduct:{},
        showModal: false,
        showPopupCart: false,


    },
    getters:{
        getPhones: state => state.phones,
        getLaptops: state => state.laptops,
        getAllProducts: state=> state.phones.concat(state.laptops),
        getCartProducts: state=> state.cartProducts,
        getCurrentProduct: state=>state.currentProduct,
        getShowModal: state=>state.showModal,
        getShowPopupCart: state=>state.showPopupCart




    },
    mutations:{
        ADD_PRODUCT : (state, product) => {
            state.cartProducts.push(product)

        },
        REMOVE_PRODUCT : (state, index) =>{
            state.cartProducts.slice(index, 1)
        },
        CURRENT_PRODUCT: (state, product) =>{
            state.currentProduct = product
        },
        SHOW_MODAL: (state) => {
            state.showModal = !state.showModal;
          },
        SHOW_POPUP_CART: (state) => {
            state.showPopupCart = !state.showPopupCart;
          },




    },
    actions:{
        addProduct: (context, product) => {
            context.commit('ADD_PRODUCT', product);
          },
          removeProduct: (context, index) => {
            context.commit('REMOVE_PRODUCT', index);
          },
          getCurrentProduct: (context, product) => {
            context.commit('CURRENT_PRODUCT', product);
          },
          showOrHiddenModal: (context) => {
            context.commit('SHOW_MODAL');
          },
          showOrHiddenPopupCart: (context) => {
            context.commit('SHOW_POPUP_CART');
          },
    },
});