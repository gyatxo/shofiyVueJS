<template>
    <div class="flex justify-between border border-black mt-10 p-5 mx-12 shadow drop-shadow-xl rounded-t-lg bg-green-500">
        <h1 class="text-bold text-white text-2xl">PROODUCTS</h1>
        <router-link to="/filter" class="border border-black bg-gray-700 px-2 rounded-md">
            <i class="fa fa-filter text-green-500 text-md text-center"><span> FILTER</span></i>
        </router-link>
    </div>
    <div class="flex justify-around align-center pt-5 flex-wrap" >
        <div v-for="product in products" :key="product.id" class="flex-col grow w-fit h-fit m-10 shadow-md border border-gray-600 rounded-md shadow-gray-500 align-around justify-around">
            <div class="w-64 h-64 flex justify-center overflow-hidden p-2" >    
                <router-link :to="{name:'ProductDetails', params: {id: product.id}}">
                <img :src="`https://electronic-ecommerce.herokuapp.com/${product.image}`" class="overflow-hidden" alt="image">
                </router-link>
            </div>
            <CartBtn :product="product"/>
            <h1>{{product.name}}</h1>
            <div class="flex justify-around py-2">
                <p>{{product.price}}</p>
                <p class="text-green-500">Stock left: {{product.stock}}</p>
            </div>
            <button :disabled="product.productCount === 0 ? true : false" @click="setUserItem(product)" class="border border-black py-1 px-3 mb-2 rounded-md bg-green-500 text-white text-bold">Add To Cart</button>
        </div>
    </div>
</template>

<script lang="ts">
import Product from "@/types/product";
import { defineComponent, PropType } from "@vue/runtime-core";
import { mapActions, mapGetters } from "vuex";
import CartBtn from "./CartBtn.vue";

export default defineComponent({
    name: 'Product',
    data(){
        return {
            productCount: 0
        }
    },
    components: { CartBtn },
    computed: mapGetters(['userItem']),
    props: {
        products: {
            require: 'true',
            type: Array as PropType<Product[]>
        },
    },
    methods: {
        ...mapActions(['setUserItem']),
    }
})
</script>

<style>
    button:disabled{
        background-color: gray;
    }
</style>