import { createContext } from "react";

const UserContext = createContext({
  activeStepper: "personalDetails",
  registrationDetails: {
    personalDetails: [
      {
        label: "First Name",
        inputType: "text",
        value: "",
      },
      {
        label: "Last Name",
        inputType: "text",
        value: "",
      },
    ],
    educationDetails: [
      {
        label: "Class 10th Percentage",
        inputType: "text",
        value: "",
      },
      {
        label: "Class 12th Percentage",
        inputType: "text",
        value: "",
      },
    ],
    employmentDetails: [
      {
        label: "Company Name",
        inputType: "text",
        value: "",
      },
      {
        label: "Current CTC",
        inputType: "number",
        value: "",
      },
    ],
  },
});

export default UserContext;
