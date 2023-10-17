import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from './Main/Main.jsx';
import Home from "./Pages/Home.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children : ([
            {
                path:'/',
                element:<Home></Home>
            }
        ])
    },
]);

export default router;