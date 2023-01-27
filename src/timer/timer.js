/*
    * First building the timer componenet in app.js
    * Need two variables 
    * 1 Seconds
    * 1 Minutes
    * Timer : MM:SS
    * 3 Buttons 'start', 'stop', 'reset'
    * If SS%60==0 then MM++
    * Use interval of one second to increment once the timer starts
    * Keep Both variable global for the timer
*/

//Addign the link for the css file
var head = document.getElementsByTagName('HEAD')[0];
var link = document.createElement('link');
// set the attributes for link element
link.rel = 'stylesheet';
     
link.type = 'text/css';
link.href = '../style/timer.css';
head.appendChild(link);


let second = 0;
let minute = 0;
let minuteSecondtens = 0;
let intervalId = 0; // This will store setInterval Id used to stop the timer
//Getting the id of the element to be updated
const timerContainer = document.createElement('div'); //To access the buttons of the element
//Start timer function
function tc(){
    const timerClock = document.querySelector('.timerClock');
    console.log(timerClock);

    if(second<10){
        second = second + 1;
        console.log("if")
        if(minute>=10){
            timerClock.innerText = `Timer : ${minute} : ${minuteSecondtens}${second}`;

        }
        else{
            timerClock.innerText = `Timer : ${minuteSecondtens}${minute} : ${minuteSecondtens}${second}`;
        }
    }
    if(second>=10){
        console.log("elififelse");
        second = second + 1;
        if(second===60){
            second=0;
            minute = minute + 1;
            if(minute>=10){
                timerClock.innerText = `Timer : ${minute} : ${minuteSecondtens}${second}`; 
            }
            else{
                timerClock.innerText = `Timer : ${minuteSecondtens}${minute} : ${minuteSecondtens}${second}`;
                console.log("elififelse");
            }
        }
        else{
            if(minute>=10){
                timerClock.innerText = `Timer : ${minute} : ${second}`;
            }
            else{
                timerClock.innerText = `Timer : ${minuteSecondtens}${minute} : ${second}`;
            }
        }
    }
}

const startTimerFun = () =>{
    intervalId = setInterval(tc,1000);
}

//To Stop the timer
const stopTimerFun = () =>{
    document.getElementById('start').addEventListener('click',startTimerFun,{once:true});
    console.log(document.getElementById('start'));
    clearInterval(intervalId);
}

//Resetting the Timer
const resetTimerFun = () =>{
    document.getElementById('start').addEventListener('click',startTimerFun,{once:true});
    clearInterval(intervalId); //Stopping the timer
    //Setting it to zero
    second = 0;
    minute = 0;
    const timerClock = document.querySelector('.timerClock');
    timerClock.innerText = `Timer : ${minuteSecondtens}${minute} : ${minuteSecondtens}${second}`;
}
/*
    * Creating the elements
    * Assigning the inner html
    * Adding the buttons
    * appending at appropriate places
    * Adding functionality to the buttons
    * Adding css for the page
*/
/*
    * Structure
    * Root
    *   timerContainer
    *   header
    *   Actual Timer MM:SS
    *   button div
    *       start
    *       stop
    *       reset
*/
const timer = () =>{
    //const root = document.createElement('div');

    const timerHeader = document.createElement('div');
    const timerClock = document.createElement('div');
    const timerButton = document.createElement('div');
    const startTimer = document.createElement('button');
    const stopTimer = document.createElement('button');
    const resetTimer = document.createElement('button');

    //Adding class and id to element
    //root.id = 'root';
    startTimer.id = 'start';
    stopTimer.id = 'stop';
    resetTimer.id = 'reset';
    timerContainer.classList.add('timerContainer');
    timerHeader.classList.add('timerHeader');
    timerClock.classList.add('timerClock');
    timerButton.classList.add('timerButton');

    //Adding the inner html
    timerHeader.innerText = "Timer MM : SS";
    startTimer.innerText = "Start";
    stopTimer.innerText = "Stop";
    resetTimer.innerText = "Reset";
    timerClock.innerText = `Timer : ${minuteSecondtens}${minute} : ${minuteSecondtens}${second}`;

    //Adding element to one another
    document.body.appendChild(root);
    //root.appendChild(timerContainer);
    timerContainer.appendChild(timerHeader);
    timerContainer.appendChild(timerClock);
    timerContainer.appendChild(timerButton);
    timerButton.appendChild(startTimer);
    timerButton.appendChild(stopTimer);
    timerButton.appendChild(resetTimer);

    //Adding functionality to buttons
    startTimer.addEventListener('click',startTimerFun,{once:true});
    stopTimer.addEventListener('click',stopTimerFun);
    resetTimer.addEventListener('click',resetTimerFun);
    return timerContainer;
}

//Calling to start
//timer();
