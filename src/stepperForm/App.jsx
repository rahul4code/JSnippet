import React, { useContext, useEffect, useState } from "react";
import Registration from "./Registration";
import UserContext from "./context/User";

const App = () => {
  const userRegistration = useContext(UserContext);
  const [formData, setFormData] = useState(userRegistration);

  useEffect(() => {
    console.log(formData, "Testing Form data");
  }, []);

  return (
    <UserContext.Provider value={{ formData, setFormData }}>
      <Registration />
    </UserContext.Provider>
  );
};

export default App;
