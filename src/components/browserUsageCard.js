import React from 'react';
import { Card } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import { formatBrowser } from '../formatBrowser';

class BrowserUsageCard extends React.Component {
    //returns browser usage card.

    constructor(props) {
        super(props);
        this.state = {
            browsersNames: [],
            browsersHits: [],

            data: {
                labels: [],
                datasets: [{
                    // label: " opera chrome  ",
                    data: [],
                    borderWidth: 1,
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#66ff66',
                        '#99994d',
                        '#0059b3'
                    ],
                    lineTension: 0,
                    fill: false,
                    lineWidth: 4,
                    pointRadius: 4,
                    pointBackgroundColor: "orange",
                },],
            },
            options: {
                responsive: true,
                //    title: {
                //         display: true,
                //        maintainAspectRatio: false,
                //       //     text: 'Browser Usage'
                //     },
                legend: {
                    display: true,
                },
            },
        };
    }

    componentDidMount() {
        //const url = `${API_URL}/activeUsers`;
        const url = "browserUsage.json";

        var browsersData = [];
        var labell = [];
        var valuess = [];

        axios.get(url).then(response => {
            browsersData = response.data;

            for (let i = 0; i < browsersData.length; i++) {
                let dataArr = browsersData[i].data.split("|");
                labell.push(formatBrowser(dataArr[0]));

                valuess.push(parseInt(dataArr[2].replace("hits :", "").trim()));
                
            }
            this.setState({
                data: {
                    datasets: [{
                        data: valuess
                    }],

                    // These labels appear in the legend and in the tooltips when hovering different arcs
                    labels: labell
                }
            })
        })
            .catch(err => {
                console.log(err);
            });

    }

    render() {
        return (
            <Card border={this.props.borderColor} text={this.props.textColor}
                style={{ marginBottom: '10px', height: '47%', borderRadius: 0, fontSize: 'small' }}>
                <Card.Body>
                    <h6>{this.props.cardTitle} </h6>
                    <div style={{ position: 'relative', height: '85%' }} >
                        <Pie data={this.state.data} options={this.state.options} />
                    </div>
                </Card.Body>
            </Card>
        );
    }
}


export default BrowserUsageCard;