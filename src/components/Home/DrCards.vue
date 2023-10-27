<script setup>
import telefono from "../svg/telefono.vue";
import star from "../svg/star.vue";

import { ref } from "vue";

const doctors = ref([
  {
    DrName: "Dr. Webber",
    Experience: 5,
    Rating: `5.0`,
    Votes: `3,988`,
    Speciality: "Neurology",
    RouteImage: "src/assets/IMG/doctor2.png",
    RouteIcon: "src/assets/IMG/neurologyBlue.png",
  },
  {
    DrName: "Dr. Lee",
    Experience: 4,
    Rating: `4.0`,
    Votes: `2,587`,
    Speciality: "Radiology",
    RouteImage: "src/assets/IMG/doctor1.png",
    RouteIcon: "src/assets/IMG/cardiology.png",
  },
]);
</script>

<template>
  <div class="B-DrCard">
    <div class="DrCard-OF">
      <div class="DrCard" v-for="doctor in doctors">
        <div class="DrName">
          <div class="B-ImgDr">
            <img
              :src="doctor.RouteImage"
              :alt="doctor.DrName + ' Img'"
              class="h-[170px]"
            />
          </div>
          <div class="B-InfoDr">
            <div class="InfoDr">
              <span class="font-medium">{{ doctor.DrName }}</span>
              <span class="text-gray-600 text-sm"
                >{{ doctor.Experience }} years experienced</span
              >
              <div class="B-starIcon">
                <star v-for="i in Math.floor(doctor.Rating)" :key="i" />
                <span class="text-gray-600 text-xs"
                  >{{ doctor.Rating }} ({{ doctor.Votes }})</span
                >
              </div>
            </div>
            <div class="footerCard">
              <div class="A-footerCard">
                <img :src="doctor.RouteIcon" alt="" class="ImgSpc" />
                <div class="neuroInfo">
                  <span class="neurologyTitle">{{ doctor.Speciality }}</span>
                  <span class="neuroGrade">Specialist</span>
                </div>
              </div>
              <div class="B-phoneIcon">
                <telefono />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.B-DrCard {
  @apply grid grid-cols-[15fr,5fr] overflow-x-auto overflow-y-hidden;
}

.DrCard-OF {
  @apply w-[560px] relative grid space-x-[280px];
}

.DrCard {
  @apply w-[260px] absolute h-full rounded-3xl bg-gradient-to-r from-gray-300 to-[#E6E6E6] grid items-end;
}

.DrName {
  @apply h-[90%] grid grid-cols-[8fr,11fr] relative;
}

.B-ImgDr {
  @apply grid items-center;
}

.B-InfoDr {
  @apply grid h-full w-[70%] items-start absolute left-[32%];
}

.InfoDr {
  @apply grid grid-rows-2;
}

.B-starIcon {
  @apply text-yellow-500 flex items-center gap-x-1.5;
}

.footerCard {
  @apply grid h-[80%] mt-2 grid-cols-[7fr,3fr] items-center;
}

.A-footerCard {
  @apply h-[75%] w-[96%] bg-gradient-to-br from-[#AAA8A8] to-transparent px-2 rounded-full grid grid-cols-[1fr,4fr] items-center;
}
.ImgSpc {
  @apply bg-white h-[60%] w-[95%] rounded-full grid justify-center items-center p-0.5;
}

.neuroInfo {
  @apply grid grid-rows-2;
}

.neurologyTitle {
  @apply text-black font-medium text-[10px] pl-2;
}

.neuroGrade {
  @apply text-gray-600 text-[9px] pl-2;
}
</style>
