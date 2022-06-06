<template>
  <div class="lg:container lg:mx-auto lg:w-1/2">
    <form  class="flex-col m-5 h-fit justify-center align-center border border-black p-2 " >
            <h1 class="self-center uppercase pb-5">Billing Details</h1>
            <div class="flex justify-between p-3 w-full">
                <label class="p-2" for="name"> Name :</label>
                <input class="border border-solid border-gray-300 w-1/2 rounded-md p-2" type="text" name="name" placeholder="Enter Name">
            </div>
            
            <div class="flex justify-between p-3 w-full">
                <label class="p-2" for="email"> Email :</label>
                <input class="border border-solid border-gray-300 lg:w-1/2 rounded-md p-2" type="email" name="email" placeholder="Enter Email">
            </div>
            
            <div class="flex justify-between p-3 w-full">
                <label class="p-2" for="phone"> Phone :</label>
                <input class="border border-solid border-gray-300 lg:w-1/2 rounded-md p-2" type="number" name="phone" placeholder="Enter Phone Number">
            </div>
            
            <div class="flex justify-between p-3 w-full">
                <label class="p-2" for="address">Permanent Address :</label>
                <input class="border border-solid border-gray-300 lg:w-1/2 rounded-md p-2" type="text" name="address" placeholder="Enter Address">
            </div>
            
            
            
            <div class="flex justify-around p-3 w-full">
            <router-link to="/">
                <input type="button" class="border border-black py-1 px-3 mb-2 rounded-md bg-green-500 text-white text-bold" value="submit"  name="submit">
            </router-link>
                <input class="border border-black py-1 px-3 mb-2 rounded-md bg-green-500 text-white text-bold" type="reset" name="reset" value="reset">
            </div>
        </form>
  </div>
</template>

<script>
export default {
    name: 'CheckOut'
}
</script>

<style>

</style>