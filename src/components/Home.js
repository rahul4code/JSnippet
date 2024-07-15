import React from "react";
import { appRouter } from "../index";
import { Link } from "react-router-dom";

export const Home = () => {
  const { routes } = appRouter;

  console.log(routes[0].children, "Router");

  return (
    <div>
      This is Rahul's Workspace!!
      <ul>
        {routes[0].children.map((i) => {
          return (
            <>
              <li>
                <Link to={i.path}>{i.name}</Link>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};
