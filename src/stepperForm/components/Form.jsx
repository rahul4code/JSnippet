import React from "react";
import { useContext } from "react";
import userContext from "../context/User";

const Form = () => {
  const { formData, setFormData } = useContext(userContext);
  const { registrationDetails, activeStepper } = formData;

  console.log(formData, registrationDetails, ":Registration");

  return (
    <div>
      <table>
        {registrationDetails[activeStepper].map((item, index) => {
          return (
            <tr>
              <td>{item.label}</td>
              <td>
                <input
                  type={item.inputType}
                  placeholder={`Enter ${item.label}`}
                  value={item.value}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      registrationDetails: {
                        ...registrationDetails,
                        [activeStepper]: registrationDetails[
                          activeStepper
                        ]?.map((detail, ind) =>
                          ind === index
                            ? { ...detail, value: e.target.value }
                            : detail
                        ),
                      },
                    })
                  }
                />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Form;
