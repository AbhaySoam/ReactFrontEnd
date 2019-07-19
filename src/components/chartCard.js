import React from 'react';
import {Line} from 'react-chartjs-2';
import Card from 'react-bootstrap/Card'
import '../index.css';

class ChartClass extends React.Component {
    constructor(props) {
        super(props);

        this.dailyLabels = props.dailyLabels;
        this.weeklyLabels = props.weeklyLabels;
        this.monthlyLabels = props.monthlyLabels;
        this.handleDurationChange = this.handleDurationChange.bind(this);

        this.state= {
            durationArr: ['Monthly', 'Weekly', 'Daily'],    
            data: {
                labels: this.monthlyLabels,
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
        let currentDur = event.target.value;
        let currentDurationArr = [];
        if(currentDur === 'Daily') {
            currentDurationArr = this.dailyLabels;
        }
        else if(currentDur === 'Weekly') {
            currentDurationArr = this.weeklyLabels;
        }
        else if(currentDur === 'Monthly') {
            currentDurationArr = this.monthlyLabels;
        }
        this.setState((prevState, props) => {
            prevState.data.labels = currentDurationArr; 
            return prevState;
        });
    }
    render() {
        return (
            <Card border='primary' style={this.props.style}>
                <Card.Body>
                    <Card.Title style = {{height: '12%'}}>
                        <SelectBox durationArr = {this.state.durationArr} handleChange = {this.handleDurationChange} />
                        <Title dataset = {this.state.data.datasets[0]} />
                        <Title dataset = {this.state.data.datasets[1]} />
                    </Card.Title>
                    <div className="chart-container" style={{position: 'relative', height: '85%', maxHeight: '300px'}}>
                        <Line data = {this.state.data} options = {this.state.options} />
                    </div>
                </Card.Body>
            </Card>
        );
    }
}

function Title(props) { 
    let circleStyle = {
        display: 'inline-block',
        width: '10px',
        height: '10px',
        borderRadius: "50%",
        backgroundColor: props.dataset.borderColor,
    };
    let headingStyle = {
        width: '60%',
        float: 'left',
        marginLeft: '5%',
        fontSize: '1.1rem',
    };

    return (
        <div style = {headingStyle}>{props.dataset.label}   <span style = {circleStyle}></span> Session </div>            
    );
}
function SelectBox(props) {
    var options = props.durationArr.map((item, index) => {
        return <option key = {index} value = {item} >{item}</option>
    });
    let selectBoxStyle = {
        float: 'right',
        position: 'relative',
        marginRight: '10px',
    };
    return (
        <select style = {selectBoxStyle} onChange = {props.handleChange} >
            {options}
        </select>
        );
}

export default ChartClass;