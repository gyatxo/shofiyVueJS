<template>
  <div class="flex justify-center align-center h-screen">
    <form class="flex-col border border-black w-80 h-36 p-5 justify-around mt-20">
        <h1>Login Details</h1>
        <div class="flex justify-between py-3">
          <label class="grow" for="username">Username:</label>
          <input class="grow border border-green-500 rounded-md px-4" type="text" name="username" placeholder="Enter your Username">
        </div>
        <div class="flex justify-between">
          <label class="grow" for="password">Password:</label>
          <input class="grow border border-green-500 rounded-md px-4" type="password" name="password" placeholder="Enter your Password">
        </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent ({
    name: 'Login',
});
</script>

<style>

</style>