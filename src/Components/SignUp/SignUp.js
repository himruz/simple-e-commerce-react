import React, { useState , useContext } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from './../../contexts/UserContext';

const SignUp = () => {
    const [error, setError] = useState(null);
    const {createUser} = useContext(AuthContext);

    const signUpMethod = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if( password.length < 6){
            setError("Password should be longer then 6 character");
            return;
        }

        if(password !== confirmPassword){
            setError("Your password didn't match!");
            return;
        }

        createUser(email, password)
        .then((result) =>{
            const user = result.user;
            form.reset();
            console.log(user);
        }).catch(error => console.error(error));

    }

    return (
        <div className='form-container'>
        <h4 className='form-title'>Sign Up</h4> 
        <form onSubmit={signUpMethod}>
             <div className="form-control">
                 <label htmlFor="email">Email</label>
                 <input type="email" name="email" id="" required/>
             </div>
             <div className="form-control">
                 <label htmlFor="password">Password</label>
                 <input type="password" name="password" id="" required/>
             </div>
             <div className="form-control">
                 <label htmlFor="confirmPassword">Confirm Password</label>
                 <input type="password" name="confirmPassword" id="" required/>
             </div>
            <input className='btn-submit' type="submit" value="Sign Up" />
            <p className='pass-error'>{error}</p>
        </form>
        <p className='user'>Already have an account ? <span> <Link to='/login'> Login</Link></span></p>
     </div>
    );
};

export default SignUp;