import React, { useEffect, useState } from "react";

export const LastModified = () => {
  const [value, setValue] = useState("");
  const [modifiedDate, setModifiedDate] = useState("");
  const [show, setShow] = useState(false);

  const handleOnChange = (e) => {
    setValue(e.target.value);
    setModifiedDate(Date.now());
    setShow(false);
  };

  const getLastUpdated = () => {
    setShow(true);
  };

  return (
    <div>
      <input value={value} onChange={(e) => handleOnChange(e)} />
      <button onClick={getLastUpdated}>Get Time</button>
      <h1>
        Last Modified Data:{" "}
        {show ? new Date(modifiedDate).toLocaleTimeString() : "Calculating.."}
      </h1>
    </div>
  );
};
