import React , {Component} from 'react';
class Greeting extends Component {
  
    render() {
      if (this.props.isLoggedIn) {
        return <h1>hello back</h1>
      }
      return <h1>hello guest</h1>
    }
}
export default Greeting;
