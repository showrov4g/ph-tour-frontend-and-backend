import App from "@/App";
import AdminLayout from "@/components/layout/AdminLayout";
import Analishis from "@/components/layout/Analishis";
import about from "@/pages/about";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    // element: <App/>
    Component: App,
    children: [
      {
        path: "/about",
        Component: about,
      },
    ],
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children:[
      {
        path:"/admin/Analishis",
        Component: Analishis
      }
    ]
  }
]);
