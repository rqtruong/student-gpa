import React, { Component } from 'react'
import StudentRow from './student-row';

export class StudentTable extends Component{
    render(){
        return (
            <table>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Math</th>
                        <th>History</th>
                        <th>English</th>
                        <th>Science</th>
                        <th>GPA</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.students.map((student) => (
                            <StudentRow student={student} removeStudent={this.props.removeStudent}/>
                    ))}                    
                </tbody>         
            </table>
        )
    }
}

export default StudentTable;