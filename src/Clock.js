import React , {Component} from 'react';
class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {
          date: new Date(),
          data: "hoho"
        };
    }
    handleClick() {
        this.setState({
            data: "fofo"
        })
        console.log(this.state);
  }
    componentDidMount() {
        console.log(this.state);
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          <button onClick={() => this.handleClick()}>
              Click me
          </button>
        </div>
      );
    }
}
export default Clock;
