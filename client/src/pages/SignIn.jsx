import React, { useState, useEffect } from "react";
import "./signin.css";
import "./Event.css"
import { useNavigate, Link } from "react-router-dom";
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../config/firebase.config';
import LoadingButton from "../components/loadingspin/spinner";

export const SignIn = () => {


    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);
    const [displayMsg, setDisplayMsg] = useState('')
    
  
    useEffect(() => {
   
    }, [navigate])
    
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    const handleLogin = async(e) => {
      e.preventDefault();
      // Perform form submission or other actions 
      if (email === '' || !isValidEmail(email)) {
     
        setDisplayMsg("incorrect email address", "failure");
      } else if(!password || password.length < 6 ) {
      
        setDisplayMsg("password must be at least 6 characters long", "failure");
      } else {
        try {
      
          setLoading(true);
          const userCredential = signInWithEmailAndPassword(auth, email, password)
          const user = userCredential.user;
          console.log(user);
          setLoading(false)
          navigate("/home")
          
        } catch (error) {
          setDisplayMsg("error logging in, try again!", "failure")
          console.log("Login error", error)
          setLoading(false)
          
        }
      };
      }


    return (
        <div className="SIGN-IN">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <p>demo email: squad@gmail.com || demo pwd: eagles</p>
                    <div className="frame">
                        <div className="text-wrapper">Sign In</div>
                        <div className="input-field">
                            <form>
                            <section className="px-4">
                                <div className="event-text1 text-dark">Sign In</div>
                                <div className="line-flex">
                                
                                <div className="line1"></div>
                                <div className="line2"></div>
                                </div>

                                <div className="event-form">
                                <div className="input-box">
                                    <div className="event-title">Email</div>
                                    <div>
                                    <input
                                        className="event-input"
                                        placeholder="Email address"
                                        required
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}

                                    />
                                    </div>
                                </div>

                                <div className="input-box">
                                    <div className="event-title">Password</div>
                                    <div>
                                    <input
                                    
                                        required
                                        className="event-input"
                                        placeholder="password should >= 6 characters"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    </div>
                                </div>
                                <button className="create-but"
                                    disabled={loading}
                                    style={loading ? {cursor: 'progress'} : null}
                                    onClick={handleLogin}
                                    > { loading ? (<LoadingButton />) : "Sign In"}
                                    </button>
                                <div className="page-text">
                                    <p>Don't have an account? <Link className="event-link" to="/signup">Sign Up</Link></p>
                                </div>
                                </div>
                            </section>
                            </form>
                        </div>
                        <p className="already-have-an">
                            <span className="span">Already have an account ? <Link to="/signup">Sign up</Link></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
