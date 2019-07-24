import React from 'react';
import {Card} from 'react-bootstrap';
import axios from 'axios';
import '../index.css';

class EnrolledActiveUsersCard extends React.Component {
    constructor(props) {
        super(props);

        this.cardTitles=["ENROLLED USERS", "ACTIVE USERS"];
        
        this.state = {
            enrolledUsersData: [{}],
            activeUsersData: [{}],
        };
    }

    componentDidMount() {
            //const url = `${API_URL}/activeUsers`;
            const enrolledUsersUrl = "enrolledUsers.json";
            const activeUsersUrl = "activeUsers.json";
            
            axios.get(enrolledUsersUrl).then(response => {
                this.setState({enrolledUsersData: response.data})
            })
            .catch(err => {
                console.log(err);
            });
            axios.get(activeUsersUrl).then(response => {
                this.setState({activeUsersData: response.data})
            })
            .catch(err => {
                console.log(err);
            });
        }

    render() {
        return (
            <Card border = {this.props.border} text = {this.props.textColor} 
            style={{marginBottom: '10px', height: '47%', borderRadius: 0, fontSize: 'small'}}>
                <Card.Body>
                    <h6>{this.cardTitles[0]} </h6>
                    <ul>
                        <li style={{listStyleType: 'square' }}>
                            <span style={{color: 'black'}}>
                            {this.state.enrolledUsersData[0].enrolledUsers} 
                            </span>
                        </li>
                    </ul>
                    <h6>{this.cardTitles[1]} </h6>
                    <ul>
                        <li style={{listStyleType: 'square' }}>
                            <span style={{color: 'black'}}> 
                                {this.state.activeUsersData[0].activeUsers}
                            </span>
                        </li>
                    </ul>
            </Card.Body>
            </Card>
        );
    }
}

export default EnrolledActiveUsersCard;