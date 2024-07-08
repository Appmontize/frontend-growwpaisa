import {useState} from 'react';
import {message } from 'antd';
import {useAuth} from '../contexts/AuthContext.jsx';


const useLogin = () => {
const {login}= useAuth();
const [error, setError] = useState(null);
const [loading, setloading] = useState(null);

const loginUser = async(values) => {
    
    try {
        setError(null);
        setloading(true);
        const res = await fetch ('http://localhost:3005/auth/user/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),

        });

        const data = await res.json();
        if(res.status===200){
            message.success(data.message);
            login(data.token, data.user);
        }

        else if(res.status=== 400){
            setError(data.message);
        }
        else{
            message.error('Registration failed');
        }
    } catch (error) {
        message.error(error);
    } finally{
        setloading(false);
    }
};

  return {loading, error, loginUser};
}

export default useLogin;