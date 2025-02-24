import { Navigate } from "react-router-dom";
import Posts from "../pages/Posts";
import WelcomePage from "../pages/WelcomePage";
import PostPage from "../pages/PostPage";

export const routes = [
    {path: '/welcomepage', element: <WelcomePage />},
    {path: '/posts', element: <Posts />},
    {path: '*', element: <Navigate to='/error' />},
    {path: '/posts/:id', element: <PostPage />},
    {path: '/*', element: <Navigate to='/error' />}
]