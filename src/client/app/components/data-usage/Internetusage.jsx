import React from 'react';
import {render} from 'react-dom';
import Progressbar from '.././ui-components/Progressbar.jsx';

class Internetusage extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({percent: 0, id: 0});
  }

  componentDidMount() {
    // Initialize the data usage for talk time
    //Lets cnsider customer used 50% of internet data.
    var data = {   id: 1, percent: 30 };
    this.setState({percent: data.percent,id: data.id});
  }

  render() {
    return (
      <div>
        <h3> Internet Usage </h3>
        <Progressbar
        percent={this.state.percent}
        id={this.state.id}
        key={this.state.id}
        />
      </div>
    );
  }
}
export default Internetusage;
