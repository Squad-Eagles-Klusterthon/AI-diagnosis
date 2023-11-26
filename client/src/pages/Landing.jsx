import { React, useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../config/firebase.config';

import "./test.css";

export const Landing = () => {

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    const [isLogged, setIsLogged] = useState()


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              console.log("userid", user)
              setIsLogged(true);
            } else {
            //   navigate("/signin");
              console.log("user is logged out");
            }
          });
        
    }, [navigate, isLogged]);

 
    const handleLogout = () => {               
        signOut(auth).then(() => {
            // navigate("/signin");
            setIsLogged(false);
            console.log("Signed out successfully")
        }).catch((error) => {
            console.log("error signing out", error);
        });
    }


    return (
        <div className="home">
            <div className="div">
                <div className="base">
                    {/* <div className="group">
                        <div className="nav">
                            
                            <div className="dagsb">
                                <Link to="/" className="text-wrapper">Home</Link>
                            </div>
                            <div className="div-wrapper">
                                <Link to="/appointment" className="text-wrapper-2">Appointment</Link>
                            </div>
                            <div className="text-wrapper-3"></div>
                            {
                                isLogged ? <button type="link" onClick={handleLogout}>log out</button> : <div className="text-wrapper-3">login/register</div>
                            }
                        </div>
                    </div> */}
                    <div className="text-wrapper-4">MedPal</div>
              
                    <p className="p">Have You Had a Health Routine Check this Month?</p>
                    <div className="frame">
                        {/* <img className="ellipse-3" alt="Ellipse" src="ellipse-4.png" /> */}
                        <div className="frame-2">
                            <p className="text-wrapper-5">Medpal is your virtual health assistant, helping you to diagnose symptoms.</p>
                            <p className="text-wrapper-6">
                                A groundbreaking healthcare software leveraging AI-powered chat agents to transform your experience,
                                from streamlined appointment booking to addressing your diverse health needs.
                            </p>
                        </div>
                    </div>
                    <div className="frame-3">
                        <Link to="/home" className="text-wrapper-7">Get started</Link>
                    </div>
                    <div className="frame-4" />
                </div>
                <div className="card">
                    <div className="overlap">
                        <div className="nutritional-tips">
                            <div className="ellipse-4" />
                            <div className="frame-2">
                                <div className="text-wrapper-8">Health Tips</div>
                                <p className="text-wrapper-9">
                                    Unlock personalized nutritional insights and meal recommendations tailored to your unique profile and
                                    medical conditions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="frame-5">
                        <div className="text-wrapper-10">View</div>
                    </div>
                </div>
                <div className="card-2">
                    <div className="overlap">
                        <div className="nutritional-tips">
                            <div className="ellipse-5" />
                            <div className="frame-2">
                                <div className="text-wrapper-8">Symptom checker</div>
                                <p className="text-wrapper-9">
                                    Discover the cause of the symptoms for early treatments. Medpal virtual healthcare is trained to provide you guides and assistance.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="frame-5">
                        <div className="text-wrapper-10">View</div>
                    </div>
                </div>
                <div className="card-3">
                    <div className="overlap">
                        <div className="nutritional-tips">
                            <div className="ellipse-6" />
                            <div className="frame-2">
                                <div className="text-wrapper-11">Doctors appointment</div>
                                <p className="text-wrapper-9">
                                    Get access to health consultations from care providers and specialists.
                                </p>
                            </div>
                        </div>
                        {/* <img className="group-4" alt="Group" src="group-2.png" /> */}
                    </div>
                    <div className="frame-5">
                        <div className="text-wrapper-10">View</div>
                    </div>
                </div>
                {/* <div className="slide-show">
                    <div className="rectangle" />
                    <div className="rectangle-2" />
                    <div className="rectangle-2" />
                </div> */}
                <div className="text-wrapper-12">Services</div>
            </div>
        </div>
    );
};
