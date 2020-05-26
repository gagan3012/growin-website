import React from "react";
import Heading from "../Heading";
import SearchBar from "../SearchBar";
import fire from "../fire-emoji.png"
import tech from '../category-images/technology.png';
import pharm from '../category-images/pharmacy.png';
import sustain from '../category-images/sustain.png';
import business from '../category-images/business.png'

class Home extends React.Component {


    render() {
        return (
            <div id="home-page" className="container">
                    <Heading /><SearchBar />
                <div className="mt-3" id="trending">
                    <div className="row">
                        <div className="col-12">
                            <h1>Trending <img  id="fire-emoji" src={fire} alt="fire-emoji"/></h1></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 mb-2">
                            <div className="trending-item card"></div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-2" >
                            <div className="trending-item card"></div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-2"  >
                        <div className="trending-item card"></div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-2"  >
                        <div className="trending-item card"></div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-2"  >
                        <div className="trending-item card"></div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-2" >
                        <div className="trending-item card"></div>
                        </div>
                    </div>
                </div>
                <div id={"categories"} className={"mt-3"}>
                    <div className="row">
                        <div className="col-12">
                            <h1>Browse Categories</h1></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 mb-3">
                            <div className="category-item">
                                <div className="category-text">Sustainability</div>
                                <img className="category-img" src={sustain} alt="sustainability"/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-3" >
                            <div className="category-item">
                                <div className="category-text">Pharmacy</div>
                                <img className="category-img" src={pharm} alt="pharmacy"/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-3"  >
                            <div className="category-item">
                                <div className="category-text">Technology</div>
                                <img className="category-img" src={tech} alt="tech"/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-3"  >
                            <div className="category-item">
                                <div className="category-text">Business</div>
                                <img className="category-img" src={business} alt="business"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home