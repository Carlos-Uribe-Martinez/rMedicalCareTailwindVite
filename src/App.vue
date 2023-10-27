<script setup>
import profile from "./components/Home/profile.vue";
</script>

<template>
  <div class="MainCont">
    <profile />

    <router-view></router-view>

    <!-- <HelloWorld msg="Jaime Gutierrez" yearsExp="20"></HelloWorld>
    <HelloWorld msg="Pedro Martinez" yearsExp="5"></HelloWorld> -->
  </div>
</template>

<style scoped>
.MainCont {
  @apply h-full grid grid-rows-[60px,45px,60px,55px,45px,174px,45px,188px] bg-[#f3f3f3] w-full pt-4 pl-5;
}
</style>
