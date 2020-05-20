import React from "react";
import logo from './Growin.png'

class LowerBar extends React.Component{
    render() {
        return(
            <div id="lower-bar">
                <div className="footer">
                    <img id="footer-img" src={logo}/> <span className="footer-copyright">©</span>
                </div>

            </div>
        )
    }

}
// #f2fcca

export default LowerBar