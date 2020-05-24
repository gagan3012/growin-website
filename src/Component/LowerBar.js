import React from "react";
import logo from '../Growin.png'

class LowerBar extends React.Component{
    render() {
        return(
            <footer id="lower-bar">
                <div className="footer">
                    <img id="footer-img" src={logo} alt="logo"/> <span className="footer-copyright">©</span>
                </div>
            </footer>
        )
    }

}
// #f2fcca

export default LowerBar