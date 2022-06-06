<template>
<div class="container mx-auto flex justify-center align-center">
    <div class="w-3/4 lg:w-1/3 border border-black flex-col justify-around align-center mt-10 ">
        <h1 class="p-5 text-bold text-2xl text-green-700">Cart Items</h1>
        <div v-if="userItem.length > 0">
        <div v-for="item in userItem" :key="item.id" class="flex justify-around border border-green-500 m-2 p-3 rounded-md">
            <div class="w-20 h-20 flex justify-center p-2" >    
                <img :src="`https://electronic-ecommerce.herokuapp.com/${item.image}`" class="overflow-hidden" alt="image">
            </div>
            <div class="flex-col justify-between">
                <h1 class="self-start">{{item.name}}</h1>
                <h1>{{item.price}}</h1>
            </div>
            <!-- <span class="hidden">{{test(item)}}</span> -->
            <div class="flex-col justify-around align-around">
                <h1>{{item.productCount}}</h1>
                <button @click="removeCart(item.id)" class="border border-black py-1 px-3 mb-2 rounded-md bg-green-500 text-white text-bold">remove</button>
            </div>
        </div>
        </div>
        <div v-else>
            <h1>NO ITEMS IN THE CART</h1>
        </div>
        <p class="p-5">Total Amount: {{'$' + total1}} </p>
        <div class="mb-4">
        <router-link to="/checkout" class="border border-black py-1 px-3 mb-2 rounded-md bg-green-500 text-white text-bold">CheckOut</router-link>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
    name: 'Cart',
    data (){
        return {
            total1: 0
        }
    },
    computed: {
        ...mapGetters(['userItem',]),
    },
    methods: {
        ...mapActions(['removeCart',]),
        test (){
        this.userItem.forEach((item:any) => {
            
        let prc = parseInt(''+ item.price.slice(1,item.price.length));
        this.total1 += prc * item.productCount;
        });
        }
    },
    created(){
        this.test();
    }
})
</script>

<style>

</style>