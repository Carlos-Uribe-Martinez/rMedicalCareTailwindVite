<script setup>
import filt from "../svg/filt.vue";
</script>

<template>
  <div class="profile">
    <div class="A-profile">
      <img src="src/assets/IMG/Esther.png" alt="" class="ImgEsther" />
      <div class="profileInfo">
        <span class="profileName">Esther Howard</span>
        <span class="text-xs">Female, 23 y.o</span>
      </div>
    </div>
    <button class="B-Filter">
      <filt />
    </button>
  </div>
</template>

<style scoped>
.profile {
  @apply h-full grid grid-cols-[4fr,1fr] items-center justify-center;
}

.A-profile {
  @apply grid grid-cols-[2fr,5fr] grid items-center;
}

.ImgEsther {
  @apply bg-gray-300 h-[45px] rounded-full w-[45px] grid justify-center ml-3;
}

.profileInfo {
  @apply h-full grid grid-rows-2;
}

.profileName {
  @apply grid content-end font-medium;
}

.B-Filter {
  @apply grid content-end font-normal rounded-full text-azul text-3xl bg-white w-[1.2rem];
}
</style>
