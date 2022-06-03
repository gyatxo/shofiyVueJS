<template>
    <div class="w-1/2 flex-col justify-center">
      <div>
        <img src="" alt="Image of the Product">
      </div>
      <h1>Name of the product {{id}}</h1>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <div>
        <h1>price</h1>
        <h1>stock</h1>
      </div>
      <CartBtn />
      <button class="border border-black py-1 px-3 mb-2 rounded-md bg-green-500 text-white text-bold">Add To Cart</button>
    </div>
</template>

<script lang="ts">
import CartBtn from "./CartBtn.vue";
export default {
    name: 'ProductDetails',
    props: ['id'],
    components: { CartBtn }
}
</script>

<style>

</style>