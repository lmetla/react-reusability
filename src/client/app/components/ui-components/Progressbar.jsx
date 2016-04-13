import React, {PropTypes} from 'react';
import {render} from 'react-dom';

const propTypes = {
  id: PropTypes.number,
  percent: PropTypes.number
};

class Progressbar extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="container">
          <div
            className="progress"
            ref={this.props.id}
            id={this.props.id}>
            <div
              className="progress-bar progress-bar-success active"
              role="progressbar"
              aria-valuenow= {this.props.percent}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{width: this.props.percent +"%"}}>
              <span>{this.props.percent}% used</span>
            </div>
         </div>
        </div>
      </div>
    );
  }
}

Progressbar.propTypes = propTypes;

export default Progressbar;
