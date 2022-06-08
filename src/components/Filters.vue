<script setup>
import { reactive, ref } from "vue";

const showFilters = ref(false);
const filters = reactive([
  {
    name: "price",
    id: "price",
    selected: false,
  },
  {
    name: "popularity",
    id: "popularity",
    selected: false,
  },
]);
const onPressFilter = (filter) => {
  filter.selected = !filter.selected;
};
</script>

<template>
  <div class="filter-container">
    <button id="filter-button" class="filter-button" @click="showFilters = !showFilters">
      Filters
    </button>
    <div v-if="showFilters">
      <button
        :class="filter.selected ? 'active' : ''"
        id="filters"
        class="filters"
        v-for="filter in filters"
        :key="filter.name"
        @click="onPressFilter(filter)"
      >
        {{ filter.name }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.filter-container {
  display: flex;
  flex-direction: column;
  width: 60%;
}
.filter-button {
  background: #fa3621;
  color: #fff;
  padding: 10px 30px;
  border: 0;
  cursor: pointer;
  margin-bottom: 10px;
}
.filters {
  padding: 5px 15px;
  margin-left: 10px;
}
.filters.active {
  background: #000;
  color: #fff;
}
</style>
