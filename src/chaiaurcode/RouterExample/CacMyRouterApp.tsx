import * as React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { CacHome } from "./CacHome";
import { CacAbout } from './CacAbout';
import path from "path";
import { CacContact } from "./CacContact";
import { CacLayoutRouter } from "./CacLayoutRouter";
import CacGithub1, { githubInfoLoader } from "./CacGithub";

export interface IAppProps {}

export function CacMyRouterApp(props: IAppProps) {
  /* const router = createBrowserRouter([
    {
      path: "/",
      element: <CacLayoutRouter />,
      children: [
        {
          path: "",
          element: <CacHome />,
        },
        {
          path: "/about",
          element: <CacAbout />,
        },
      ],
    },
  ]);*/
  const router = createBrowserRouter( 
    createRoutesFromElements(
      <Route path="/" element={<CacLayoutRouter />}>
        <Route path="" element={<CacHome />} />
        <Route path="/about" element={<CacAbout />} />
        <Route path="/contact" element={<CacContact />} />
        <Route path="/contact/:id" element={<CacContact />} />
        <Route path="/github" element={<CacGithub1 />} loader={githubInfoLoader} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
