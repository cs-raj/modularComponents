import { Counter } from "./modularCounter/counter.js";
import { Timer } from "./timer/timer.js";
import { generateUniqueId } from "./uniqueID.js";

const newCounter = new Counter(generateUniqueId("newCounter"));
// console.log(generateUniqueId(newCounter));
newCounter.mount(document.getElementById('root'));


const newCounter2 = new Counter(generateUniqueId("newCounter2"));
newCounter2.mount(document.getElementById('root'));

const newTimer = new Timer(generateUniqueId("timerClock"),generateUniqueId("start"),generateUniqueId('stop'),generateUniqueId('reset'));
newTimer.mount(document.getElementById('root'));
const newTimer2 = new Timer(generateUniqueId("timerClock2"),generateUniqueId("start"),generateUniqueId('stop'),generateUniqueId('reset'));
newTimer2.mount(document.getElementById('root'));


// var link = document.createElement('link');
// link.setAttribute('rel', 'stylesheet');
// link.setAttribute('href', './style/style.css');
// document.head.appendChild(link);


// const root = document.createElement('div');
// root.classList.add('root');
// const timerCheckFun = () =>{
//     let counterCheck = document.querySelector('.counterContainer');
//     let timerCheck = document.querySelector('.timerContainer');
//     let rootCount = document.querySelector('.root');
//     console.log(counterCheck);
//     if(counterCheck!==null)
//     {
//         document.body.removeChild(rootCount);
//         root.removeChild(counterCheck);
//     }
//     if(timerCheck===null)
//     {
//         let timer_ = timer();
//         root.appendChild(timer_);
//     }
// }

// const counterCheckFun = () =>{
//     let timerCheck = document.querySelector('.timerContainer');
//     let counterCheck = document.querySelector('.counterContainer');
//     let rootCount = document.querySelector('.root');
//     console.log(document.querySelector('.root').childElementCount);
//     if(timerCheck!==null)
//     {
//         //document.body.removeChild(rootCount);
//         root.removeChild(timerCheck);
//     }
//     if(counterCheck===null)
//     {
//         root.appendChild(createCounterFromScratch());
//     }
// }
// const homeClock = () =>{
//     //Creating the element
//     //const root = document.createElement('div');
//     const homeClockContainer = document.createElement('div');
//     const homeForm = document.createElement('form');
//     const buttonGroup = document.createElement('div');
//     const timerButtonContainer = document.createElement('div');
//     const counterButtonContainer = document.createElement('div');    
//     const timerButton = document.createElement('input');
//     const counterButton = document.createElement('input');
//     const timerLabel = document.createElement('label');
//     const counterLabel = document.createElement('label');
//     //Assigning Id and classes

//     timerButton.id = 'timer';
//     counterButton.id = 'counter';
//     timerButton.type = 'radio';
//     counterButton.type = 'radio';
//     timerButton.name = 'switchType';
//     counterButton.name = 'switchType';
//     timerButton.value = 'timer';
//     counterButton.value = 'counter';
//     timerLabel.for = 'timer';
//     counterLabel.for = 'counter';
//     timerLabel.innerText = "Timer";
//     counterLabel.innerText = "Counter";
//     timerButtonContainer.classList.add('timerButtonContainer');
//     counterButtonContainer.classList.add('counterButtonContainer');
//     buttonGroup.classList.add('buttonGroup'); //To house the buttons
//     homeForm.name = 'switchForm';
//     homeForm.action = '';
//     homeForm.method = "GET";
//     homeClockContainer.classList.add('homeClockContainer');
//     //root.classList.add('root');

//     //Adding the elements to the body
//     document.body.appendChild(root);
//     homeClockContainer.appendChild(homeForm);
//     homeForm.appendChild(buttonGroup);

//     timerButtonContainer.appendChild(timerButton);
//     timerButtonContainer.appendChild(timerLabel);

//     counterButtonContainer.appendChild(counterButton);
//     counterButtonContainer.appendChild(counterLabel);
//     buttonGroup.appendChild(counterButtonContainer);
//     buttonGroup.appendChild(timerButtonContainer);
//     timerButton.addEventListener('click',timerCheckFun);
//     counterButton.addEventListener('click',counterCheckFun);
//     return homeClockContainer;
// }
// console.log(homeClock());
// root.appendChild(homeClock());