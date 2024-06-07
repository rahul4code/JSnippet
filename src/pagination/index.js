import { useEffect, useState } from "react";

export const Pagination = () => {
  const [userData, setUserData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    async function getUserData() {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const res = await data.json();
      setOriginalData(res);
      const pageData = res.slice(0, 3);
      setUserData((prev) => [...prev, ...pageData]);
      console.log(res, "Response");
    }

    getUserData();
  }, []);

  const handleClick = (type, count) => {
    switch (type) {
      case "prev":
        // if (userData.length > 3) {
        const page = originalData.slice(perPage - 3, perPage);
        console.log(page, "PageData");
        setUserData(page);
        // }
        break;
      case "next":
        if (userData.length > 0) {
          const page = originalData.slice(perPage + 3, perPage + 3 + 3);
          console.log(page, perPage + 3, perPage + 3 + 3, "result");
          setUserData(page);
        }
        console.log("Next");
        break;
      default:
        console.log("Something broken");
    }
  };

  return (
    <>
      <table>
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
        <button onClick={() => handleClick("prev", 3)}>Prev</button>
        <button onClick={() => handleClick("next", 3)}>Next</button>
      </div>
    </>
  );
};
