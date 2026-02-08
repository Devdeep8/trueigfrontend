import App from "../App.jsx";
import LoginPage from "../pages/loginpage/index.jsx";
import SignUpPage from "../pages/signuppage/index.jsx";

const routes = [
    {
        path : "/",
        element: <App/>
    },
    {
    path: "/login",
    element: <LoginPage />,
  },
    {
    path: "/signup",
    element: <SignUpPage />,
  },

]

export default routes