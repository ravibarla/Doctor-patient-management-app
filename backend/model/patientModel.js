import mongoose from "mongoose";
// define admin schema

const patientSchema = mongoose.Schema([
  {
    userType: { type: String, default: "patient" },
    username: String,
    password: String,
    mobile: Number,
    DOB: String,
    medicalRecords: [
      {
        // medicalRecordId: String,
        department: String,
        diagnosis: [{ type: String }],
        advice: [{ type: String }],
        medicines: [{ type: String }],
        date: {
          type: String, // Store date as a string in the specified format
          default: () => {
            const currentDate = new Date();
            const formattedDate = `${currentDate.getDate()}:${
              currentDate.getMonth() + 1
            }:${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}`;
            return formattedDate;
          },
        },
        doctor: {
          name: String,
          mobile: Number,
        },
        anyPreviousReferal: { type: Boolean, default: false },
        referaringTo: {
          department: {
            type: String,
            default: null,
          },
        },
        nextCheckup: {
          type: String,
          default: null,
        },
        isCured: {
          type: Boolean,
          default: false,
        },
        ifDoneByMistake: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
]);

export const Patient = mongoose.model("Patient", patientSchema);
