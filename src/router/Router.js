import { Suspense, lazy } from "react";

const { createBrowserRouter } = require("react-router-dom");
const Loading = <div>Loading...</div>;
const Home = lazy(() => import("../pages/Home/Home"));
const Login = lazy(() => import("../pages/Login/Login"));
const Signin = lazy(() => import("../pages/Signin/Signin"));
const Landing = lazy(() => import("../pages/Landing/Landing"));
const Router = createBrowserRouter([
    {
      path: "",
      element: (
        <Suspense fallback={Loading}>
          <Home />
        </Suspense>
      ),
    },
    {
      path: "/Login",
      element: (
        <Suspense fallback={Loading}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "/Signin",
      element: (
        <Suspense fallback={Loading}>
          <Signin />
        </Suspense>
      ),
    },
    {
      path: "/Landing",
      element: (
        <Suspense fallback={Loading}>
          <Landing />
        </Suspense>
      ),
    },
  ]);
  export default Router;