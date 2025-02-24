import { Navigate, Route, Routes } from 'react-router-dom';
import Posts from './pages/Posts';
import WelcomePage from './pages/WelcomePage';
import Error from "./pages/Error";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/welcomepage" element={<WelcomePage />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/error" element={<Error/>} />
            <Route path="*" element={<Navigate to='/error'/>} />
        </Routes>
    );
};

export default AppRouter;