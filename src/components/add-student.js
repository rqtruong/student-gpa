import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddStudent extends Component{
    state = {
        name: '', Math: '', History: '', English: '', Science: '',
    }

    onSubmit = (e) => {
        e.preventDefault();  
        this.props.addStudent(this.state);
        // this.setState({name: '', grades: []}) 
    }

    onChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value});
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required={true}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    name="Math"
                    placeholder="Math"
                    required={true}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    name="History"
                    placeholder="History"
                    required={true}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    name="English"
                    placeholder="English"
                    required={true}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    name="Science"
                    placeholder="Science"
                    required={true}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="Add Student"
                    className="btn" 
                />
            </form>
        )
    }
}

export default AddStudent;