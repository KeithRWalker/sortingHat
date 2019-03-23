const init = () =>{
    eventListeners();
}

const eventListeners = () => {
    const startBtn = document.getElementById('startBtn');
    const formDiv = document.getElementById('formDiv');
    startBtn.addEventListener('click', ()=>{
        formDiv.style.visibility= 'visible';
    });
};

const printToDom = (divId, text) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = text;
};

init();