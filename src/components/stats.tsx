import React from 'react'
import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, LineMarkSeries, VerticalGridLines } from 'react-vis'
import { Card, CardContent, CardDescription, Divider }  from 'semantic-ui-react'
import '../../node_modules/react-vis/dist/style.css';

const UserCard: React.FC = () => { //mockup of user stats height, weight TDEE, caloric trend etc
    //potentially add a graph here of like calories consumed per day
    //
    const data= [
        {x:1, y:1800},
        {x:2, y:1700},
        {x:3, y:1600},
        {x:4, y:1900},
        {x:5, y:2100},
        {x:6, y:1500},
        {x:7, y:2500},
    ]
    return (
        <Card>
            <Card.Header>
                Welcome, firstName lastName!
            </Card.Header>
            <CardContent>
                Current weight: 180 <br/>
                Goal weight: 160
            </CardContent>
            <CardDescription>
                TDEE: 1800 calories <br/>
                Average Calories consumed this week: 1826
            </CardDescription> 
            <Divider></Divider>
            <CardContent>
            <XYPlot             
            height={300} 
            width={300}
            style={{fill: 'none'}}
            color='red'
            title='Calories consumed over the last 7 days'>
            
                <VerticalGridLines/>
                <HorizontalGridLines/>
                <XAxis title='Last 7 Days'/>
                <YAxis title='Calories consumed'/>
                <LineSeries data={data}/>
            </XYPlot> 

            </CardContent>




        </Card>
    )
}

export default UserCard