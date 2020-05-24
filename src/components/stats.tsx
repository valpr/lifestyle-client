import React from 'react'
import { Card, CardContent, CardDescription, Divider }  from 'semantic-ui-react'
import '../../node_modules/react-vis/dist/style.css';
import { useQuery} from '@apollo/client'
import { user, Gender } from '../types'
import { GET_SELF } from '../queries/queries'

interface userDetails {
    myUser: user
}

const UserCard: React.FC = () => {


    const {loading, data} = useQuery<userDetails>(GET_SELF)

    if (loading){
        return <div>...loading</div>
    }
    if (!data ){//mockup

        return (
            <Card>
                <Card.Header>
                    Welcome, Guest Mockup!
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
                </CardContent>
    
    
    
    
            </Card>
        )
    }
    else{
        let personal = data.myUser
        let recentWeight = personal.weights[personal.weights.length-1].weight

        let BMR: number = recentWeight/2.2046*10+ 6.25*personal.height -5.00*23
        if (personal.gender === Gender.Male){
            BMR = BMR + 5
        }
        else{
            BMR = BMR -161
        }
        let TDEE = personal.objective * personal.effort * BMR

        return (
            <Card>
                <Card.Header>
        Welcome, {personal.firstname} {personal.lastname}!
                </Card.Header>
                <CardContent>
                    Weight: {personal.weights[personal.weights.length-1].weight} <br/>
                    Height: {personal.height}  <br/>
                    Objective modifier: {personal.objective}  <br/>
                    Activity Level modifier: {personal.effort}  <br/>
                </CardContent>
                <CardContent>
                    Calculated TDEE: {Math.round(TDEE)}
                </CardContent>
                <CardDescription>
                    TDEE is calculated as a function of BMR * Objective * Effort
                </CardDescription> 
                <Divider></Divider>
                <CardContent>
    
                </CardContent>
    
    
    
    
            </Card>
        )
    }
}

export default UserCard