import React, {Component} from 'react';
import moment from "moment";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date()};
  }

  componentDidMount() {
    this.tick();
    this.interval = setInterval(this.tick.bind(this), 200);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({time: new Date()});
  }

  render() {
    const time = this.state.time;
    const timeString = time && moment(time).format('h:mm:ssa');

    return (<div>
      <h1>Sample Application</h1>
      <p>current time is {timeString}</p>
    </div>);
  }

}

export default App;
