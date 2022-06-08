<script setup>
import { ref, onMounted } from "vue";

defineProps({
  productTitle: String,
  price: Number,
  basepriceAmount: String,
  basepriceBaseAmount: String,
  productTitle: String,
  discount: String,
  image: String,
  rating: Number,
  isInStock: Boolean,
});

onMounted(() => {});
</script>

<template>
  <div>
    <div class="image-container">
      <img :src="image" />
    </div>
    <h4>{{ price }} EUR</h4>
    <h5>{{ basepriceAmount + "EUR" }} / {{ basepriceBaseAmount + "g" }}</h5>
    <h4>{{ productTitle }}</h4>
    <h4>{{ discount }}</h4>
    <h6>Rating {{ rating }}</h6>
    <span v-if="!isInStock" class="outofstock">Out of Stock</span>
  </div>
</template>

<style scoped>
.image-container {
  background: #eaeaea;
  max-width: 50%;
}
.image-container img {
  width: 100%;
}
.outofstock {
  background: #000;
  color: #eaeaea;
}
</style>
