<script setup>
import { ref } from "vue";

const specialities = ref([
  {
    Route: "/Neurologia",
    Area: "Neuroology",
    Available: 17,
    ImgRoute: "neurologyWhite.png",
    Color: "azul",
    TextColor: "blanco",
  },
  {
    Route: "/Radiologia",
    Area: "Radiology",
    Available: 17,
    ImgRoute: "cardiology.png",
    Color: "gray-300",
    TextColor: "gray-400",
  },
]);

console.log(specialities["Color"]);
</script>

<template>
  <div class="specialities">
    <div class="specialities-OF">
      <router-link
        :to="speciality.Route"
        v-for="speciality in specialities"
        :class="'spcNeuro bg-' + speciality.Color"
      >
        <img
          :src="'/src/assets/IMG/' + speciality.ImgRoute"
          :alt="speciality.Area + ' Img'"
          class="h-9"
        />
        <div class="specialitiesInfo">
          <span :class="'SpcTitle text-' + speciality.TextColor">{{
            speciality.Area
          }}</span>
          <span class="specialitiesStats"
            >{{ speciality.Available }} doctors available</span
          >
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.specialities {
  @apply grid grid-cols-[6fr,5fr] items-center overflow-x-auto overflow-y-hidden;
}

.specialities-OF {
  @apply w-[450px] relative grid items-center space-x-[225px];
}
.spcNeuro {
  @apply h-[4rem] w-[48%] pl-3.5 rounded-[3rem] grid grid-cols-[1fr,4fr] justify-center items-center absolute;
}

.specialitiesInfo {
  @apply grid grid-rows-[6fr,5fr] items-center;
}

.SpcTitle {
  @apply text-sm font-medium pl-2;
}

.specialitiesStats {
  @apply text-gray-400 text-xs pl-2;
}
</style>
