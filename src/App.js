import React from 'react';
import './App.css';
import {Sidebar, Menu, Icon, Container} from 'semantic-ui-react';
import {Route, Link} from 'react-router-dom';
import About from './components/about/about';
import ThingList from './components/list.component';
import PokemonDetail from './components/pokemon/pokemon.detail';

function App() {
  return (
    <Container className="App">
      <Sidebar as={Menu} vertical={true} inverted={true} visible width='wide'>
        <Menu.Item as={Link} to="/">
          <Icon name='home'></Icon>
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/pokemon">
          <Icon name='user'></Icon>
          Pokemon
        </Menu.Item>
        <Menu.Item as={Link} to="/type">
          <Icon name='user'></Icon>
          Types
        </Menu.Item>
      </Sidebar>
      <Container className="mainContainer">
        <Route path="/pokemon" exact render={props => <ThingList {...props} url="pokemon" title="Pokemon"></ThingList>}></Route>
        <Route path="/pokemon/:name" exact component={PokemonDetail}></Route>
        <Route path="/type" exact render={props => <ThingList {...props} url="type" title="Types"></ThingList>}></Route>
        <Route path="/" exact component={About}></Route>
      </Container>
    </Container>
  );
}

export default App;
