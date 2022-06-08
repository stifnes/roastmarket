<script setup>
import { ref } from "vue";

defineProps({
  categoryTitle: String,
});

</script>

<template>
    <select class="select-option">
      <option >Sort by</option>
      <option value="price">Price</option>
      <option value="populariy">Populariy</option>
    </select>
</template>

<style scoped>
.select-option {
  border: none;
  border-bottom: 1px solid #000;
  outline: none;
  width: 50%;
  margin-left: 10px;
}
</style>
