<template>
<div class="container lg:mx-auto lg:w-1/3 px-5 mt-5 ">
    <div v-for="product in productDetail" :key="product.id" class="w-fit h-fit border border-black flex-col justify-center p-5">
      <div class="w-52 sm:w-80 h-fit mx-auto ">
        <img :src="`https://electronic-ecommerce.herokuapp.com/${product.image}`"  alt="Image of the Product">
      </div>
      <h1 class="py-5 text-2xl text-green-600 font-bold">Name of the product {{product.name}}</h1>
      <p> The Name of this Product is {{product.name}}. It market value is {{product.price}}. Currently We have {{product.stock}} items in our stock. Purchase this product its sold out.</p>
      <div class="flex py-5 justify-around">
        <h1>Price: {{product.price}}</h1>
        <h1>Stock Left: {{product.stock}}</h1>
      </div>
      <CartBtn :product="product"/>
      <button :disabled="product.productCount === 0 ? true : false" @click="setUserItem(product)" class="border border-black py-1 px-3 my-2 rounded-md bg-green-500 text-white text-bold">Add To Cart</button>
    </div>
</div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex';
import CartBtn from "./CartBtn.vue";

export default {
    name: 'ProductDetails',
    data() {
      return {
        id: this.$route.params.id,
      }
    },
    components: { CartBtn },
    computed:{
      ...mapGetters(['productDetail']),
    },
    methods: {
      ...mapActions(['getProduct','setUserItem']),
    },
    created() {
      this.getProduct(this.id);
    }
}
</script>

<style>

</style>