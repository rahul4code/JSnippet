import { useEffect, useState } from "react";

export const ListRepo = () => {
  const [repoList, setRepoList] = useState([]);

  useEffect(() => {
    const url = `https://api.github.com/users/rahul4code/repos`;
    const fetchRepo = async () => {
      try {
        const apiData = await fetch(url);
        if (!apiData.ok) {
          throw new Error("Please check your API");
        }
        const data = await apiData.json();
        setRepoList(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchRepo();
  }, [repoList]);

  return (
    <ul>
      {repoList?.map((item) => (
        <li>{item?.name}</li>
      ))}
    </ul>
  );
};
