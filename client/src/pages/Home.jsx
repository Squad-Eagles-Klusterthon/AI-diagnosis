import { React, useEffect, useState } from "react";
import "./home.css";
import {Link, useNavigate} from 'react-router-dom';
import send from '../img/calender/akar-icons_send.svg';
import {baseUrl} from '../config/api';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../config/firebase.config';
import axios from 'axios';

export const Home = () => {
    const deafultMsg = {"user": "chat", "text": "I am your virtual health assistant,\n Tell me the symptom(s) you are having"}
    const [messages, setMyMessages] = useState([deafultMsg]);
    const [prompt, setPrompt] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isLogged, setIsLogged] = useState()

    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              console.log("userid", user)
              setIsLogged(true);
              setMyMessages(messages);
            } else {
              navigate("/signin");
              console.log("user is logged out");
            }
          });
          console.log("MESSAGES", messages)
        
    }, [messages, navigate, isLogged]);


    const onChange = e => {
        setPrompt(e.target.value);
    }
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
            navigate("/signin");
            setIsLogged(false);
            console.log("Signed out successfully")
        }).catch((error) => {
            console.log("error signing out", error);
        });
    }

    const onSubmit = async(e) => {
        try {
            setIsLoading(true);
            console.log("Calling open")
            const message = {
                "user": "me",
                "text": prompt
            }
            messages.push(message);
            setMyMessages(messages);
            setPrompt("")
            console.log("MESSAGES-2", messages)
            const res = await axios.get(`https://vivacious-mittens-deer.cyclic.app/api/chats/${prompt}`);
            console.log("Jezebel", res);
            const message1 = {
                "user": "user",
                "text": res.content
            }
            messages.push(message1);
            setMyMessages(messages);
            setPrompt("");
            setIsLoading(false)
            console.log("MESSAGES-3", messages)
        } catch (error) {
            setIsLoading(false)
            console.log(error);
        }
    }

    const onKeyDown = e => {
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {
            console.log("Enter Key pressed down")
            onSubmit();
        }
    }
    return (
        <div className="appointment">
            <div className="div">
                <div className="base">
                    <div className="group">
                        <div className="nav">
                            <div className="div-wrapper">
                                <Link to="/home" className="text-wrapper-2">Home</Link>
                            </div>
                            <div className="dagsb">
                                <Link to="/appointment" className="text-wrapper-2">Appointment</Link>
                            </div>
                            <div className="text-wrapper-3"></div>
                            {
                                isLogged ? <button type="link" onClick={handleLogout}>log out</button> : <div className="text-wrapper-3">login/register</div>
                            }
                        </div>
                    </div>
                    <div className="text-wrapper-4">MedPal</div>
                    <div className="icon">
                    </div>
                    <div className="frame">
                        <div className="frame-2">
                            <p className="p">Welcome to Your Medpal AI chatbot</p>
                            <p className="text-wrapper-5">
                                A groundbreaking healthcare software leveraging AI-powered chat agents to transform your experience,
                                from streamlined appointment booking to addressing your diverse needs.
                            </p>
                        </div>
                    </div>
                    <div className="frame-3" />
                    <p className="let-our-AI-help-you">Let Our AI Help You&nbsp;&nbsp;In Addressing Your Needs</p>
                </div>
                <div className="chat-bot">
                <img className="akar-icons-send" alt="Akar icons send" src={send} />
                    <div className="message-box">
                        {
                            messages.map(msg => (
                                msg.user === 'chat' ? (<div className="left">
                                    <p>{msg.text}</p>
                                </div>) : (<div className="right">
                                    <p>{msg.text}</p>
                                </div>)
                            ))
                        }
                    </div>
                    <div className="chat-input">
                        
                        <input 
                            onChange={e => onChange(e)}
                            value={prompt}
                            placeholder={isLoading ? "Getting result, please wait..." : "Type your symptoms..."}
                            autoFocus
                            onKeyDown={e => onKeyDown(e)}
                            style={{width: '90%', height: '95%'}}
                            disabled={isLoading}
                        />
                        <button disabled={isLoading} onClick={onSubmit}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};