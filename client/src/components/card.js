import React from "react";
import "./style.css";

export const Card = () => {
    return (
        <div className="card">
            <div className="overlap-group">
                <div className="nutritional-tips">
                    <div className="ellipse" />
                    <div className="frame">
                        <div className="text-wrapper">Nutritional Tips</div>
                        <p className="div">
                            Unlock personalized nutritional insights and meal recommendations tailored to your unique profile and
                            medical history.
                        </p>
                    </div>
                </div>
                <img className="group" alt="Group" src="group.png" />
            </div>
            <div className="div-wrapper">
                <div className="text-wrapper-2">View</div>
            </div>
        </div>
    );
};
