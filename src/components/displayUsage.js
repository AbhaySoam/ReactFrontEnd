import React from 'react';
import {Card, Media, Image} from 'react-bootstrap';
import '../index.css';

class DisplayUsage extends React.Component {
    render() {
        return (
        <div style = {this.props.style}>
            <UsageCard heading="BROWSER USAGE" listItems={['Chrome', 'Opera']} border="primary" textColor="primary"/>
            <UsageCard heading="ENROLLED USERS" listItems={[3515315]} border="danger" textColor="danger" />
            <UsageCard heading="FREQUENT LOGIN TIME" listItems={['0.1 sec']} border="success" textColor="success" />
        </div>
        );
    }
}

function UsageCard(props) {
    var list = props.listItems.map((item, index) => {
        return <li key={index} style={{listStyleType: 'square' }}><span style={{color: 'black'}}>{item}</span></li>
    });

    return (
        <Card border = {props.border} text = {props.textColor} style={{marginBottom: '10px', height: '30%', borderRadius: 0, fontSize: 'small'}}>
            <Card.Body>
        <Media>
            <Image
                roundedCircle
                width="40px"
                height="40px"
                className="mr-3"
                src="./landscape.png"
                style={{marginTop: '5%'}}
            />
            <Media.Body>
                <h6>{props.heading} </h6>
                <ul>
                    {list}
                </ul>
            </Media.Body>
        </Media>
        </Card.Body>
        </Card>
    );
} 

export default DisplayUsage;