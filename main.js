const houses = [
    {
        name: 'Gryffindor',
        img: './imgs/g.png',
        houseNum: 0,
        members: 'Harry Potter, Hermione Granger and Ron Weasley.',
        q: `‘You might belong in Gryffindor,<br>
         Where dwell the brave at heart,<br>
         Their daring, nerve and chivalry<br>
         Set Gryffindors apart.’`,
         moreInfo: 'https://www.pottermore.com/collection/all-about-gryffindor'
    },
    {
        name: 'Hufflepuff',
        img: './imgs/h.png',
        houseNum: 1,
        members: 'Newt Scamander, Cedric Diggory and Nymphadora Tonks.',
        q: `‘You might belong in Hufflepuff<br>
        Where they are just and loyal<br>
        Those patient Hufflepuffs are true<br>
        And unafraid of toil.’`,
        moreInfo: 'https://www.pottermore.com/collection/all-about-hufflepuff'
    },
    {
        name: 'Ravenclaw',
        img: './imgs/r.png',
        houseNum: 2,
        members: 'Luna Lovegood, Gilderoy Lockhart and Filius Flitwick.',
        q: `‘Or yet in wise old Ravenclaw<br>
        If you’ve a ready mind<br>
        Where those of wit and learning<br>
        Will always find their kind.’`,
        moreInfo: 'https://www.pottermore.com/collection/all-about-ravenclaw'
    },
    {
        name: 'Slytherin',
        img: './imgs/s.png',
        houseNum: 3,
        members: 'Severus Snape, Draco Malfoy and Lord Voldemort.',
        q: `‘Or perhaps in Slytherin<br>
        You’ll make your real friends<br>
        Those cunning folk use any means<br>
        To achieve their ends.’`,
        moreInfo: 'https://www.pottermore.com/collection/all-about-slytherin'
    }
];

const init = () =>{
    eventListeners();
}

const eventListeners = () => {
    const startBtn = document.getElementById('startBtn');
    const formDiv = document.getElementById('formDiv');
    const sortBtn = document.getElementById('sortBtn');
    startBtn.addEventListener('click', ()=>{
        formDiv.style.visibility= 'visible';
    });
    sortBtn.addEventListener('click', sortingHat);
};

const printToDom = (divId, text) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += text;
};


const sortingHat = () => {
    const studentName = document.getElementById('name');
    const studentHouse = houses[Math.floor(Math.random() * houses.length)];
    const cardString =` <div class="card ${studentName.value}Card" id="test" style="width: 18rem;">
                            <h2>${studentName.value}</h2>
                            <h4>${studentHouse.name}</h4>
                            <img src="${studentHouse.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h6>Notable Members:</h6>
                                <p class="card-text">${studentHouse.members}</p>
                                <a href="${studentHouse.moreInfo}">Learn more about ${studentHouse.name}</a>
                                <p class="card-text q-text">${studentHouse.q}</p>
                                <a class="sortBtn btn btn-primary btn-sm" id="sortBtn" role="button">Expel  </a>
                            </div>
                        </div>`;
    printToDom('cardCon', cardString);
};

init();