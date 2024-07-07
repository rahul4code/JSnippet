import React from "react";

const stepper = [
  {
    icon: "",
    formHeading: "Personal Details",
    formType: "personalDetails",
  },
  {
    icon: "",
    formHeading: "Education Details",
    formType: "educationDetails",
  },
  {
    icon: "",
    formHeading: "Employment Details",
    formType: "employmentDetails",
  },
];

const Stepper = ({ handleFormType }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {stepper.map((item, index) => {
        return (
          <button
            style={{ paddingTop: "10px", margin: "10px" }}
            onClick={() => handleFormType(item?.formType)}
          >
            <div>{index + 1}</div>
            <p>{item.formHeading}</p>
          </button>
        );
      })}
    </div>
  );
};

export default Stepper;
