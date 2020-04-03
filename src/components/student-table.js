import React, { Component } from 'react'
import StudentRow from './student-row';

export class StudentTable extends Component{
    // REQUIREMENT: The student(s) with the top GPA will have their row(s) highlighted green and the student with the lowest GPA will have their row(s) highlighted red.
    getStyle = (student) => {
        if(this.props.minMax.min.indexOf(student) !== -1){
            return {backgroundColor: "#f58a8a"}
        }
        else if(this.props.minMax.max.indexOf(student) !== -1){
            return {backgroundColor: "lightgreen"}
        }
    }
    render(){
        return (
            <table align="center">
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Math</th>
                        <th>History</th>
                        <th>English</th>
                        <th>Science</th>
                        <th>GPA</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.students.map((student) => (
                            <StudentRow 
                            student={student}
                            key={JSON.stringify(student)}
                            minMax={this.props.minMax}
                            getStyle={this.getStyle}
                            removeStudent={this.props.removeStudent}/>
                    ))}                    
                </tbody>         
            </table>
        )
    }
}

export default StudentTable;