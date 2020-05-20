import React from "react";
import Heading from "../Heading";
import SearchBar from "../SearchBar";

class Home extends React.Component {

    loadCategories(){

    }

    render() {
        return (
            <div id="home-page" className="container">
                <Heading /><SearchBar />
                <div id="trending">
                    <div className="row">
                        {/*<div className="col-12">Trending</div>*/}
                    </div>
                </div>
                <div id={"categories"} className={"row"}></div>
            </div>
        );
    }
}

export default Home