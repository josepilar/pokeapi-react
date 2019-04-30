import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
// import {axiosGet} from './helpers/axions.helper';
import {Sidebar, Menu, Icon} from 'semantic-ui-react';

function App() {
  // axiosGet('pokemon');
  return (
    <div className="App">
      <Sidebar as={Menu} vertical={true} inverted={true} visible width='thin'>
        <Menu.Item>
          <Icon name='home'></Icon>
          PERRO
        </Menu.Item>
      </Sidebar>
    </div>
  );
}

export default App;
