<script setup>
import {ref, reactive, onMounted,computed } from "vue";
import axios from "axios"

import Header from "./components/Header.vue";
import SingleProduct from "./components/SingleProduct.vue";
import {requestURL, requestBody} from './api-data'

let products = reactive([]);
let totalProducts = ref(0)

function getProducts() {
  axios
      .post(requestURL, requestBody)
      .then(function(response) {
        products.value = [...response.data.hits.hits] 
        totalProducts.value = products.value.length
      })
      .catch(function (error) {
        console.log(error);
      });
};

onMounted(() => {
  getProducts()
})


</script>

<template>
  <Header categoryTitle="Kaffee & Espresso" />
  <div class="container">
    <h6 v-if="totalProducts">{{ totalProducts }} products</h6>
    <div class="product-grid ">
      <SingleProduct
        v-for="product in products.value" :key="product._id"
        :image="'https://c.roastmarket.de/media//catalog/product'+product._source.image"
        :productTitle="product._source.name"
        :price="product._source.price"
        :basepriceAmount="product._source.base_price_amount"
        :basepriceBaseAmount="product._source.base_price_base_amount"
        :rating="product._source.yotpo_rating"
        :isInStock="product._source.stock.is_in_stock"
      />
    </div>
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  /* height: 150vh; */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  padding: 0 20px;
}
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 25px;
}
</style>
