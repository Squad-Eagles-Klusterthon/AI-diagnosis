import React from "react";
import "./style.css";

export const Body = () => {
    return (
        <div className="body">
            <div className="text-wrapper">Reminder</div>
            <div className="appointment-section">
                <div className="div">My Appointments Overview</div>
                <div className="appointment-card">
                    <div className="appointment-sub-nav">
                        <div className="text-wrapper-2">No. Of Appointments</div>
                        <div className="text-wrapper-3">Name of Scheduled Doctors</div>
                        <div className="text-wrapper-4">Date</div>
                    </div>
                    <div className="frame">
                        <div className="group">
                            <div className="text-wrapper-5">5</div>
                            <div className="text-wrapper-6">1</div>
                            <div className="text-wrapper-7">22nd Nov, 2023</div>
                        </div>
                        <div className="group">
                            <div className="text-wrapper-5">1</div>
                            <div className="text-wrapper-6">2</div>
                            <div className="text-wrapper-8">20th Nov, 2023</div>
                        </div>
                        <div className="group">
                            <div className="text-wrapper-5">3</div>
                            <div className="text-wrapper-6">1</div>
                            <div className="text-wrapper-8">10th Nov, 2023</div>
                        </div>
                        <div className="group-2">
                            <div className="text-wrapper-5">1</div>
                            <div className="text-wrapper-6">1</div>
                            <div className="text-wrapper-9">1st Nov, 2023</div>
                        </div>
                    </div>
                    <div className="div-wrapper">
                        <div className="text-wrapper-10">View Details</div>
                    </div>
                </div>
                <div className="app-nav">
                    <div className="frame-2">
                        <div className="text-wrapper-11">Previous</div>
                    </div>
                    <div className="text-wrapper-12">Declined</div>
                    <div className="frame-3">
                        <div className="text-wrapper-13">Daily</div>
                        <div className="text-wrapper-14">Weekly</div>
                        <div className="text-wrapper-14">Monthly</div>
                    </div>
                </div>
            </div>
            <div className="overlap">
                <div className="calendar">
                    <div className="frame-4">
                        <div className="navbar">
                            <div className="text-wrapper-15">Sun</div>
                            <div className="text-wrapper-15">Mon</div>
                            <div className="text-wrapper-15">Tue</div>
                            <div className="text-wrapper-15">Wed</div>
                            <div className="text-wrapper-15">Thu</div>
                            <div className="text-wrapper-15">Fri</div>
                            <div className="text-wrapper-15">Sat</div>
                        </div>
                        <div className="calender">
                            <div className="group-3">
                                <div className="text-wrapper-16">1</div>
                                <div className="text-wrapper-17">2</div>
                                <div className="text-wrapper-18">3</div>
                                <div className="overlap-group">
                                    <div className="text-wrapper-16">4</div>
                                    <div className="ellipse" />
                                </div>
                            </div>
                            <div className="group-4">
                                <div className="text-wrapper-19">5</div>
                                <div className="text-wrapper-20">6</div>
                                <div className="overlap-2">
                                    <div className="text-wrapper-21">7</div>
                                    <div className="ellipse-2" />
                                    <div className="ellipse-3" />
                                </div>
                                <div className="text-wrapper-22">8</div>
                                <div className="text-wrapper-23">9</div>
                                <div className="text-wrapper-24">10</div>
                                <div className="text-wrapper-25">11</div>
                            </div>
                            <div className="group-5">
                                <div className="overlap-3">
                                    <div className="text-wrapper-19">12</div>
                                    <div className="ellipse-4" />
                                    <div className="ellipse-5" />
                                </div>
                                <div className="text-wrapper-20">13</div>
                                <div className="text-wrapper-26">14</div>
                                <div className="text-wrapper-22">15</div>
                                <div className="text-wrapper-23">16</div>
                                <div className="text-wrapper-24">17</div>
                                <div className="text-wrapper-25">18</div>
                            </div>
                            <div className="group-6">
                                <div className="text-wrapper-27">19</div>
                                <div className="text-wrapper-28">20</div>
                                <div className="text-wrapper-29">21</div>
                                <div className="frame-5">
                                    <div className="text-wrapper-30">22</div>
                                    <div className="rectangle" />
                                </div>
                                <div className="text-wrapper-31">23</div>
                                <div className="text-wrapper-32">24</div>
                                <div className="text-wrapper-33">25</div>
                            </div>
                            <div className="group-7">
                                <div className="group-8">
                                    <div className="text-wrapper-19">27</div>
                                    <div className="text-wrapper-20">28</div>
                                    <div className="text-wrapper-26">29</div>
                                    <div className="text-wrapper-22">30</div>
                                </div>
                                <div className="frame-6">
                                    <div className="text-wrapper-34">26</div>
                                    <div className="ellipse-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-wrapper-35">Calendar</div>
                    <div className="month">
                        <div className="text-wrapper-36">Month</div>
                        <div className="frame-7">
                            <div className="text-wrapper-37">November</div>
                            <img className="majesticons-chevron" alt="Majesticons chevron" src="majesticons-chevron-down-5.svg" />
                        </div>
                    </div>
                </div>
                <div className="color-description">
                    <img className="line" alt="Line" src="line-1.svg" />
                    <div className="frame-8">
                        <div className="desc">
                            <div className="rectangle-2" />
                            <div className="text-wrapper-38">Hospital Appointment</div>
                        </div>
                        <div className="desc">
                            <div className="rectangle-3" />
                            <div className="text-wrapper-39">Online Appointment</div>
                        </div>
                        <div className="desc">
                            <div className="rectangle-4" />
                            <div className="text-wrapper-40">Canceled Appointment</div>
                        </div>
                        <div className="desc">
                            <div className="rectangle-5" />
                            <div className="text-wrapper-41">Rescheduled Appoinment</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overlap-4">
                <div className="appointment-card-2">
                    <div className="reminder">
                        <div className="text-wrapper-42">Upcoming Appointments</div>
                        <div className="frame-9">
                            <div className="text-wrapper-43">2</div>
                        </div>
                    </div>
                    <div className="element-nov-at-pm">25 Nov.&nbsp;&nbsp; at&nbsp;&nbsp;12:30 pm</div>
                    <div className="text-wrapper-44">Suspicion of Appendicitis. Examination</div>
                    <div className="doctor">
                        <div className="ellipse-7" />
                        <div className="text-wrapper-45">Dr. Lawal Obi</div>
                    </div>
                    <img className="notification" alt="Notification" src="notification-02.svg" />
                    <img className="img" alt="Majesticons chevron" src="majesticons-chevron-down-2.svg" />
                    <img className="majesticons-chevron-2" alt="Majesticons chevron" src="majesticons-chevron-down-3.svg" />
                    <img className="notification-2" alt="Notification" src="notification-02-2.svg" />
                </div>
                <div className="appointment-card-3">
                    <div className="reminder">
                        <div className="text-wrapper-42">Upcoming Appointments</div>
                        <div className="frame-9">
                            <div className="text-wrapper-43">2</div>
                        </div>
                    </div>
                    <div className="element-nov-at-pm">25 Nov.&nbsp;&nbsp; at&nbsp;&nbsp;12:30 pm</div>
                    <div className="text-wrapper-44">Suspicion of Appendicitis. Examination</div>
                    <div className="doctor">
                        <img className="ellipse-8" alt="Ellipse" src="ellipse-6.svg" />
                        <div className="text-wrapper-45">Dr. Lawal Obi</div>
                    </div>
                    <img className="img" alt="Majesticons chevron" src="majesticons-chevron-down.svg" />
                    <img className="majesticons-chevron-3" alt="Majesticons chevron" src="image.svg" />
                    <img className="notification-3" alt="Notification" src="notification-02-3.svg" />
                </div>
            </div>
            <div className="text-wrapper-46">My Scheduled Appointments</div>
            <div className="frame-10">
                <div className="date">
                    <div className="text-wrapper-47">22</div>
                    <img className="line-2" alt="Line" src="line-2.svg" />
                    <div className="text-wrapper-48">Wed</div>
                </div>
                <div className="date-2">
                    <div className="text-wrapper-49">23</div>
                    <img className="line-2" alt="Line" src="line-2-2.svg" />
                    <div className="text-wrapper-50">Thur</div>
                </div>
                <div className="date-3">
                    <div className="text-wrapper-49">24</div>
                    <img className="line-2" alt="Line" src="line-2-3.svg" />
                    <div className="text-wrapper-51">Fri</div>
                </div>
                <div className="date-4">
                    <div className="text-wrapper-49">27</div>
                    <img className="line-2" alt="Line" src="line-2-4.svg" />
                    <div className="text-wrapper-52">Mon</div>
                </div>
                <div className="frame-11">
                    <div className="text-wrapper-53">Theropeutic Consultation</div>
                    <p className="p">12:30 pm - 2:30 pm</p>
                </div>
                <div className="see-more">
                    <div className="text-wrapper-54">See more</div>
                    <img className="majesticons-chevron-4" alt="Majesticons chevron" src="majesticons-chevron-down-4.svg" />
                </div>
                <div className="frame-12">
                    <div className="overlap-group-2">
                        <img className="ellipse-9" alt="Ellipse" src="ellipse-10.svg" />
                        <div className="ellipse-10" />
                        <div className="ellipse-11" />
                    </div>
                    <div className="text-wrapper-55">Your Appointed Doctors</div>
                </div>
            </div>
        </div>
    );
};
