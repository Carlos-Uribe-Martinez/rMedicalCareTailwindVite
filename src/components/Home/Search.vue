<script setup>
import lupa from "../svg/lupa.vue";
</script>

<template>
  <div class="search">
    <div class="A-Search">
      <lupa />
    </div>
    <input type="search" placeholder="Search Doctor" class="searchInp" />
  </div>
</template>

<style scoped>
.search {
  @apply h-full grid grid-cols-[2fr,20fr] items-center rounded-full text-gray-300 pr-6;
}

.A-Search {
  @apply bg-white h-[60%] rounded-l-full w-full grid items-center pl-2;
}

.searchInp {
  @apply h-[60%] rounded-r-full text-sm font-medium pl-1;
}
</style>
