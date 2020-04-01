import React, { Component } from 'react'
import './App.css';
import StudentTable from './components/student-table';
import StudentData from './students.json';
import AddStudent from './components/add-student';

class App extends Component{
  constructor(props) {
    super(props);
    this.state={
      students: [],
    }
  }

  componentDidMount(){
    // TODO: ASSIGN KEYS //
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
    console.log(studentsParsed);
    this.setState({students: studentsParsed});
  }

  //method for extracting student grades from original json
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
    const gradeValues = {"A":4, "B":3, "C":2, "D":1, "F":0};
    var sum = 0;
    for(let i = 0; i < Object.keys(gradesObject).length; i++){
      sum += gradeValues[Object.values(gradesObject)[i]];
    }
    return sum/Object.keys(gradesObject).length;
  }

  addStudent = (newStudent) => {
    var newGrades = {...newStudent};
    delete newGrades['name'];
    this.setState({students: [...this.state.students, {
      name: newStudent.name, 
      grades: newGrades, 
      gpa: this.calculateGPA(newGrades)
    }]});
  }

  removeStudent = (student) => {
    this.setState({
      students: this.state.students.filter((value) =>{
        return value !== student;
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <AddStudent addStudent={this.addStudent} />
        <StudentTable students={this.state.students} removeStudent={this.removeStudent} />
      </React.Fragment>
    );
  }
}

export default App;
