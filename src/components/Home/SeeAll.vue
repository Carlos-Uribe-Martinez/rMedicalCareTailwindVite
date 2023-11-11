<script setup>
import { ref } from "vue";

defineProps({
  asunt: String,
});

const count = ref(0);
</script>

<template>
  <div class="seeAllCont">
    <span class="B-seeAll"> {{ asunt }} </span>
    <span class="seeAll">See all</span>
  </div>
</template>

<style scoped></style>
