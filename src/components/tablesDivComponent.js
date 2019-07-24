import React from 'react';
import TrustedUsersTable from './trustedUsersCard';
import ClientApplicationUsageTable from './clientApplicationUsageCard';
import SuspiciousIPsTable from './suspiciousIPsCard';
import SuspiciousUsersTable from './suspiciousUsersCard';
import '../App.css';

class TablesDivComponent extends React.Component {
    //returns a div containing four(Trusted Users, Cliet Application Usage, Suspicious IPs, Suspicious Users) tables.

    render() {
        const tableCompCardStyle = {marginLeft: '1%', width: '24%', float: 'left', borderRadius: 0, fontSize: '0.9em', height: '100%'};
        return (
            <div style = {{height: '180px', margin: '10px'}}>
                <TrustedUsersTable url={"trustedUsers.json"} title="Trusted Users" 
                    style={tableCompCardStyle} />
                <ClientApplicationUsageTable url={"clientApplicationUsage.json"} title="Client Application Usage" 
                    style={tableCompCardStyle} />
                <SuspiciousIPsTable url={"suspiciousIPs.json"} title="Suspicious IPs" 
                    style={tableCompCardStyle} />
                <SuspiciousUsersTable url={"suspiciousUsers.json"} title="Suspicious Users" 
                    style={tableCompCardStyle} />
                
            </div>
        );
    }
}
export default TablesDivComponent;