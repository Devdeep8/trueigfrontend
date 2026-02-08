import App from "../App.jsx";
import DashboardPage from "../pages/dashboard/index.jsx";
import LoginPage from "../pages/loginpage/index.jsx";
import SignUpPage from "../pages/signuppage/index.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    element : <ProtectedRoute/>,
    children : [
      {
        path: "/dashboard",
        element: <DashboardPage/>
      }
    ]
  },
  
];

export default routes;
