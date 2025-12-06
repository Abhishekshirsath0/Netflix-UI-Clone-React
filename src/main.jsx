import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
 
import App from "./App.jsx";
import { Provider } from "react-redux"; // ✅ Fixed import

import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./component/Login.jsx";

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    
  },
 {
        path:'/sign-in',
        element:<Login/>
      }
    
])



createRoot(document.getElementById("root")).render(
 <RouterProvider router={router}/>
);
