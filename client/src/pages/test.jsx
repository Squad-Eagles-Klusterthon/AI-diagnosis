import { React, useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../config/firebase.config';
import { PopupButton, useCalendlyEventListener} from 'react-calendly';
import { baseUrl } from '../config/api';
import axios from 'axios';

import "./test.css";

export const Appointment = () => {

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    const [isLogged, setIsLogged] = useState();
    const [specialists, setSpecialists] = useState([]);
    const [appointments, setAppointments] = useState([]);

    const fetchDoctors = async () => {
        const res = await axios.get(`${baseUrl}/api/specialists`);
        console.log("RES", res.data.doctors)
        setSpecialists(res.data.doctors);
        console.log("FETCHEC spec", specialists)

    }

    // const fetchMyAppointments = async (email) => {
    //     const res = await axios.get(`${baseUrl}/api/appointments/:email`);
    //     setAppointments(res.data);
    //     console.log("FETCHEC appoint", appointments)

    // }

    // const scheduleEvent = async () => {
    //     const res = await axios.post(`${baseUrl}/api/appointment`);
    //     setAppointments(res.data);
    //     console.log("FETCHEC appoint", appointments)
    // }

    useEffect(() => {
        console.log(baseUrl)
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                console.log("userid", user)
                fetchDoctors();
                // fetchMyAppointments('ha');
                console.log("APPo")
                setIsLogged(true);
            } else {
              navigate("/signin");
              console.log("user is logged out");
              
            }
          });
        
    }, [navigate, isLogged, appointments]);

    // const appoint = (e) => {
    //     const temp = appointments.push(e.data.payload);
    //     console.log("PLD", e.data.payload)
    //     setAppointments(temp)
    //     console.log("APPOUINT", appointments)
    // }
 
    useCalendlyEventListener({
        // onEventScheduled: (e) => {
        //     console.log(e.data.payload)
        //     setAppointments(e.data.payload);

        // }
        onProfilePageViewed: () => console.log("onProfilePageViewed"),
        onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
        onEventTypeViewed: () => console.log("onEventTypeViewed"),
        onEventScheduled: (e) => console.log(e.data.payload),
      });



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
                    <div className="group">
                        <div className="nav">
                            
                            <div className="div-wrapper">
                                <Link to="/home" className="text-wrapper">Home</Link>
                            </div>
                            <div className="dasb">
                                <Link to="/appointment" className="text-wrapper-2">Appointment</Link>
                            </div>
                            <div className="text-wrapper-3"></div>
                            {
                                isLogged ? <button type="link" onClick={handleLogout}>log out</button> : <div className="text-wrapper-3">login/register</div>
                            }
                        </div>
                    </div>
                    <div className="text-wrapper-4">Medpal</div>
              
                    <p className="p">Have You Had a Health Routine Check this Month?</p>
                    <div className="frame">
                        {/* <img className="ellipse-3" alt="Ellipse" src="ellipse-4.png" /> */}
                        <div className="frame-2">
                            <p className="text-wrapper-5">Hi, welcome to Medpal</p>
                            <p className="text-wrapper-6">
                                A groundbreaking healthcare software leveraging AI-powered chat agents to transform your experience,
                                from streamlined appointment booking to addressing your diverse needs.
                            </p>
                        </div>
                    </div>
                    <div className="frame-3">
                        <Link to="#appointment" className="text-wrapper-7">Book an Appointment</Link>
                    </div>
                    <div className="frame-4" />
                </div>

                <div id="appointment" className="body">
                    <div className="appointment-section">
                        <div className="text-wrapper-14">My Appointments Overview</div>
                        <div className="appointment-card">
                            <div className="appointment-sub-nav">
                                <div className="text-wrapper-15">No.</div>
                                <div className="text-wrapper-16">Appointment</div>
                            </div>
                            <div className="frame-6">
                                {
                                    (appointments.length > 0) ? appointments.map((appointment, idx) => (
                                        <div className="group-5">
                                        <div className="text-wrapper-18">{idx + 1}</div>
                                        <div className="text-wrapper-19">{appointment.invitee.uri}</div>
                                    </div>
                                    )) : null
                                }
                            </div>
                        
                        </div>
                    </div>
                    
                    <div className="text-wrapper-doc">Available Doctors</div>
                    <div className="appointment-doc">
                            <div className="appointment-sub-doc">
                                <div className="text-wrapper-15">Name of doctor</div>
                                <div className="text-wrapper-16">Action</div>
                                <div className="text-wrapper-17">Specialty</div>
                            </div>
                            <div className="frame-6">
                                {
                                    (specialists.length > 0) ? specialists.map(specialist => (
                                        <div className="group-5">
                                        <div className="text-wrapper-18">{specialist.name} | {specialist.gender}</div>
                                        <div className="text-wrapper-19">                                        <PopupButton
                                        url={`${specialist.url}`}
                                        className="calendly"
                                        rootElement={document.getElementById("root")}
                                        text="Schedule appointment"
                                        textColor="#ffffff"
                                        color="#00a2ff"
                                        
                                        /></div>
                                        <div className="text-wrapper-20">{specialist.specialty}</div>
                                    </div>
                                    )) : <div>No doctors avalilable</div>
                                }

                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
