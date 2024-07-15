import {useState} from 'react';
import {message } from 'antd';
import {useAuth} from '../contexts/AuthContext.jsx';


const useSignup = () => {
const {login}= useAuth();
const [error, setError] = useState(null);
const [loading, setloading] = useState(null);

const registerUser = async(values) => {
    if(values.password !== values.passwordConfirm){
        return setError ('Passwords are not the same');
    }   

     // Password complexity validation (you can customize this regex as needed as per the need)
    //  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    //  if (!passwordRegex.test(values.password)) {
    //    return setError(
    //      'Password must contain at least one lowercase letter, one uppercase letter, and one digit'
    //    );
    //  }
    // if (values.password.length < 10) {
    //     return setError('Password must be at least 10 characters long');
    //   }

    try {
        setError(null);
        setloading(true);
        const res = await fetch ('http://localhost:3000/auth/user/signup',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),

        });

        const data = await res.json();
        if(res.status === 201){
            message.success(data.message);
            login(data.token, data.user);
        }

        else if(res.status === 400){
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

  return {loading, error, registerUser};
}

export default useSignup;