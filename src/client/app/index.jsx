import React from 'react';
import {render} from 'react-dom';
import MyFirstComponent from './MyFirstComponent.jsx';
import './../styles/app.scss'
class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
        <MyFirstComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));