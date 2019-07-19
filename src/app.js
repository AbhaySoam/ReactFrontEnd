import React from 'react';
import './index.css';
import ChartClass from './components/chartCard';
import DisplayUsage from './components/displayUsage';
import DisplayTables from './components/displayTables';
//const API_URL = './jsonFiles';


//=================================
class App extends React.Component {

    render() {
        return(
            <div>
                <div style= {{height: '410px', marginTop: '10px'}} >
                <ChartClass 
                dailyLabels = {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} 
                weeklyLabels = {['1 Sep', '8 Sep', '15 Sep', '22 Sep', '29 Sep', '7 Oct', '14 Oct', '21 Oct', '28 Oct', '6 Nov']} 
                monthlyLabels = {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']}
                orangeLineData = {[2, 3, 5, 7, 6, 13, 17, 5, 23, 16]}
                blueLineData = {[0, 10, 1, 8, 3, 5, 18, 13, 10, 34]}
                style = {{width: '75%', height: '400px', float: 'left', marginLeft: '2%', borderRadius: 0,}}
                />
                <DisplayUsage style= {{width: '20%', height: '100%', float: 'right', marginRight: '2%', borderRadius: 0,}} />
                </div>
                <div>
                <DisplayTables />
                </div>
            </div>
        );
    }
}

export default App;