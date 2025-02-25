import { Route, Routes, Navigate } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './router/routes';
import { AuthContext } from '../context';
import { useContext } from 'react';

const AppRouter = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    
    return (
        isAuth
        ?
        <Routes>
            {privateRoutes.map(route => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                />
            ))}
        </Routes>
        :
        <Routes>
            {publicRoutes.map(route => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={
                        route.path === '/login'
                            ? route.element
                            : <Navigate to="/login" replace />
                    }
                />
            ))}
        </Routes>
    );
};

export default AppRouter;