import React from 'react';
import LoginModal from './components/login'
import { Container, Header, Menu } from 'semantic-ui-react'
import  Entry  from './components/entry'

const App: React.FC = () => {
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

        <Entry/>
      </Container>

    </div>
  );
}

export default App;
