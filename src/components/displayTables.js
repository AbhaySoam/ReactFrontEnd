import React from 'react';
import ActivityModalTable from './activityModalTable';
import '../index.css';

class DisplayTables extends React.Component {
    render() {
        const tableCompCardStyle = {marginLeft: '1%', width: '24%', float: 'left', borderRadius: 0, fontSize: '0.9em', height: '100%'};
        return (
            <div style = {{height: '180px', margin: '10px'}}>
                <ActivityModalTable url={"trustedUsers.json"} title="Trusted Users" 
                    style={tableCompCardStyle} />
                <ActivityModalTable url={"clientApplicationUsage.json"} title="Client Application Usage" 
                    style={tableCompCardStyle} />
                <ActivityModalTable url={"suspiciousIPs.json"} title="Suspicious IPs" 
                    style={tableCompCardStyle} />
                <ActivityModalTable url={"suspiciousUsers.json"} title="Suspicious Users" 
                    style={tableCompCardStyle} />
                
            </div>
        );
    }
}
export default DisplayTables;