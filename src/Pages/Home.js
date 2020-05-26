import React from "react";
import Heading from "../Heading";
import SearchBar from "../SearchBar";
import fire from "../fire-emoji.png"
import tech from '../category-images/technology.png';
import pharm from '../category-images/pharmacy.png';
import sustain from '../category-images/sustain.png';
import business from '../category-images/business.png'
import airCanada from '../category-images/Air-Canada-Logo 1.png';
import shopify from '../category-images/shopify.png';
import TD from '../category-images/TDBank.png';
import telus from '../category-images/telus.png';
import thomas from '../category-images/thomas.png'
import timmies from '../category-images/tim-hortons.png'

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
                            <div className="trending-item card">
                                <div className="row">
                                    <div className="col-8"><img className="trending-img" src={shopify} alt="shopify"/></div>
                                    <div className="trending-info col-4">
                                        <span>$85.49</span>
                                        <span>↓ 1.96%</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-2" >
                            <div className="trending-item card">
                                <div className="row">
                                    <div className="col-8"><img className="trending-img" src={telus} alt="telus"/></div>
                                    <div className="trending-info col-4">
                                        <span>$51.41</span>
                                        <span>↓ 0.9059%</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-2"  >
                        <div className="trending-item card">
                            <div className="row">
                                <div className="col-8"><img className="trending-img" src={airCanada} alt={"air"}/></div>
                                <div className="trending-info col-4">
                                    <span>$40.07</span>
                                    <span>↓ 5.0024%</span></div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-2"  >
                        <div className="trending-item card">
                            <div className="row">
                                <div className="col-8"><img className="trending-img" src={timmies} alt={"tims"}/></div>
                                <div className="trending-info col-4">
                                    <span>$67.49</span>
                                    <span>↓ 3.06%</span></div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-2"  >
                        <div className="trending-item card">
                            <div className="row">
                                <div className="col-8"><img className="trending-img" src={thomas} alt={shopify}/></div>
                                <div className="trending-info col-4">
                                    <span>$59.35</span>
                                    <span>↓ 0.996%</span></div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-2" >
                        <div className="trending-item card">
                            <div className="row">
                                <div className="col-8"><img className="trending-img" src={TD} alt={shopify}/></div>
                                <div className="trending-info col-4">
                                    <span>$74.81</span>
                                    <span>↓ 1.2670%</span></div>
                            </div>
                        </div>
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