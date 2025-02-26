import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MyButton from '../Button/MyButton';
import { AuthContext } from '../../../context';
import cl from './MyNavbar.module.css';

const MyNavbar = () => {
    const authContext = useContext(AuthContext);
    const setIsAuth = authContext ? authContext.setIsAuth : () => {};
    const navigate = useNavigate()
    return (
    <div className="navbar">
        <MyButton onClick={() => {
            setIsAuth(false);
            localStorage.removeItem('auth');
            navigate(`/login`)
        }}>
            Exit
        </MyButton>
            <div className="navbar__links">
                <Link className={cl.btn}to="/WelcomePage">Welcome Page</Link>
                <Link className={cl.btn} to="/posts">Posts</Link>
            </div>
    </div>
    );
};

export default MyNavbar;