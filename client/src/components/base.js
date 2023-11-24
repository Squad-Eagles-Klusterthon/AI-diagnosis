import React from "react";
import "./style.css";

export const Base = () => {
    return (
        <div className="base">
            <div className="group">
                <div className="nav">
                    <div className="dagsb">
                        <div className="text-wrapper">Home</div>
                    </div>
                    <div className="div-wrapper">
                        <div className="div">Appointment</div>
                    </div>
                    <div className="text-wrapper-2">Chats</div>
                    <div className="text-wrapper-2">Documents</div>
                </div>
            </div>
            <div className="text-wrapper-3">Logo</div>
            <div className="icon">
                <div className="notification">
                    <div className="overlap-group">
                        <img className="vector" alt="Vector" src="vector.svg" />
                        <img className="img" alt="Vector" src="image.svg" />
                        <div className="ellipse" />
                    </div>
                </div>
                <img className="ellipse-2" alt="Ellipse" src="ellipse-3.png" />
            </div>
            <p className="p">Have You Had a Health Routine Check this Month?</p>
            <div className="frame">
                <img className="ellipse-3" alt="Ellipse" src="ellipse-4.png" />
                <div className="frame-2">
                    <p className="text-wrapper-4">Hi Gracia, Welcome to Medpal</p>
                    <p className="text-wrapper-5">
                        A groundbreaking healthcare software leveraging AI-powered chat agents to transform your experience, from
                        streamlined appointment booking to addressing your diverse needs.
                    </p>
                </div>
            </div>
            <div className="frame-3">
                <div className="text-wrapper-6">Lets Book an Appointment</div>
            </div>
            <div className="frame-4" />
        </div>
    );
};
