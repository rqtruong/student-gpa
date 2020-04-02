import React, { Component } from 'react';

export class StudentRow extends Component{

    onClick = (e) => {
        this.props.removeStudent(this.props.student); 
    }

    render(){
        return  <tr style={this.props.getStyle(this.props.student)}>
                    <td>{this.props.student.name}</td>
                    {Object.values(this.props.student.grades).map((value)=>{
                    return <td>{value}</td>
                })}
                    <td>{(Math.round(this.props.student.gpa*100)/100).toFixed(2)}</td>
                    <td><button onClick={this.onClick}>X</button></td>
                </tr>
    }
}

export default StudentRow;