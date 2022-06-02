<template>
    <div class="flex justify-around align-center pt-5 flex-wrap" >
        <div v-for="product in products" :key="product.id" class="flex-col grow w-fit h-fit m-10 shadow-md border border-gray-600 rounded-md shadow-gray-500 align-around justify-around">
            <div class="w-64 h-64 flex justify-center overflow-hidden p-2" >    
                <img :src="`https://electronic-ecommerce.herokuapp.com/${product.image}`" class="overflow-hidden" alt="image">
            </div>
            <CartButton :stock='product.stock'/>
            <h1>{{product.name}}</h1>
            <div class="flex justify-around py-2">
                <p>{{product.price}}</p>
                <p class="text-green-500">Stock left: {{product.stock}}</p>
            </div>
            <button class="border border-black py-1 px-3 mb-2 rounded-md bg-green-500 text-white text-bold">Add To Cart</button>
        </div>
    </div>
</template>

<script lang="ts">
import Product from "@/types/product";
import { defineComponent, PropType } from "@vue/runtime-core";
import CartButton from "./CartButton.vue";

export default defineComponent({
    name: 'Product',
    components: { CartButton },
    props: {
        products: {
            require: 'true',
            type: Array as PropType<Product[]>
        },
    }
})
</script>

<style>

</style>