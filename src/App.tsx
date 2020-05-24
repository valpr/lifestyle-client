import React from 'react';
import LoginModal from './components/login'
import { Container, Header, Menu } from 'semantic-ui-react'
import  Entry  from './components/entry'
import UserStats from './components/stats'
import { useQuery } from '@apollo/client'
import { ALL_USER_TEST } from './queries/queries'



const App: React.FC = () => {
  const simple = useQuery(ALL_USER_TEST)

  //1. Get User details from server if authenticated
  //2. display entries
  if (simple.loading){
    return <div>...loading</div>
  }
  else{
    console.log(simple.data)
  }
  return (
    <div className="App">
      <Container style={{marginTop: '3em'}}>
      <Header as='h2' dividing>
      Menu
    </Header>
    <Menu
          items={[
            { key: '1', name: 'entries', content: 'Entries' },
            { key: '2', name: 'stats', content: 'Stats/Trends' },
            { key: '3', name: 'resources', content: 'Resources' },
          ]}
          pointing
          secondary
        />
        <LoginModal/>
          <UserStats/>
        <Entry/>
      </Container>

    </div>
  );
}

export default App;
