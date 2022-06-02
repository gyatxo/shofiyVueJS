<template>
    <div class="py-2 flex justify-around">
        <button @click="less" class="border border-solid border-green-500 text-green-500 px-4 rounded-md shadow"> - </button>
        <span class="text-green-500"> {{count}} </span>
        <button @click="add" class="border border-solid border-green-500 text-green-500 px-4 rounded-md shadow"> + </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
    name: 'CartButton',
    data(){
        return {
            count: 0,
        }
    },
    props:{
        stock: {
            require : 'true',
            type: Number
        }
    },
    computed: mapGetters(['getCount']),
    methods: {
        ...mapActions(['increaseCount','decreaseCount']),
        add(){
            if(parseInt(''+this.stock) >this.count){
            this.count ++ ;
            }else{
                alert('Stock Limit Reached!!')
            }
        },
        less(){
            this.stock
            this.count -- ;
        }
    }
})
</script>

<style>

</style>