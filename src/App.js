import React from 'react';
import './App.css';
import {Sidebar, Menu, Icon, Container} from 'semantic-ui-react';
import {Route, Link} from 'react-router-dom';
import About from './components/about/about';
import ThingList from './components/list.component';

function App() {
  return (
    <div className="App">
      <Sidebar as={Menu} vertical={true} inverted={true} visible width='thin'>
        <Menu.Item as={Link} to="/">
          <Icon name='home'></Icon>
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/pokemon">
          <Icon name='user'></Icon>
          Pokemon
        </Menu.Item>
        <Menu.Item as={Link} to="/types">
          <Icon name='user'></Icon>
          Types
        </Menu.Item>
      </Sidebar>
      <Container>
        <Route path="/pokemon" exact render={props => <ThingList {...props} url="pokemon"></ThingList>}></Route>
        <Route path="/types" exact render={props => <ThingList {...props} url="type"></ThingList>}></Route>
        <Route path="/" exact component={About}></Route>
      </Container>
    </div>
  );
}

export default App;
