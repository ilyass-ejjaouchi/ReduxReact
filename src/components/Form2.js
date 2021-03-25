import React, { Component } from "react";
import { connect } from "react-redux";
import {addArticle, findImage} from "../actions/index";

function mapDispatchToProps(dispatch) {
    return {
        findImage:  image => dispatch(findImage(image))
    };
}

class ConnectedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    fetchData(key){
    const url = 'https://pixabay.com/api/?key=18739075-8840b55cd2f755b50c01e67ae&q='+key;
    fetch(url)
        .then((resp) => {
            console.log(resp);
            const { key } = this.state;
            this.props.findImage({ resp});
            this.setState({ data: null });})
        .catch((error) => {})
            }
    handleSubmit(event) {
        event.preventDefault();
        const { key } = this.state;
        this.fetchData(key);
    }
    render() {
        const { data } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="data">data</label>
                    <input
                        type="text"
                        id="data"
                        value={data}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit">find image</button>
            </form>
        );
    }
}

const Form2 = connect(
    null,
    mapDispatchToProps
)(ConnectedForm);

export default Form2;