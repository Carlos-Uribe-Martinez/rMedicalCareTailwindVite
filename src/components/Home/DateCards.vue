<script setup>
import telefono from "../svg/telefono.vue";
import calendar from "../svg/calendar.vue";
import { ref } from "vue";

import { useDataStore } from "../../stores/DataStore";
const DataStore = useDataStore();
</script>

<template>
  <div class="B-cards">
    <div class="cardsOF">
      <div class="Card" v-for="date in DataStore.dates">
        <div class="B-calendarIcon">
          <div class="calendarIcon">
            <calendar />
          </div>
          <div>
            <span class="dateMonth">{{ date.Month }}</span>
            <span class="dateDay">{{ date.Day }}</span>
          </div>
        </div>
        <div class="B-dateMatter">
          <span class="dateMatter">{{ date.Txt1 }}</span>
          <span class="dateMatter">{{ date.Txt2 }}</span>
        </div>
        <div class="B-SMinfoDr">
          <div class="SMinfoDr">
            <img
              :src="'src/assets/IMG/' + date.RouteImg"
              alt=""
              class="DrsImg"
            />
            <div class="SpcInfo">
              <span class="dateSpeciality">{{ date.Speciality }}</span>
              <span class="dateDr">Dr. {{ date.Dr }}</span>
            </div>
          </div>
          <div class="B-phoneIcon">
            <telefono />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.B-cards {
  @apply w-full h-full overflow-x-auto overflow-y-hidden;
}

.cardsOF {
  @apply w-[460px] h-full grid grid-cols-2 gap-x-3;
}
.Card {
  @apply w-[98%] h-full rounded-3xl bg-gradient-to-b from-gray-300 to-gray-100 grid grid-rows-[30%,30%,35%] py-2 pl-2 content-center gap-y-1.5;
}
.B-calendarIcon {
  @apply w-full grid grid-cols-[4fr,1fr] px-1 items-center;
}

.calendarIcon {
  @apply w-[1.6rem] h-[1.6rem] grid justify-center rounded-full items-center bg-white text-[8px] text-blue-500 fill-blue-500;
}

.dateMonth {
  @apply w-full text-[8px] grid items-end;
}

.dateDay {
  @apply w-full font-medium text-xl;
}

.B-dateMatter {
  @apply grid grid-rows-[3fr,5fr];
}
.dateMatter {
  @apply font-medium grid items-end;
}
.B-SMinfoDr {
  @apply grid grid-cols-[8fr,3fr] items-center gap-x-2;
}

.SMinfoDr {
  @apply h-[60%] w-[98%] bg-white pl-2 rounded-full grid grid-cols-[1fr,4fr] items-center;
}
.DrsImg {
  @apply h-[1.6rem] w-[1.6rem] bg-white rounded-full text-[0.8rem] grid justify-center items-center;
}

.SpcInfo {
  @apply grid grid-rows-2;
}
.dateSpeciality {
  @apply text-gray-400 font-normal text-[9px] pl-3;
}
.dateDr {
  @apply text-gray-900 text-[9px] font-medium pl-3;
}
</style>
