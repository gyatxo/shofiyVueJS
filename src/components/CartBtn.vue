<template>
    <div class="py-2 flex justify-around">
        <button @click="updateProductCount(0)" class="border border-solid border-green-500 text-green-500 px-4 rounded-md shadow"> - </button>
        <span>{{productCount}}</span>
        <button @click="updateProductCount(1)" class="border border-solid border-green-500 text-green-500 px-4 rounded-md shadow"> + </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
    name: 'CartB',
    // data() {
    //     return {
    //         productCount: 0
    //     }
    // },      
    props:{
        stock: {
            require : 'true',
            type: Number,
        },
        productCount: {
            type : Number,
            default(){
                return 0;
            }
        }
    },
    computed: mapGetters(['getCount']),
    methods: {
        ...mapActions(['increaseCount','decreaseCount']),
        updateProductCount(updateType:number) {
            if(updateType == 0) {
                if(this.productCount > 0)
                this.productCount + 1;
            }
            else {
                if(parseInt('' + this.stock) > this.productCount){
                    this.productCount -1
                }
            }
        }
    }
})
</script>

<style>

</style>