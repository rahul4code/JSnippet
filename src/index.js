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
import Dashboard from "./timer/Dashboard";
import DashboardCounter from "./counter/Dashboard";
import { Home } from "./components/Home";
import { LastModified } from "./lastModified";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        name: "Home Page",
      },
      {
        path: "/useState",
        element: <Counter />,
        name: "useState Play",
      },
      {
        path: "/useEffect",
        element: <ListRepo />,
        name: "useEffect Play",
      },
      {
        path: "/useLayoutEffect",
        element: <Modal />,
        name: "useLayoutEffect Play",
      },
      {
        path: "/useCallback",
        element: <Card />,
        name: "useCallback Play",
      },
      {
        path: "/useMemo",
        element: <ThemeNumber />,
        name: "useMemo Play",
      },
      {
        path: "/useContext",
        element: <Container />,
        name: "useContext Play",
      },
      {
        path: "/redux-thunk",
        element: <ThunkContainer />,
        name: "redux-thunk Play",
      },
      {
        path: "/pagination",
        element: <Pagination />,
        name: "pagination Play",
      },
      {
        path: "/stepperForm",
        element: <Registration />,
        name: "stepperForm Implementation",
      },
      {
        path: "/timerDashboard",
        element: <Dashboard />,
        name: "timerDashboard Play",
      },
      {
        path: "/CounterDashboard",
        element: <DashboardCounter />,
        name: "CounterDashboard Play",
      },
      {
        path: "/LastModified",
        element: <LastModified />,
        name: "Last Modified State",
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
// root.render(<Counter />);
reportWebVitals();
