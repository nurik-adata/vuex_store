<template>
 <listOfProducts :products="getAllProducts"/>
  
</template>

<script>
import { mapGetters } from 'vuex'
import listOfProducts from '../ProductList/List'
export default {
    components:{
        listOfProducts,
    },
    computed:{
        ...mapGetters([
            'getAllProducts'
        ]),

    },
};
</script>

<style scoped>
   .listOfProducts{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 0;
        margin: 0 auto;

    }
    .product{
        width: 300px;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        list-style: none;
        padding: 1em;
        margin: 0 1em;
        align-items: center;
        box-sizing: border-box;
        border-radius: 5px;


    }
    .product-name{
        font-size: 18px;
        font-weight: normal;

    }
    .product-price{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-self: flex-start;
        margin-bottom: 1em;


    }
      .btn {
    border: 0;
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 3px;
    color: #fff;
    display: flex;
    justify-content: space-around;
    position: relative;
  }
  .btn-small {
    padding: .5em 2em;
  }
  .btn-medium {
    padding: .7em 4.5em;
  }
  .btn-large {
    padding: .7em 5em;
  }
  .btn-info {
    background-color: #2D9CDB;
  }
  .btn-sucess {
    background-color: #27AE60;
  }
  .btn-danger {
    background-color: #e74c3c;
  }


</style>