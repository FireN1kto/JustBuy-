<template>
  <h1>Каталог</h1>
</template>

<script>
  import {defineComponent} from "vue";

  export default defineComponent({
    name: "Catalog",
  })
</script>

<script setup>
import { onMounted } from "vue";
import {productsStore} from "@/stores/products.js";

  const productStore = productsStore();

  onMounted(() => {
    console.log('MOUNTED >>>>>>')

    productStore.fetchProductsFromDB()
  })

</script>

<style>
  h1 {
    margin-top: 3rem;
    margin-left: 50rem;
    font-size: 3rem;
  }
</style>