import { defineStore } from "pinia";

export const useDataStore = defineStore("DataStore", {
  state: () => ({
    profiles: [
      {
        FirstName: "Esther",
        LastName: "Howard",
        PacientGender: "Female",
        PacientAge: 23,
      },
    ],
    doctors: [
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
    ],
    specialities: [
      {
        Route: "/Neurologia",
        Area: "Neuroology",
        Available: 17,
        ImgRoute: "neurologyWhite.png",
        Color: "bg-azul",
        TextColor: "text-blanco",
      },
      {
        Route: "/Radiologia",
        Area: "Radiology",
        Available: 17,
        ImgRoute: "cardiology.png",
        Color: "bg-gray-300",
        TextColor: "text-gray-400",
      },
    ],
    dates: [
      {
        Month: "SEPT",
        Day: "07",
        Txt1: "Clinic Visit",
        Txt2: "Appointment",
        Speciality: "Neurologist",
        Dr: "Kevin",
        RouteImg: "doctor1.png",
      },
      {
        Month: "DEC",
        Day: "10",
        Txt1: "Video",
        Txt2: "Consulting",
        Speciality: "Psychiatrist",
        Dr: "Kelly Karl",
        RouteImg: "doctor0.png",
      },
    ],
    assunts: [
      {
        A: "Meet a Doctor",
        B: "My Recent Visit",
        C: "My Checkup Schedule",
      },
    ],
  }),
});
