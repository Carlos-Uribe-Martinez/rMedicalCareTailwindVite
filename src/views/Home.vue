<script setup>
import SeeAll from "../components/Home/SeeAll.vue";
import Search from "../components/Home/Search.vue";
import SmallCard from "../components/Home/SmallCard.vue";
import DrCards from "../components/Home/DrCards.vue";
import DateCards from "../components/Home/DateCards.vue";
</script>

<template>
  <SeeAll asunt="Meet a Doctor" />
  <Search />
  <SmallCard />
  <SeeAll asunt="My Recent Visit" />
  <DrCards />
  <SeeAll asunt="My Checkup Schedule" />
  <DateCards />
</template>

<style lang="scss" scoped></style>
