<template>
  <div>
    <div>
    <nav class="flex justify-around lg:justify-between bg-gray-700">
      <div>
        <router-link to="/" class="uppercase text-bold text-2xl italic lg:pl-5">Shopify</router-link> 
      </div>
      <div class="flex justify-around w-1/2 lg:w-1/6 pr-5">
        <router-link to="/" class="">Home</router-link> 
        <router-link to="/cart"><i class="fas fa-cart-plus"><sup class="ml-3 py-1 px-2  rounded-full bg-green-500 text-white">{{getCount}}</sup></i></router-link> 
        <router-link to="/login"><i class="fas fa-user"></i></router-link>
      </div>
    </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
import { mapGetters } from "vuex"

export default defineComponent({
  name: 'Header',
  computed: mapGetters(['getCount'])
})
</script>


<style scoped>
nav {
  padding:10px 30px;
}

nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active,nav a.router-link-exact-active i {
  color: #42b983;
}

</style>
