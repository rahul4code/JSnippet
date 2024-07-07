import React, { useState, useContext } from "react";
import Stepper from "./components/Stepper";
import Form from "./components/Form";
import UserContext from "./context/User";

const registrationUI = {
  personalDetails: [
    {
      label: "First Name",
      inputType: "text",
    },
    {
      label: "Last Name",
      inputType: "text",
    },
  ],
  educationDetails: [
    {
      label: "Class 10th Percentage",
      inputType: "text",
    },
    {
      label: "Class 12th Percentage",
      inputType: "text",
    },
  ],
  employmentDetails: [
    {
      label: "Company Name",
      inputType: "text",
    },
    {
      label: "Current CTC",
      inputType: "number",
    },
  ],
  addressDetails: [
    {
      label: "House Number",
      inputType: "number",
    },
    {
      label: "Street Name",
      inputType: "text",
    },
  ],
};

const Registration = () => {
  const { formData, setFormData } = useContext(UserContext);
  // const { activeStepper, registrationDetails } = formData;
  // console.log(activeStepper, registrationData, "settings");
  // const [currentForm, setCurrentForm] = useState("personalDetails");
  // const [formLayout, setFormLayout] = useState(registrationUI[currentForm]);

  const handleFormType = (name) => {
    setFormData({ ...formData, activeStepper: name });
  };

  // const handleSubmit = () => {
  //   console.log("");
  // };

  return (
    <div style={{ display: "grid", placeItems: "center", rowGap: "50px" }}>
      <Stepper handleFormType={handleFormType} />
      <Form />
      <button style={{ marginTop: "20px" }} onClick={""}>
        Submit
      </button>
    </div>
  );
};

export default Registration;
