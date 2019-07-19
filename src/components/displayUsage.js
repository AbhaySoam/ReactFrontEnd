import React from 'react';
import {Card} from 'react-bootstrap';
import EnrolledActiveUsersCard from './EnrolledActiveUsersCard';
import {Pie} from 'react-chartjs-2';
import '../index.css';

class DisplayUsage extends React.Component {
    constructor() {
        super()
        this.state = {
            // durationArr: ['Monthly', 'Weekly', 'Daily'],
            data: {
                labels: ['Chrome', 'Opera'],
                datasets: [{
                    // label: " opera chrome  ",
                    borderColor: "orange",
                    data: [2000, 3000],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ],
                    lineTension: 0,
                    fill: false,
                    lineWidth: 4,
                    pointRadius: 4,
                    pointBackgroundColor: "orange",
                }, ]
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

    render() {
        return (
        <div style = {this.props.style}>
            
            <BrowserUsageCard heading="BROWSER USAGE" chartdata = { this.state.data } options = { this.state.options }
                border = "primary" textColor = "primary" / >
            <EnrolledActiveUsersCard border="danger" textColor="danger" 
                headings={["ENROLLED USERS", "ACTIVE USERS"]} 
                enrolledUsersUrl={"enrolledUsers.json"}
                activeUsersUrl={"activeUsers.json"} />
        </div>
        );
    }
}

function BrowserUsageCard(props) {

    return (
        <Card border = {props.border} text = {props.textColor} 
        style={{marginBottom: '10px', height: '47%', borderRadius: 0, fontSize: 'small'}}>
            <Card.Body>
            <h6>{props.heading} </h6>
                {/* <ul>
                    {list}
                </ul> */}
                <div style={{position: 'relative', height: '80%', maxHeight: '100px'}} >
                    <Pie data={props.chartdata} options={props.options} />
                </div>
        
        </Card.Body>
        </Card>
    );
} 

export default DisplayUsage;