<template>
  <div class="home">
  <Product :products="allProducts"/>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { mapGetters, mapActions } from 'vuex';
  import Product from '../components/Product.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Product,
},
computed: mapGetters(['allProducts']),
methods: {
  ...mapActions(['getProducts'])
},
created() {
  this.getProducts();
}
})
</script>

