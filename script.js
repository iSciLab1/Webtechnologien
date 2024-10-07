/* -----------------------------------------------------------------------------#
# Program Name:       [script.js]                                               #
# Author:             J. Imani - iSciLab                                        #
# Description:        A collection of experiments and personal trials in coding.#
# ------------------------------------------------------------------------------#
*/
// Function to display an interactive alert message
function displayMessage() {
    alert("Hello, this is an interactive message!"); 
}

// Definition of the Person class
class Person {
    constructor(name, age) {
        this.name = name; 
        this.age = age;   
    }

    // Method to get a description of the person
    getDescription() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

// Definition of the Student class, which extends the Person class
class Student extends Person {
    constructor(name, age, studentID) {
        super(name, age); 
        this.studentID = studentID; 
    }

    // Overriding the getDescription method to include the student ID
    getDescription() {
        return `${super.getDescription()}, Student ID: ${this.studentID}`; 
    }
}

// Creating an instance of the Person class
const person = new Person("J. Imani", 30); 
// Creating an instance of the Student class
const student = new Student("J. Imani", 30, "S12345");
// HTML elements for displaying the information
document.getElementById("person-info").innerHTML = `<p>${person.getDescription()}</p>`; 
document.getElementById("student-info").innerHTML = `<p>${student.getDescription()}</p>`; 