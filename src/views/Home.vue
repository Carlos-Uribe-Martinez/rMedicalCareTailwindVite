<script setup>
import SeeAll from "../components/Home/SeeAll.vue";
import Search from "../components/Home/Search.vue";
import SmallCard from "../components/Home/SmallCard.vue";
import DrCards from "../components/Home/DrCards.vue";
import DateCards from "../components/Home/DateCards.vue";

import { onMounted } from "vue";
import { useDataStore } from "../stores/DataStore";
const DataStore = useDataStore();
onMounted(() => {
  console.log(DataStore.assunts);
});
</script>

<template>
  <SeeAll :asunt="DataStore.assunts[0].A" />
  <Search />
  <SmallCard />
  <SeeAll :asunt="DataStore.assunts[0].B" />
  <DrCards />
  <SeeAll :asunt="DataStore.assunts[0].C" />
  <DateCards />
</template>

<style lang="scss" scoped></style>
