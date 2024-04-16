import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import RepoList from "./RepoList";

const ThunkContainer = () => {
  return (
    <Provider store={store}>
      <RepoList />
    </Provider>
  );
};

export default ThunkContainer;
