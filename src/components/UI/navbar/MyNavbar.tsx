import { Link } from 'react-router-dom';
import MyButton from '../button/MyButton';
import { useContext } from 'react';
import { AuthContext } from '../../../context';
import cl from './MyNavbar.module.css';

const MyNavbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    return (
    <div className="navbar">
        <MyButton  onClick={() => setIsAuth(false)}>
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