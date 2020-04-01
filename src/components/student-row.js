import React, { Component } from 'react';

export class StudentRow extends Component{

    onClick = (e) => {
        this.props.removeStudent(this.props.student); 
    }

    render(){
        return  <tr>
                    <td>{this.props.student.name}</td>
                    {Object.values(this.props.student.grades).map((value)=>{
                    return <td>{value}</td>
                })}
                    <td>{this.props.student.gpa}</td>
                    <td><button onClick={this.onClick} value="X"></button></td>
                </tr>
    }
}

export default StudentRow;