import { useEffect, useState } from "react";

const LENGTH = 3;
export const Pagination = () => {
  const [userData, setUserData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [rowCount, setRowCount] = useState(LENGTH);
  const [prevRowCount, setPrevRowCount] = useState(0);

  useEffect(() => {
    async function getUserData() {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const res = await data.json();
      setOriginalData(res);
      const pageData = res.slice(0, LENGTH);
      setUserData((prev) => [...prev, ...pageData]);
      // console.log(res, "Response");
    }
    getUserData();
  }, []);

  useEffect(() => {
    const data = originalData.slice(prevRowCount, rowCount);
    setUserData([...data]);
  }, [rowCount]);

  const handleClick = (type) => {
    switch (type) {
      case "prev":
        if (rowCount > 0) {
          setRowCount(prevRowCount);
          setPrevRowCount((prev) => prev - LENGTH);
        }
        break;
      case "next":
        if (originalData.length - rowCount > LENGTH) {
          setRowCount((prev) => prev + LENGTH);
          setPrevRowCount((prev) => prev + LENGTH);
          console.log("ran if");
        } else {
          setRowCount((prev) => prev + originalData.length - rowCount);
          setPrevRowCount((prev) => prev + LENGTH);
          console.log("ran else");
        }
        break;
      default:
        console.log("Something broken");
    }
  };

  console.log(prevRowCount, rowCount, "bahar");

  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userData?.map((item) => (
            <tr key={item?.id}>
              <td>{item?.name}</td>
              <td>{item?.username}</td>
              <td>{item?.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => handleClick("prev")}>Prev</button>
        <button onClick={() => handleClick("next")}>Next</button>
      </div>
    </>
  );
};
