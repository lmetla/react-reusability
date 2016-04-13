import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Internetusage from './components/data-usage/Internetusage.jsx';
import Talktimeusage from './components/data-usage/Talktimeusage.jsx';

class App extends React.Component {
  render () {
    return (
      <div className ="row">
         <div className ="container well">
           <h3> Customer mobile phone usage </h3>
           <Internetusage />
           <Talktimeusage />
         </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
