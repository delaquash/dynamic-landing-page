// Selecting the DOM elements

const time = document.getElementById('time');
greeting = document.getElementById('greeting');
name = document.getElementById('name');
focus = document.getElementById('focus');


const showAmPm = true;

//  Show time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    // output time
    time.innerHTML = `${hour}<span>:</span>${addZeros(min)}<span>:</span>${addZeros(sec)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}
// Add zeros
function addZeros(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set background and greeting
function setByGreeting() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        // morning
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/955656/pexels-photo-955656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')";
        greeting.textContent = 'Good Morning, Have a great day ahead';
    } else if (hour < 18) {
        // afternoon
        document.body.style.backgroundImage = "url(https://images.pexels.com/photos/2566581/pexels-photo-2566581.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)";
        greeting.textContent = 'Good afternoon, hope you have been having a good time';
    } else {
        // evening
        document.body.style.backgroundImage = "url(https://images.pexels.com/photos/204366/pexels-photo-204366.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)";
        greeting.textContent = 'Good night, ensure you sleep well and be ready for the next day';
        document.body.style.color = 'white';
    }
}

// Get Name

function getName() {
    if (localStorage.getItem('names') === null) {
        names.textContent = '[Enter Name]';
    } else {
        names.textContent = localStorage.getItem('names');
    }
}

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('names', e.target.innerText);
            names.blur();
        }
    } else {
        localStorage.setItem('names', e.target.innerText);
    }
}
// Get Focus
function getGoals() {
    if (localStorage.getItem('goals') === null) {
        goals.textContent = '[Enter goals for today]';
    } else {
        goals.textContent = localStorage.getItem('goals');
    }
}

// Set Goal
function setGoal(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('goals', e.target.innerText);
            goals.blur();
        }
    } else {
        localStorage.setItem('goals', e.target.innerText);
    }
}
names.addEventListener('keypress', setName);
names.addEventListener('blur', setName);
goals.addEventListener('keypress', setGoal);
goals.addEventListener('blur', setGoal);
// Invoking Functions
showTime();
setByGreeting();
getName();
getGoals();



const h2 = document.querySelector('h2');
// function myColor () {
(h2.style.color='blue');
// (h2.style.fontSize='90px');
// }

console.log('hi');
