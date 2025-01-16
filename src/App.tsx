import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";

import Dashboard from "./components/Dashboard";
import Inbox from "./components/Inbox";
import Review from "./components/Review";
import Schedule from "./components/Schedule";
import Settings from "./components/Settings";

import General from "./components/Nested/part1/General";
import Password from "./components/Nested/part1/Password";
import Price from "./components/Nested/part1/Price";
import Treatment from "./components/Nested/part1/Treatment";
import HairRemoval from "./components/Nested/part2/HairRemoval";
import Injectables from "./components/Nested/part2/Injectables";
import PlasticSurgery from "./components/Nested/part2/PlasticSurgery";
import SoftSurgery from "./components/Nested/part2/SoftSurgery";
import Form from "./Helpers/Form";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/inbox",
          element: <Inbox />,
        },
        {
          path: "/schedule",
          element: <Schedule />,
        },
        {
          path: "/reviews",
          element: <Review />,
        },
        {
          path: "/settings",
          element: <Settings />,
          children: [
            {
              path: "general",
              element: <General />,
            },
            {
              path: "password",
              element: <Password />,
            },
            {
              path: "price",
              element: <Price />,
            },
            {
              path: "treatment",
              element: <Treatment />,
              children: [
                {
                  path: "injectable",
                  element: <Injectables />,
                },
                {
                  path: "formsubmit", // Updated path here
                  element: <Form title="" />,
                  children: [
                    {
                      path: "formsubmit", // This renders the Form component at /settings/treatment/formsubmit
                      element: <Form title="" />,
                    },
                  ],
                },
                {
                  path: "hairremoval",
                  element: <HairRemoval />,
                },
                {
                  path: "softsurgery",
                  element: <SoftSurgery />,
                },
                {
                  path: "plasticsurgery",
                  element: <PlasticSurgery />,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
