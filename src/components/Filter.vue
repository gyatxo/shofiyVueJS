<template>
  <div class="container md:mx-auto px-5 lg:w-1/3 flex-col align-center justify-center">
    <form class="flex-col  lg:w-full align-between h-96 justify-between border border-black p-2 mt-5 ">
    <div>
        <h1 class="bg-green-500 my-5 py-2">Filter</h1>
        <label for="price">Price</label>
        <div class="w-full flex py-2">
            <input type="text" placeholder="min" v-model="minValue" class="border border-black w-1/2 pl-2" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"/>
            <span class="px-3">-</span>
            <input type="text" placeholder="max" v-model="maxValue" class="border border-black w-1/2 pl-2" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"/>
        </div>

        <h6>Category</h6>
        <select v-model="cat" class="border border-black w-full">
            <option value="all">All</option>
            <option value="laptop">Laptop</option>
            <option value="mobile">Mobile</option>
            <option value="keyboard">Keyboard</option>
            <option value="headseat">Headset</option>
            <option value="watch">Watch</option>
        </select>
    </div>
    <div class="mt-32">
        <router-link class="border border-black py-1 px-3 mb-2 rounded-md bg-green-500 text-white text-bold mr-2" to="/">Cancel</router-link>
        <button class="border border-black py-1 px-3 mb-2 rounded-md bg-green-500 text-white text-bold ml-2" @click.prevent="filterProduct({minValue,maxValue,cat})" >Apply</button>
    </div>
    </form>
    </div>
    <div v-if="filteredProductList.length > 0">
    <Product  :products="filteredProductList"/>
    </div>
    <!-- <div v-else>hello</div> -->
  
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Product from "./Product.vue";
export default {
    name: 'Filter',
    data() {
        return {
            minValue: '',
            maxValue: '',
            cat: 'all',
        }
    },
    computed: {...mapGetters(['filteredProductList'])},
    components: {Product},
    methods: {
        ...mapActions(['filterProduct'])
    }
}
</script>

<style>

</style>