import React from "react";
import invest from '../invest.png';
import logo from '../Growin.png'
import '../App.css';

class About extends React.Component{
    render() {
        return (
            <div className="container">
                <div className="centered-left">
                    <img id="about-logo" src={logo}/>
                    <h2 id="about-title">A Place To Invest</h2>
                    <div id="about-text">
                        Growin' is a platform that gives recommendations to users on choosing their investments based on
                        their interests and trading habits
                    </div>
                    <button className="btn growin-button">Get Started</button>
                </div>
                <div className="about-img centered-right">
                    <img id="invest-img" src={invest}/>
                </div>
            </div>
        )
    }
}

export default About;