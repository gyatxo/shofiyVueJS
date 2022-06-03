<template>
    <div class="py-2 flex justify-around">
        <button @click="updateProductCount(0)" class="border border-solid border-green-500 text-green-500 px-4 rounded-md shadow"> - </button>
        <span>{{product.productCount}}</span>
        <button @click="updateProductCount(1)" class="border border-solid border-green-500 text-green-500 px-4 rounded-md shadow"> + </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: 'CartBtn',
    props:{
        product: {
            require: 'true',
            type: Object,
            default(){
                return {}
            }
        },
    },
    methods: {
        updateProductCount(updateType:number) {
            if(updateType == 0) {
                if(this.product.productCount > 0)
                this.product.productCount --;
            }
            else {
                if(this.product.stock > this.product.productCount){
                    this.product.productCount ++;
                }
            }
        }
    }
})
</script>

<style>

</style>