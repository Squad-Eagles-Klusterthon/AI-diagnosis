import { React, useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../config/firebase.config';

import "./test.css";

export const Appointment = () => {

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
                        <Link  className="text-wrapper-7">Lets Book an Appointment</Link>
                    </div>
                    <div className="frame-4" />
                </div>
                <div className="card">
                    <div className="overlap">
                        <div className="nutritional-tips">
                            <div className="ellipse-4" />
                            <div className="frame-2">
                                <div className="text-wrapper-8">Nutritional Tips</div>
                                <p className="text-wrapper-9">
                                    Unlock personalized nutritional insights and meal recommendations tailored to your unique profile and
                                    medical history.
                                </p>
                            </div>
                        </div>
                        <img className="group-2" alt="Group" src="group.png" />
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
                                <div className="text-wrapper-8">Mental Wellness</div>
                                <p className="text-wrapper-9">
                                    Discover curated mental wellness practices and stress-relief techniques personalized to norture your
                                    mental health and well-being.
                                </p>
                            </div>
                        </div>
                        <img className="group-3" alt="Group" src="image.png" />
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
                                <div className="text-wrapper-11">Exercise Suggestions</div>
                                <p className="text-wrapper-9">
                                    Explore exercise recommendations designed specifically for you, considering your fitness level,
                                    preferences and health goals
                                </p>
                            </div>
                        </div>
                        <img className="group-4" alt="Group" src="group-2.png" />
                    </div>
                    <div className="frame-5">
                        <div className="text-wrapper-10">View</div>
                    </div>
                </div>
                <div className="slide-show">
                    <div className="rectangle" />
                    <div className="rectangle-2" />
                    <div className="rectangle-2" />
                </div>
                <div className="text-wrapper-12">Recommendations</div>
                <div className="body">
                    <div className="text-wrapper-13">Reminder</div>
                    <div className="appointment-section">
                        <div className="text-wrapper-14">My Appointments Overview</div>
                        <div className="appointment-card">
                            <div className="appointment-sub-nav">
                                <div className="text-wrapper-15">No. Of Appointments</div>
                                <div className="text-wrapper-16">Name of Scheduled Doctors</div>
                                <div className="text-wrapper-17">Date</div>
                            </div>
                            <div className="frame-6">
                                <div className="group-5">
                                    <div className="text-wrapper-18">5</div>
                                    <div className="text-wrapper-19">1</div>
                                    <div className="text-wrapper-20">22nd Nov, 2023</div>
                                </div>
                                <div className="group-5">
                                    <div className="text-wrapper-18">1</div>
                                    <div className="text-wrapper-19">2</div>
                                    <div className="text-wrapper-21">20th Nov, 2023</div>
                                </div>
                                <div className="group-5">
                                    <div className="text-wrapper-18">3</div>
                                    <div className="text-wrapper-19">1</div>
                                    <div className="text-wrapper-21">10th Nov, 2023</div>
                                </div>
                                <div className="group-6">
                                    <div className="text-wrapper-18">1</div>
                                    <div className="text-wrapper-19">1</div>
                                    <div className="text-wrapper-22">1st Nov, 2023</div>
                                </div>
                            </div>
                            <div className="frame-7">
                                <div className="text-wrapper-23">View Details</div>
                            </div>
                        </div>
                        <div className="app-nav">
                            <div className="frame-8">
                                <div className="text-wrapper-24">Previous</div>
                            </div>
                            <div className="text-wrapper-25">Declined</div>
                            <div className="frame-9">
                                <div className="text-wrapper-26">Daily</div>
                                <div className="text-wrapper-27">Weekly</div>
                                <div className="text-wrapper-27">Monthly</div>
                            </div>
                        </div>
                    </div>
                    <div className="overlap-2">
                        <div className="calendar">
                            <div className="frame-10">
                                <div className="days-of-the-week">
                                    <div className="text-wrapper-28">Sun</div>
                                    <div className="text-wrapper-28">Mon</div>
                                    <div className="text-wrapper-28">Tue</div>
                                    <div className="text-wrapper-28">Wed</div>
                                    <div className="text-wrapper-28">Thu</div>
                                    <div className="text-wrapper-28">Fri</div>
                                    <div className="text-wrapper-28">Sat</div>
                                </div>
                                <div className="calender">
                                    <div className="group-7">
                                        <div className="text-wrapper-29">1</div>
                                        <div className="text-wrapper-30">2</div>
                                        <div className="text-wrapper-31">3</div>
                                        <div className="overlap-group-2">
                                            <div className="text-wrapper-29">4</div>
                                            <div className="ellipse-7" />
                                        </div>
                                    </div>
                                    <div className="group-8">
                                        <div className="text-wrapper-32">5</div>
                                        <div className="text-wrapper-33">6</div>
                                        <div className="overlap-3">
                                            <div className="text-wrapper-34">7</div>
                                            <div className="ellipse-8" />
                                            <div className="ellipse-9" />
                                        </div>
                                        <div className="text-wrapper-35">8</div>
                                        <div className="text-wrapper-36">9</div>
                                        <div className="text-wrapper-37">10</div>
                                        <div className="text-wrapper-38">11</div>
                                    </div>
                                    <div className="group-9">
                                        <div className="overlap-4">
                                            <div className="text-wrapper-32">12</div>
                                            <div className="ellipse-10" />
                                            <div className="ellipse-11" />
                                        </div>
                                        <div className="text-wrapper-33">13</div>
                                        <div className="text-wrapper-39">14</div>
                                        <div className="text-wrapper-35">15</div>
                                        <div className="text-wrapper-36">16</div>
                                        <div className="text-wrapper-37">17</div>
                                        <div className="text-wrapper-38">18</div>
                                    </div>
                                    <div className="group-10">
                                        <div className="text-wrapper-40">19</div>
                                        <div className="text-wrapper-41">20</div>
                                        <div className="text-wrapper-42">21</div>
                                        <div className="frame-11">
                                            <div className="text-wrapper-43">22</div>
                                            <div className="rectangle-3" />
                                        </div>
                                        <div className="text-wrapper-44">23</div>
                                        <div className="text-wrapper-45">24</div>
                                        <div className="text-wrapper-46">25</div>
                                    </div>
                                    <div className="group-11">
                                        <div className="group-12">
                                            <div className="text-wrapper-32">27</div>
                                            <div className="text-wrapper-33">28</div>
                                            <div className="text-wrapper-39">29</div>
                                            <div className="text-wrapper-35">30</div>
                                        </div>
                                        <div className="frame-12">
                                            <div className="text-wrapper-47">26</div>
                                            <div className="ellipse-12" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-wrapper-48">Calendar</div>
                            <div className="month">
                                <div className="text-wrapper-49">Month</div>
                                <div className="frame-13">
                                    <div className="text-wrapper-50">November</div>
                                    <img className="majesticons-chevron" alt="Majesticons chevron" src="majesticons-chevron-down-5.svg" />
                                </div>
                            </div>
                        </div>
                        <div className="color-description">
                            <img className="line" alt="Line" src="line-1.svg" />
                            <div className="frame-14">
                                <div className="desc">
                                    <div className="rectangle-4" />
                                    <div className="text-wrapper-51">Hospital Appointment</div>
                                </div>
                                <div className="desc">
                                    <div className="rectangle-5" />
                                    <div className="text-wrapper-52">Online Appointment</div>
                                </div>
                                <div className="desc">
                                    <div className="rectangle-6" />
                                    <div className="text-wrapper-53">Canceled Appointment</div>
                                </div>
                                <div className="desc">
                                    <div className="rectangle-7" />
                                    <div className="text-wrapper-54">Rescheduled Appoinment</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overlap-5">
                        <div className="appointment-card-2">
                            <div className="reminder">
                                <div className="text-wrapper-55">Upcoming Appointments</div>
                                <div className="frame-15">
                                    <div className="text-wrapper-56">2</div>
                                </div>
                            </div>
                            <div className="element-nov-at-pm">25 Nov.&nbsp;&nbsp; at&nbsp;&nbsp;12:30 pm</div>
                            <div className="text-wrapper-57">Suspicion of Appendicitis. Examination</div>
                            <div className="doctor">
                                <div className="ellipse-13" />
                                <div className="text-wrapper-58">Dr. Lawal Obi</div>
                            </div>
                            <img className="notification-2" alt="Notification" src="notification-02.svg" />
                            <img className="majesticons-chevron-2" alt="Majesticons chevron" src="majesticons-chevron-down-2.svg" />
                            <img className="majesticons-chevron-3" alt="Majesticons chevron" src="majesticons-chevron-down-3.svg" />
                            <img className="notification-3" alt="Notification" src="notification-02-2.svg" />
                        </div>
                        <div className="appointment-card-3">
                            <div className="reminder">
                                <div className="text-wrapper-55">Upcoming Appointments</div>
                                <div className="frame-15">
                                    <div className="text-wrapper-56">2</div>
                                </div>
                            </div>
                            <div className="element-nov-at-pm">25 Nov.&nbsp;&nbsp; at&nbsp;&nbsp;12:30 pm</div>
                            <div className="text-wrapper-57">Suspicion of Appendicitis. Examination</div>
                            <div className="doctor">
                                <img className="ellipse-14" alt="Ellipse" src="ellipse-6.svg" />
                                <div className="text-wrapper-58">Dr. Lawal Obi</div>
                            </div>
                            <img className="majesticons-chevron-2" alt="Majesticons chevron" src="majesticons-chevron-down.svg" />
                            <img className="majesticons-chevron-4" alt="Majesticons chevron" src="image.svg" />
                            <img className="notification-4" alt="Notification" src="notification-02-3.svg" />
                        </div>
                    </div>
                    <div className="text-wrapper-59">My Scheduled Appointments</div>
                    <div className="frame-16">
                        <div className="date">
                            <div className="text-wrapper-60">22</div>
                            <img className="line-2" alt="Line" src="line-2.svg" />
                            <div className="text-wrapper-61">Wed</div>
                        </div>
                        <div className="date-2">
                            <div className="text-wrapper-62">23</div>
                            <img className="line-2" alt="Line" src="line-2-2.svg" />
                            <div className="text-wrapper-63">Thur</div>
                        </div>
                        <div className="date-3">
                            <div className="text-wrapper-62">24</div>
                            <img className="line-2" alt="Line" src="line-2-3.svg" />
                            <div className="text-wrapper-64">Fri</div>
                        </div>
                        <div className="date-4">
                            <div className="text-wrapper-62">27</div>
                            <img className="line-2" alt="Line" src="line-2-4.svg" />
                            <div className="text-wrapper-65">Mon</div>
                        </div>
                        <div className="frame-17">
                            <div className="text-wrapper-66">Theropeutic Consultation</div>
                            <p className="text-wrapper-67">12:30 pm - 2:30 pm</p>
                        </div>
                        <div className="see-more">
                            <div className="text-wrapper-68">See more</div>
                            <img className="majesticons-chevron-5" alt="Majesticons chevron" src="majesticons-chevron-down-4.svg" />
                        </div>
                        <div className="frame-18">
                            <div className="overlap-group-3">
                                <img className="ellipse-15" alt="Ellipse" src="ellipse-10.svg" />
                                <div className="ellipse-16" />
                                <div className="ellipse-17" />
                            </div>
                            <div className="text-wrapper-69">Your Appointed Doctors</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
