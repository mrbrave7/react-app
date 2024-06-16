import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import store from "./utilities/store.js";
import { Provider } from "react-redux";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./Pages/Homepage.jsx";
import Friendpage from "./Pages/Friendpage.jsx";
import Notificationpage from "./Pages/Notoficationpage.jsx";
import Profilepage from "./Pages/Profilepage.jsx";
import Settingpage from "./Pages/SettingPage.jsx";
import Register from "./Components/CreateAccount.jsx";
import ForgotPassword from "./Components/ForgotPassword.jsx";
import CreatePost from "./Components/CreatePost.jsx";
import Login from "./Components/Login.jsx";
import Changepassword from "./Components/Changepassword.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/homepage",
                element: <Homepage />,
            },
            {
                path: "/friendpage",
                element: <Friendpage />,
            },
            {
                path: "/notificationpage",
                element: <Notificationpage />,
            },
            {
                path: "/profilepage",
                element: <Profilepage />,
            },
            {
                path: "/settingpage",
                element: <Settingpage />,
            },
            {
                path: "/createpost",
                element: <CreatePost />,
            },
            {
                path: "changepassword",
                element: <Changepassword />,
            },
        ],
    },
    {
        path: "/forgotpassword",
        element: <ForgotPassword />,
    },
    {
        path: "/createaccount",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
