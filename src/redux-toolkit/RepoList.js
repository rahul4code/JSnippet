import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchGitHubUserRepo } from "./reducers/userSlice";

const RepoList = () => {
  const [username, setUsername] = useState("");
  const repoList = useSelector((store) => store.userRepoList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGitHubUserRepo("rahul4code"));
  }, []);

  return (
    <div>
      <input
        placeholder={"Enter username"}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />{" "}
      <button onClick={() => ""}>Fetch User</button>
      <br />
      Repo List:
      {repoList?.map((repo) => (
        <li key={repo.full_name}>{repo?.full_name}</li>
      ))}
    </div>
  );
};

export default RepoList;
