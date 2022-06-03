<template>
  <div class="container mx-auto">
    <form class="flex-col align-between h-96 justify-between w-1/3 border border-black p-2 mt-5">
    <div>
        <h1 class="bg-green-500 my-5 py-2">Filter</h1>
        <label for="price">Price</label>
        <div class="w-full flex py-2">
            <input type="number" placeholder="min" v-model="minValue" class="border border-black w-1/2" />
            <span class="px-3">-</span>
            <input type="number" placeholder="max" v-model="maxValue" class="border border-black w-1/2"/>
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
    <div class="mt-36">
        <router-link class="border border-black py-1 px-3 mb-2 rounded-md bg-green-500 text-white text-bold mr-2" to="/">Cancel</router-link>
        <button class="border border-black py-1 px-3 mb-2 rounded-md bg-green-500 text-white text-bold ml-2" @click.prevent="test({minValue,maxValue,cat})" >Apply</button>
    </div>
    </form>
    <h1>{{$data}}</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'Filter',
    data() {
        return {
            minValue: 0,
            maxValue: 0,
            cat: 'all',
        }
    },
    methods: {
        ...mapActions(['test'])
    }
}
</script>

<style>

</style>