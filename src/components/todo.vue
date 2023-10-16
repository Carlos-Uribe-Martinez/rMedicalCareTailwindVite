<script setup>
const imagePaths = [
  "/public/IMG/cardiology.jpg",
  "/public/IMG/doctor0.png",
  "/public/IMG/doctor1.png",
  "/public/IMG/doctor2.png",
  "/public/IMG/Esther.png",
  "/public/IMG/neurologyBlue.png",
  "/public/IMG/neurologyWhite.png",
];
</script>

<template>
  <div class="all">
    <div class="profile">
      <div class="A-profile">
        <img src="IMG/Esther.png" alt="" class="ImgEsther" />
        <div class="profileInfo">
          <span class="profileName">Esther Howard</span>
          <span class="text-xs">Female, 23 y.o</span>
        </div>
      </div>
      <button class="B-Filter">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          class="bi bi-filter-left"
          viewBox="0 0 16 16"
        >
          <path
            d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
    </div>
    <div class="seeAllCont">
      <span class="B-seeAll">Meet a doctor</span>
      <span class="seeAll">See all</span>
    </div>
    <div class="search">
      <div class="A-Search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="gray"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          />
        </svg>
      </div>
      <input type="search" placeholder="Search Doctor" class="searchInp" />
    </div>
    <div class="specialities">
      <div class="spcNeuro">
        <img src="IMG/neurologyWhite.png" alt="ImgNeuroW" class="h-[90%]" />
        <div class="specialitiesInfo">
          <span class="neurologyTitle">Neurology</span>
          <span class="specialitiesStats">17 doctors available</span>
        </div>
      </div>
      <div class="spcRadio">
        <img src="IMG/cardiology.png" alt="" class="h-[60%] pl- w-full" />
        <div class="specialitiesInfo">
          <span class="radiologyTitle">Radiology</span>
          <span class="specialitiesStats">17 doctors availab</span>
        </div>
      </div>
    </div>
    <div class="seeAllCont">
      <span class="B-seeAll">My Recent Visit</span>
      <span class="seeAll">See all</span>
    </div>
    <div class="B-DrCards">
      <div class="DrCards">
        <div class="DrWebber">
          <div class="B-ImgDr">
            <img
              src="IMG/doctor2.png"
              alt="DrWeberImg"
              class="w-[95%] h-[90%]"
            />
          </div>
          <div class="B-InfoDrW">
            <div class="InfoDrW">
              <span class="font-medium">Dr. Weber</span>
              <span class="text-gray-600 text-sm">5 years experienced</span>
              <div class="B-starIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                  />
                </svg>
                <span class="text-gray-600 text-xs">5.0 (3,988)</span>
              </div>
            </div>
            <div class="footerCard">
              <div class="A-footerCard">
                <img src="IMG/neurologyBlue.png" alt="" class="ImgNeuroB" />
                <div class="neuroInfo">
                  <span class="neurologyTitle2">Neurology</span>
                  <span class="neuroGrade">Specialist</span>
                </div>
              </div>
              <div class="B-phoneIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="#0b74fa"
                  class="bi bi-telephone-outbound-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="DrCards">
        <div class="B-ImgDr">
          <img src="IMG/doctor1.png" alt="" class="DrLeeImg" />
        </div>
      </div>
    </div>
    <div class="seeAllCont">
      <span class="B-seeAll">My checkup schedule</span>
      <span class="seeAll">See all</span>
    </div>
    <div class="B-cards">
      <div class="Card1">
        <div class="B-calendarIcon">
          <div class="calendarIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#0b74fa"
              class="bi bi-calendar2-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM2.545 3h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5v-1c0-.276.244-.5.545-.5z"
              />
            </svg>
          </div>
          <div class="dateCont">
            <span class="dateMonth">SEPT</span>
            <span class="dateDay">07</span>
          </div>
        </div>
        <div class="B-dateMatter">
          <span class="dateMatter">Clinic Visit</span>
          <span class="dateMatter">Appointment</span>
        </div>
        <div class="B-SMinfoDr">
          <div class="SMinfoDr">
            <img src="IMG/doctor1.png" alt="" class="DrsImg" />
            <div class="neuroInfo">
              <span class="dateSpeciality">Neurologist</span>
              <span class="dateDr">Dr. Kevin</span>
            </div>
          </div>
          <div class="B-phoneIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="#0b74fa"
              class="bi bi-telephone-outbound-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="Card2">
        <div class="B-calendarIcon">
          <div class="calendarIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#0b74fa"
              class="bi bi-calendar2-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM2.545 3h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5v-1c0-.276.244-.5.545-.5z"
              />
            </svg>
          </div>
        </div>
        <div class="B-dateMatter">
          <span class="dateMatter">Video</span>
          <span class="dateMatter">Consulting</span>
        </div>
        <div class="B-SMinfoDr2">
          <div class="SMinfoDr2">
            <img src="IMG/doctor0.png" alt="" class="DrsImg" />
            <div class="neuroInfo">
              <span class="dateSpeciality">Psychiatrist</span>
              <span class="dateDr">Dra. Kelly Carl</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.all {
  @apply h-screen max-w-[440px] min-w-[330px] grid grid-rows-[8%,7%,10%,13%,10%,27%,9%,16%] bg-[#f3f3f3] w-full pt-4 pl-5 mt-6;
}

.profile {
  @apply grid grid-cols-[4fr,1fr] items-center justify-center;
}

.A-profile {
  @apply grid grid-cols-[2fr,5fr];
}

.ImgEsther {
  @apply bg-gray-300 h-12 rounded-full w-12 grid justify-center ml-3;
}

.profileInfo {
  @apply h-full grid grid-rows-2;
}

.profileName {
  @apply grid content-end font-normal;
}

.B-Filter {
  @apply grid content-end font-normal rounded-full text-[#0B74FA] text-3xl bg-white;
}

.search {
  @apply grid grid-cols-[2fr,20fr] items-center rounded-full text-gray-300 pr-6;
}

.A-Search {
  @apply bg-white h-[60%] rounded-l-full w-full grid items-center pl-2;
}

.searchInp {
  @apply h-[60%] rounded-r-full text-[14px] font-medium;
}

.spcNeuro {
  @apply h-[70%] w-[99%] bg-[#0B74FA] pl-2 rounded-3xl grid grid-cols-[1fr,3fr] items-center;
}

.specialitiesInfo {
  @apply grid grid-rows-[6fr,5fr] items-center;
}

.neurologyTitle {
  @apply text-white text-sm font-medium pl-2;
}

.specialitiesStats {
  @apply text-gray-400 text-[12px] pl-2;
}
.spcRadio {
  @apply h-[70%] w-[90%] bg-[#E6E6E6] ml-3 pl-2 rounded-l-3xl grid grid-cols-[1fr,4fr] justify-center items-center;
}

.radiologyTitle {
  @apply text-gray-400 text-[14px] font-medium pl-2;
}

.B-cards {
  @apply w-full grid grid-cols-[12fr,7fr] gap-x-3;
}

.B-DrCards {
  @apply grid grid-cols-[15fr,5fr];
}

.DrCards {
  @apply w-[98%] rounded-3xl bg-gradient-to-r from-gray-300 to-[#E6E6E6] grid items-end;
}

.DrWebber {
  @apply h-[90%] grid grid-cols-[8fr,11fr] relative;
}

.B-ImgDr {
  @apply grid items-end;
}
.specialities {
  @apply grid grid-cols-[6fr,5fr] items-center;
}

.B-InfoDrW {
  @apply grid h-[95%] w-[70%] items-start absolute left-[30%];
}

.InfoDrW {
  @apply grid grid-rows-2;
}

.B-starIcon {
  @apply text-yellow-500 flex items-center gap-x-1.5;
}

.bi-star-fill {
  @apply w-3.5 h-3.5;
}

.footerCard {
  @apply grid h-[80%] mt-2 grid-cols-[7fr,3fr] items-center;
}

.A-footerCard {
  @apply h-[75%] w-[96%] bg-gradient-to-br from-[#AAA8A8] to-transparent px-2 rounded-full grid grid-cols-[1fr,4fr] items-center;
}
.ImgNeuroB {
  @apply bg-white h-[60%] w-[90%] rounded-full grid justify-center items-center;
}

.neuroInfo {
  @apply grid grid-rows-2;
}

.neurologyTitle2 {
  @apply text-black font-medium text-[10px] pl-2;
}

.neuroGrade {
  @apply text-gray-600 text-[9px] pl-2;
}

.B-phoneIcon {
  @apply h-[1.6rem] w-[1.6rem] bg-white px-2 rounded-full grid grid-cols-[1fr,4fr] items-center;
}

.DrLeeImg {
  @apply h-full max-h-[87%] min-h-[140px] w-full;
}

.Card1 {
  @apply w-[98%] rounded-3xl bg-gradient-to-b from-gray-300 to-gray-100 grid grid-rows-[30%,30%,35%] py-2 pl-2 content-center gap-y-1.5;
}
.Card2 {
  @apply w-[98%] rounded-l-3xl bg-gradient-to-b from-gray-300 to-gray-100 grid grid-rows-[30%,30%,35%] py-2 pl-2 content-center gap-y-1.5;
}
.B-calendarIcon {
  @apply w-full grid grid-cols-[4fr,1fr] px-1 items-center;
}

.calendarIcon {
  @apply w-[1.6rem] h-[1.6rem] grid justify-center rounded-full items-center bg-white text-[8px];
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
.dateSpeciality {
  @apply text-gray-400 font-normal text-[9px] pl-3;
}
.dateDr {
  @apply text-gray-900 text-[9px] font-medium pl-3;
}
.B-SMinfoDr2 {
  @apply grid items-center;
}

.SMinfoDr2 {
  @apply w-[98%] bg-white pl-1 rounded-full grid grid-cols-[1fr,4fr] items-center;
}
</style>
