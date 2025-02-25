import Posts from "../pages/Posts";
import WelcomePage from "../pages/WelcomePage";
import PostPage from "../pages/PostPage";
import Error from "../pages/Error";
import Login from "../pages/Login";

export const privateRoutes = [
    { path: '/welcomepage', element: <WelcomePage /> },
    { path: '/posts', element: <Posts /> },
    { path: '/posts/:id', element: <PostPage /> },
    { path: '*', element: <Error /> },
];

export const publicRoutes = [
    { path: '/login', element: <Login /> },
    { path: '*', element: <Login /> },
];