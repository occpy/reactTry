import {
    createBrowserRouter
} from "react-router-dom";
import ErrorPage from "../pages/error-page";
import Home from "../pages/home";
import New from "../pages/new";
import App from "../App";

/**
 * 路由控制
 */
// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path="/" element={<App />} errorElement={<ErrorPage/>}>
//                 <Route  path="home" element={<Home/>} >
//                     <Route path={"new"} element={<New/>}/>
//                 </Route>
//         </Route>
//     )
// );
const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<App/>,
            errorElement:<ErrorPage/>,
            children:[{
                path:"/",
                element:<Home/>,
                children:[{
                    path:"new",
                    index:true,
                    element:<New/>
                }]
            }]
        }
    ]
);

export default router;