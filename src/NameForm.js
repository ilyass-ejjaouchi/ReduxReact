import React , {Component} from 'react';
class NameForm extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
        let temp = null;
        if (this.state.value > 100) temp = "very hot";
        else temp = "very cold";
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="number" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
          <h1>{temp}</h1>
        </form>
      );
    }
  }
  export default NameForm;