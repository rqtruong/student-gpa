import React, { Component } from 'react';
import StudentData from './students.json';
import StudentTable from './components/student-table';
import AddStudent from './components/add-student';

class App extends Component{
  constructor(props) {
    super(props);
    this.state={
      students: [],
      minMax: {},
    }
  }

  componentDidMount(){
    // REQUIREMENT: Uses provided json file as initial data.
    // Get array of objects from json
    let studentsRaw = [...StudentData.data];
    // Get only the necessary info (name, grades, gpa)
    var studentsParsed = studentsRaw.map((student) => {
      return {
        name: student.name,
        grades: this.getGrades(student.grades),     
        gpa: this.calculateGPA(this.getGrades(student.grades)),
      }
    });
    this.setState({students: studentsParsed, minMax: this.findMinMax(studentsParsed)});
  }

  // method for extracting student grades from original json
  getGrades = (gradesArray) => {
    var obj = {};
    for(let i = 0; i < gradesArray.length; i++){
      var subject = gradesArray[i].substring(0, gradesArray[i].indexOf(' -'));
      var grade = gradesArray[i].slice(-1);
      obj[subject] = grade;
    }
   return obj;
  }

  calculateGPA = (gradesObject) => {
    const gradeValues = {"A+":4.00, "A":4.00, "A-":3.67, "B+":3.33, "B":3.00, "B-":2.67, "C+":2.33, "C":2, "C-":1.67, "D+":1.33, "D":1, "D-":0.67, "F":0};
    var sum = 0;
    //take the average of all the grades
    for(let i = 0; i < Object.keys(gradesObject).length; i++){
      sum += gradeValues[Object.values(gradesObject)[i]];
    }
    return sum/Object.keys(gradesObject).length;
  }

  addStudent = (newStudent) => {
    var newGrades = {...newStudent};
    delete newGrades['name'];
    var updatedStudents = [...this.state.students, {
      name: newStudent.name, 
      grades: newGrades, 
      gpa: this.calculateGPA(newGrades)
    }]
    this.setState({
      students: updatedStudents, 
      minMax: this.findMinMax(updatedStudents)},);
  }

  removeStudent = (student) => {
    var updatedStudents = this.state.students.filter((value) =>{
      return value !== student;
    })
    this.setState({
      students: updatedStudents,
      minMax: this.findMinMax(updatedStudents)
    })
  }

  // REQUIREMENT: If a student is added with the highest or lowest GPA, the table will correctly highlight the student or students.
  // This function will be called when a student is added or removed.
  findMinMax = (studentArr) => {
    var gpas = studentArr.map((student) => {
      return student.gpa;
    });
    var minStudents = studentArr.filter(student => student.gpa === Math.min(...gpas));
    var maxStudents = studentArr.filter(student => student.gpa === Math.max(...gpas));
    return {
      min: minStudents,
      max: maxStudents
    }
  }

  render() {
    return (
      <React.Fragment>
        <AddStudent addStudent={this.addStudent} />
        <StudentTable
        students={this.state.students}
        minMax={this.state.minMax}
        findMinMax={this.findMinMax}
        removeStudent={this.removeStudent}
        />
      </React.Fragment>
    );
  }
}

export default App;
