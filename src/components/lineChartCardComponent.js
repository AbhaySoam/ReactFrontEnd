import React from 'react';
import {Line} from 'react-chartjs-2';
import Card from 'react-bootstrap/Card'
import '../index.css';

class LineChartCardComponent extends React.Component {
    constructor(props) {
        super(props);

        this.dailyXaxisLabels = props.dailyLabels;
        this.weeklyXaxisLabels = props.weeklyLabels;
        this.monthlyXaxisLabels = props.monthlyLabels;
        this.handleDurationChange = this.handleDurationChange.bind(this);

        this.state= {
            durationArray: ['Monthly', 'Weekly', 'Daily'],             //used in changing x-Axis labels to {monthly, weekly, daily} intervals.
            data: {
                labels: this.monthlyXaxisLabels,
                datasets: [
                    {
                        label: "Sep 21,2015-Oct 20, 2015:  ",
                        borderColor: "orange",
                        data: props.orangeLineData,
                        lineTension: 0,
                        fill: false,
                        lineWidth: 4,
                        pointRadius: 4,
                        pointBackgroundColor: "orange", 
                    },
                    {
                        label: "Sep 21,2014-Oct 20, 2014:  ",
                        borderColor: "blue",
                        data: props.blueLineData,
                        lineTension: 0,
                        fill: true,
                        lineWidth: 4,
                        pointRadius: 4,
                        pointBackgroundColor: "blue",
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false,
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            drawBorder: false,
                        }
                    }]
                }
            },
        };
    }
    handleDurationChange(event) {
        //handles duration change of x-Axis labels through DurationSelectBox component.

        let currentDurArray = event.target.value;
        let currentXaxisLables = [];
        if(currentDurArray === 'Daily') {
            currentXaxisLables = this.dailyXaxisLabels;
        }
        else if(currentDurArray === 'Weekly') {
            currentXaxisLables = this.weeklyXaxisLabels;
        }
        else if(currentDurArray === 'Monthly') {
            currentXaxisLables = this.monthlyXaxisLabels;
        }
        this.setState((prevState) => {
            prevState.data.labels = currentXaxisLables; 
            return prevState;
        });
    }
    
    render() {
        return (
            <Card border='primary' style={this.props.style}>
                <Card.Body>
                    <Card.Title style = {{height: '12%'}}>
                        <DurationSelectBoxComponent durationArray = {this.state.durationArray} handleDurationChange = {this.handleDurationChange} />
                        <LineChartSessionTitlesComponent dataset = {this.state.data.datasets[0]} />
                        <LineChartSessionTitlesComponent dataset = {this.state.data.datasets[1]} />
                    </Card.Title>
                    <div className="chart-container" style={{position: 'relative', height: '85%'}}>
                        <Line data = {this.state.data} options = {this.state.options} />
                    </div>
                </Card.Body>
            </Card>
        );
    }
}

function LineChartSessionTitlesComponent(props) { 
    //returns component containing titles above line chart for both years.

    let coloredCircleStyle = {
        display: 'inline-block',
        width: '10px',
        height: '10px',
        borderRadius: "50%",
        backgroundColor: props.dataset.borderColor,
    };
    let titlesStyle = {
        width: '60%',
        float: 'left',
        marginLeft: '5%',
        fontSize: '1.1rem',
    };

    return (
        <div style = {titlesStyle}>{props.dataset.label}   <span style = {coloredCircleStyle}></span> Session </div>            
    );
}

function DurationSelectBoxComponent(props) {
    //returns a component containing a dropdown select box for selecting x-Axis durations.

    var durationOptionsList = props.durationArray.map((item, index) => {
        return <option key = {index} value = {item} >{item}</option>
    });
    let selectBoxStyle = {
        float: 'right',
        position: 'relative',
        marginRight: '10px',
    };
    return (
        <select style = {selectBoxStyle} onChange = {props.handleDurationChange} >
            {durationOptionsList}
        </select>
        );
}

export default LineChartCardComponent;