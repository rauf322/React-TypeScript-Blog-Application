import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const submit_user = (event: { preventDefault: () => void; }) => {
        if(login && password){
        event.preventDefault();
        setIsAuth(true);
        navigate(`/posts`)
        } else {
            alert("Please fill all the fields");
        }
    }

    return (
        <div>
            <h1>Page to Login In</h1>
            <form action="" onSubmit={submit_user}>
                <MyInput type="text" value={login} onChange={(element: React.ChangeEvent<HTMLInputElement>)=> setLogin(element.target.value)} placeholder='Enter Login'/>
                <MyInput type="text" value={password} onChange={(element: React.ChangeEvent<HTMLInputElement>)=> setPassword(element.target.value)} placeholder='Enter Password'/>
                <MyButton>Enter</MyButton>
            </form>
        </div>
    );
};

export default Login;