const eventListeners = () => {};

const printToDom = (divId, text) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = text;
};



// hogwartsHouses = ['a', 'b', 'c', 'd'];
// housedStudents= [];


// const newStudentBuilder = () => {
//     // const studentName = document.getElementById("studentNameInput").value;
//     const studentName = 'name';
//     const assignedHouse = hogwartsHouses[Math.floor(Math.random()*hogwartsHouses.length)];
//     const studentObject = {name: '', house: 0};
//     studentObject.name = studentName;
//     studentObject.house = assignedHouse;
//     housedStudents.push(studentObject);
//     printtodom(div, student object)
// };

// newStudentBuilder();