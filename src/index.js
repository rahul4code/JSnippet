import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Counter } from "./useState";
import { ListRepo } from "./useEffect";
import Modal from "./useLayoutEffect/Modal";
import Card from "./useCallback/Card";
import ThemeNumber from "./useMemo/ThemeNumber";
import Container from "./useContext/Container";
import ThunkContainer from "./redux-toolkit/ThunkContainer";
import { Pagination } from "./pagination";
import Registration from "./stepperForm/App";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/useState",
        element: <Counter />,
      },
      {
        path: "/useEffect",
        element: <ListRepo />,
      },
      {
        path: "/useLayoutEffect",
        element: <Modal />,
      },
      {
        path: "/useCallback",
        element: <Card />,
      },
      {
        path: "/useMemo",
        element: <ThemeNumber />,
      },
      {
        path: "/useContext",
        element: <Container />,
      },
      {
        path: "/redux-thunk",
        element: <ThunkContainer />,
      },
      {
        path: "/pagination",
        element: <Pagination />,
      },
      {
        path: "/stepperForm",
        element: <Registration />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
// root.render(<Counter />);
reportWebVitals();
