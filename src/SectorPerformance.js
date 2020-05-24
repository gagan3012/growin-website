import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import "./SectorPerformance.css"
import { Bar } from 'react-chartjs-2';

const POSITIVE= '#5c9c56', NEGATIVE='#d98f8f';

//Sector Performance component to show the Daily Performance of different Sectors
const SectorPerformance = ({
    basicMaterials,
    CommunicationServices,
    Conglomerates,
    ConsumerDefensive,
    Energy,
    Financial,
    FinancialServices,
    Healthcare,
    IndustrialGoods,
    Industrials,
    RealEstate,
    Services,
    Technology,
    Utilities
}) => {
    const chart_data = {
        labels: ['Basic Materials', 'Communication Services', 'Conglomerates',
            'Consumer Defensive', 'Energy', 'Financial', 'Financial Services', 'Healthcare',
            'Industrial Goods', 'Industrials', 'Real Estate', 'Services', 'Technology', 'Utilities'],
        datasets: [
            {
                label: 'Sectors',
                backgroundColor: function (context) {
                    var index = context.dataIndex;
                    var value = context.dataset.data[index];
                    return value < 0 ? NEGATIVE :
                        POSITIVE;
                },
                borderColor: 'rgb(132,121,121)',
                borderWidth: 1,
                data: [parseFloat(basicMaterials),
                parseFloat(CommunicationServices),
                parseFloat(Conglomerates),
                parseFloat(ConsumerDefensive),
                parseFloat(Energy),
                parseFloat(Financial),
                parseFloat(FinancialServices),
                parseFloat(Healthcare),
                parseFloat(IndustrialGoods),
                parseFloat(Industrials),
                parseFloat(RealEstate),
                parseFloat(Services),
                parseFloat(Technology),
                parseFloat(Utilities)]
            }
        ]
    }

    function checkSign(value) {
        var num = value.replace('%', '');
        num = parseFloat(num);
        if (num < 0) {
            return true;
        }
        return false;
    }
    return (
        <div className="row" id="sector-performance">
            <div className="col-12">
                <h1>Daily Performance of Sectors: <button className="ml-2 btn growin-button">Show</button></h1>
            </div>
            <div className="col-8">
            <Container>
                <Row>
                <Col xs={12} className="chart">
                    <Bar aria-label="bar chart for sector performance"
                         data={chart_data}
                         options={{
                             legend: {
                                 display: false,
                             },
                             scales: {
                                 yAxes: [{
                                     ticks: {
                                         fontColor: "black",
                                     }
                                 }],
                                 xAxes: [{
                                     ticks: {
                                         fontColor: "black",
                                     }
                                 }]
                             }

                         }
                         }
                    />
                </Col>
            </Row>
            </Container>
            </div>
        <Container className="card shadow sector_container overflow-auto col-4">
            <Row className="sector_row">
                <Col className="sector_heading shadow" xs={12} sm={6}>Basic Materials: </Col>
                <Col className="sector_content shadow" style={{ color: checkSign(basicMaterials) === true ? NEGATIVE : POSITIVE }} xs={12} sm={6}>{basicMaterials}</Col>
            </Row>
            <Row className="sector_row">
                <Col className="sector_heading shadow" xs={12} sm={6}>Communication Services: </Col>
                <Col className="sector_content shadow" style={{ color: checkSign(CommunicationServices) === true ? NEGATIVE : POSITIVE }} xs={12} sm={6}>{CommunicationServices}</Col>
            </Row>
            <Row className="sector_row">
                <Col className="sector_heading shadow" xs={12} sm={6}>Conglomerates: </Col>
                <Col className="sector_content shadow" style={{ color: checkSign(Conglomerates) === true ? NEGATIVE : POSITIVE }} xs={12} sm={6}>{Conglomerates}</Col>
            </Row>
            <Row className="sector_row">
                <Col className="sector_heading shadow" xs={12} sm={6}>Consumer Defensive: </Col>
                <Col className="sector_content shadow" style={{ color: checkSign(ConsumerDefensive) === true ? NEGATIVE : POSITIVE }} xs={12} sm={6}>{ConsumerDefensive}</Col>
            </Row>
            <Row className="sector_row">
                <Col className="sector_heading shadow" xs={12} sm={6}>Energy: </Col>
                <Col className="sector_content shadow" style={{ color: checkSign(Energy) === true ? NEGATIVE : POSITIVE }} xs={12} sm={6}>{Energy}</Col>
            </Row>
            <Row className="sector_row">
                <Col className="sector_heading shadow" xs={12} sm={6}>Financial: </Col>
                <Col className="sector_content shadow" style={{ color: checkSign(Financial) === true ? NEGATIVE : POSITIVE }} xs={12} sm={6}>{Financial}</Col>
            </Row>
            <Row className="sector_row">
                <Col className="sector_heading shadow" xs={12} sm={6}>Financial Services: </Col>
                <Col className="sector_content shadow" style={{ color: checkSign(FinancialServices) === true ? NEGATIVE : POSITIVE }} xs={12} sm={6}>{FinancialServices}</Col>
            </Row>
            <Row className="sector_row">
                <Col className="sector_heading shadow" xs={12} sm={6}>Healthcare: </Col>
                <Col className="sector_content shadow" style={{ color: checkSign(Healthcare) === true ? NEGATIVE : POSITIVE }} xs={12} sm={6}>{Healthcare}</Col>
            </Row>
            <Row className="sector_row" >
                <Col className="sector_heading shadow" xs={12} sm={6}>Industrial Goods: </Col>
                <Col className="sector_content shadow" style={{ color: checkSign(IndustrialGoods) === true ? NEGATIVE : POSITIVE }} xs={12} sm={6}>{IndustrialGoods}</Col>
            </Row>
            <Row className="sector_row">
                <Col className="sector_heading shadow" xs={12} sm={6}>Industrials: </Col>
                <Col className="sector_content shadow" style={{ color: checkSign(Industrials) === true ? NEGATIVE : POSITIVE }} xs={12} sm={6}>{Industrials}</Col>
            </Row>
            <Row className="sector_row" >
                <Col className="sector_heading shadow" xs={12} sm={6}>Real Estate: </Col>
                <Col className="sector_content shadow" style={{ color: checkSign(RealEstate) === true ? NEGATIVE : POSITIVE }} xs={12} sm={6}>{RealEstate}</Col>
            </Row>
            <Row className="sector_row">
                <Col className="sector_heading shadow" xs={12} sm={6}>Services: </Col>
                <Col className="sector_content shadow" style={{ color: checkSign(Services) === true ? NEGATIVE : POSITIVE }} xs={12} sm={6}>{Services}</Col>
            </Row>
            <Row className="sector_row">
                <Col className="sector_heading shadow" xs={12} sm={6}>Technology: </Col>
                <Col className="sector_content shadow" style={{ color: checkSign(Technology) === true ? NEGATIVE : POSITIVE }} xs={12} sm={6}>{Technology}</Col>
            </Row>
            <Row className="sector_row">
                <Col className="sector_heading shadow" xs={12} sm={6}>Utilities: </Col>
                <Col className="sector_content shadow" style={{ color: checkSign(Utilities) === true ? NEGATIVE : POSITIVE }} xs={12} sm={6}>{Utilities}</Col>
            </Row>
        </Container>
        </div>
    )
}

export default SectorPerformance;