const houses = [
    {
        name: 'Gryffindor',
        img: './imgs/g.png',
        members: 'Harry Potter, Hermione Granger and Ron Weasley.',
        q: `‘You might belong in Gryffindor,<br>
         Where dwell the brave at heart,<br>
         Their daring, nerve and chivalry<br>
         Set Gryffindors apart.’`,
         moreInfo: 'https://www.pottermore.com/collection/all-about-gryffindor',
         color: 'redC'
    },
    {
        name: 'Hufflepuff',
        img: './imgs/h.png',
        members: 'Newt Scamander, Cedric Diggory and Nymphadora Tonks.',
        q: `‘You might belong in Hufflepuff<br>
        Where they are just and loyal<br>
        Those patient Hufflepuffs are true<br>
        And unafraid of toil.’`,
        moreInfo: 'https://www.pottermore.com/collection/all-about-hufflepuff',
        color: 'yellowC'
    },
    {
        name: 'Ravenclaw',
        img: './imgs/r.png',
        members: 'Luna Lovegood, Gilderoy Lockhart and Filius Flitwick.',
        q: `‘Or yet in wise old Ravenclaw<br>
        If you’ve a ready mind<br>
        Where those of wit and learning<br>
        Will always find their kind.’`,
        moreInfo: 'https://www.pottermore.com/collection/all-about-ravenclaw',
        color: 'blueC'
    },
    {
        name: 'Slytherin',
        img: './imgs/s.png',
        members: 'Severus Snape, Draco Malfoy and Lord Voldemort.',
        q: `‘Or perhaps in Slytherin<br>
        You’ll make your real friends<br>
        Those cunning folk use any means<br>
        To achieve their ends.’`,
        moreInfo: 'https://www.pottermore.com/collection/all-about-slytherin',
        color: 'greenC'
    }
];
const studentArray = [];
let studentCount = 1;
const inputName = document.getElementById('nameForm');

const init = () =>{
    eventListeners();
};

const printToDom = (divId, text) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = text;
};

const eventListeners = () => {
    const startBtn = document.getElementById('startBtn');
    const formDiv = document.getElementById('formDiv');
    const sortBtn = document.getElementById('sortBtn');
    startBtn.addEventListener('click', ()=>{
        formDiv.style.visibility = 'visible';
    });
    sortBtn.addEventListener('click', sortingHat);
};

const cardBuilder = (arrayToPrint) => {
    let cardString = '';
    arrayToPrint.forEach((student) =>{
        cardString += `<div class="card ${student.hColor}" id="studentCard">
                <h2>${student.name}</h2>
                <h4>${student.hName}</h4>
                <img src="${student.hImg}" class="card-img-top" alt="...">
                <div class="card-body">
                    <a href="${student.hInfo}">Learn more about ${student.hName}</a>
                    <br><br>
                    <h6>Notable Members:</h6>
                    <p class="card-text">${student.hMembers}</p>
                    <p class="card-text q-text">${student.hQ}</p>
                    <a class="expelBtn btn btn-primary btn-sm" id="${student.id}" role="button">Expel</a>
                </div>
            </div>`;
    });
    printToDom('cardCon', cardString);
    addExpelEvents();
    inputName.value=null;
};

const sortingHat = (e) => {
    e.preventDefault();
    const studentHouse = houses[Math.floor(Math.random() * houses.length)];
    const studentName = inputName.value;
    const newStudent = {
        name: studentName,
        id: `student${studentCount}`,
        hName: studentHouse.name,
        hImg: studentHouse.img,
        hMembers: studentHouse.members,
        hQ: studentHouse.q,
        hInfo: studentHouse.moreInfo,
        hColor: studentHouse.color
    };
    studentArray.unshift(newStudent);
    studentCount++;
    cardBuilder(studentArray);
};


const expelStudent = (e) => {
    const buttonId = e.target.id;
    studentArray.forEach((student, index) => {
        if(student.id === buttonId){
            studentArray.splice(index, 1);
        };
    });
    cardBuilder(studentArray);
    addExpelEvents();
};

const addExpelEvents = () =>{
    const expelBtn = document.getElementsByClassName('expelBtn');
    for(i=0; i<expelBtn.length; i++){
        expelBtn[i].addEventListener('click', expelStudent);
    };
};
init();