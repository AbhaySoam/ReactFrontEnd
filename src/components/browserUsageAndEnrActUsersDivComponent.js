import React from 'react';
import EnrolledActiveUsersCard from './enrolledActiveUsersCard';
import BrowserUsageCard from './browserUsageCard';

class BrowserUsageAndEnrActUsersDivComponent extends React.Component {
    // return a div containing browser usage card and enrolled/active users card.

    render() {
        return (
        <div style= {{width: '20%', height: '100%', float: 'right', marginRight: '2%', borderRadius: 0,}} >
            
            <BrowserUsageCard cardTitle="BROWSER USAGE" 
                borderColor = "primary" textColor = "primary" / >
            <EnrolledActiveUsersCard border="danger" textColor="danger" />
        </div>
        );
    }
} 

export default BrowserUsageAndEnrActUsersDivComponent;