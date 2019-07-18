import React from 'react';
import StatusModalTable from './statusModalTable';
import ActivityModalTable from './activityModalTable';
import '../index.css';

class DisplayTables extends React.Component {
    render() {
        return (
            <div style = {{height: '180px'}}>
                <ActivityModalTable url={"enrolledUsers.json"} title="Trusted Users" 
                    style={{margin: '10px', width: '15%', float: 'left', borderRadius: 0, fontSize: '0.9em', height: '100%'}} />
                <ActivityModalTable url={"clientApplicationUsage.json"} title="Client Application Usage" 
                    style={{margin: '10px', width: '15%', float: 'left', borderRadius: 0, fontSize: '0.9em', height: '100%'}} />
                <ActivityModalTable url={"suspiciousIPs.json"} title="Suspicious IPs" 
                    style={{margin: '10px', width: '15%', float: 'left', borderRadius: 0, fontSize: '0.9em', height: '100%'}} />
                <ActivityModalTable url={"activeUsers.json"} title="Suspicious Users" 
                    style={{margin: '10px', width: '15%', float: 'left', borderRadius: 0, fontSize: '0.9em', height: '100%'}} />
                
                <StatusModalTable url={"accessDescriptions.json"}
                style={{margin: '10px', width: '30%', float: 'right', borderRadius: 0, fontSize: 'small', height: '100%'}} />
 
            </div>
        );
    }
}
export default DisplayTables;