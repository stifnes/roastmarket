<script setup>
import { onMounted } from "vue";
import Filters from "./Filters.vue";
import Sorting from "./Sorting.vue";

defineProps({
  categoryTitle: String,
});

let prevScrollpos = window.pageYOffset;
let windowWidth = 0

function hideOnScroll() {
    windowWidth = window.innerWidth;
    if (windowWidth <= 768) {
    window.onscroll = function () {
      let header = document.getElementById("header");
      let headerHeight = header.offsetHeight;
      let currentScrollPos = window.pageYOffset;
      let tranformUp = `translateY(-${headerHeight}px)`;
      let tranformDown = "translateY(0px)";
      if (prevScrollpos > currentScrollPos) {
        header.style.transform = tranformDown;
      } else {
        header.style.transform = tranformUp;
      }
      prevScrollpos = currentScrollPos;
    };
  }
}


onMounted(() => {
  window.onresize = function() { hideOnScroll()}
  window.onload = function() { hideOnScroll()}
});

</script>

<template>
  <div class="header" id="header">
    <img alt="roastmarket logo" src="../assets/logo.svg" class="logo" />
    <div class="flex-wrapper">
      <h1>{{ categoryTitle }}</h1>
      <div class="filters-container">
        <Filters />
        <Sorting />
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  padding: 20px;
  background-color: #eaeaea;
  position: sticky;
  top: 0;
  transition: transform 0.5s ease-in-out;
}
.logo {
  max-width: 150px;
}
.filters-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media ( min-width: 768px) {
  .flex-wrapper {
    display:flex; align-items: center; justify-content: space-between
  }
  .filters-container {
    min-width: 550px;
  }
}
</style>
