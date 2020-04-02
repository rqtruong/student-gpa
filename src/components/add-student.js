import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddStudent extends Component{
    state = {
        name: '', Math: '', History: '', English: '', Science: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        //validate name input
        if(!(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(this.state.name))){
            alert("Please enter a valid name");
        }
        //validate grades input
        else if(
            [this.state.Math, this.state.History, this.state.English, this.state.Science].filter((value) => 
                {return !(/^[A-F]{1}[+-]{0,1}$/.test(value))}).length !== 0
            ){
            alert("Please enter valid grade values");
        }
        else{
            this.props.addStudent(this.state);
            this.setState({name: '', Math: '', History: '', English: '', Science: ''}) 
        }
    }

    onChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value});
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <input type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    required={true}
                    onChange={this.onChange}
                />
                <fieldset id="grades">
                    <input type="text" maxlength="2"
                        name="Math"
                        placeholder="Math"
                        value={this.state.Math}
                        required={true}
                        onChange={this.onChange}
                    />
                    <input type="text" maxlength="2"
                        name="History"
                        placeholder="History"
                        value={this.state.History}
                        required={true}
                        onChange={this.onChange}
                    />
                    <input type="text" maxlength="2"
                        name="English"
                        placeholder="English"
                        value={this.state.English}
                        required={true}
                        onChange={this.onChange}
                    />
                    <input type="text" maxlength="2"
                        name="Science"
                        placeholder="Science"
                        value={this.state.Science}
                        required={true}
                        onChange={this.onChange}
                    />
                </fieldset>
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