import { Link } from 'react-router-dom';

const MyNavbar = () => {
    return (
    <div className="navbar">
            <div className="navbar__links">
                <Link to="/WelcomePage">Welcome Page</Link>
                <Link to="/posts">Posts</Link>
            </div>
    </div>
    );
};

export default MyNavbar;