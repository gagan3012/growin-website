import React from "react";
import invest from '../invest.png';
import logo from '../Growin.png'
import '../App.css';
import {Link} from "react-router-dom";

class About extends React.Component{

    render() {
        return (
            <div className="container">
                <div className="centered-left">
                    <img id="about-logo" alt="about logo" src={logo}/>
                    <h2 id="about-title">A Place To Invest</h2>
                    <div id="about-text">
                        Growin' is a platform that gives recommendations to users on choosing their investments based on
                        their interests and trading habits
                    </div>
                    <Link to={'/home'}><button  className="btn growin-button">Get Started</button></Link>
                </div>
                <div className="about-img centered-right">
                    <img id="invest-img" src={invest} alt="invest"/>
                </div>
            </div>
        )
    }
}

export default About;