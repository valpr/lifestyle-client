import React from 'react'

import {Card} from 'semantic-ui-react'

const Entry: React.FC = () => {

    return (
    <Card>
        <Card.Content>
            <Card.Header>Fried Chicken</Card.Header>
            <Card.Meta>900 calories</Card.Meta>
            <Card.Description>October 29, 2019</Card.Description>
            <Card.Content extra>5:00PM</Card.Content>
        </Card.Content>
    </Card>
    
        )
}

export default Entry