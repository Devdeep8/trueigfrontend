import App from "../App.jsx";
import Login from "../components/login-sign-up/login-sign-up.jsx";


const routes = [
    {
        path : "/",
        element: <App/>
    },
    {
    path: "/login",
    element: <Login />,
  },

]

export default routes