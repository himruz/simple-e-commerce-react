import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css';

const Login = () => {

    const {loginUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const loginMethod = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        loginUser (email, password)
        .then((result)=>{
            const user = result.user;
            form.reset();
            navigate(from, {replace:true});
            console.log(user);
        }).catch(error=>console.error(error))
}
    return (
        <div className='form-container'>
           <h4 className='form-title'>Login</h4> 
           <form onSubmit={loginMethod}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required/>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
           </form>
           <p className='user'>New to Ema-jhon? <span> <Link to='/signup'> Create New Account</Link></span></p>
        </div>
    );
};

export default Login;