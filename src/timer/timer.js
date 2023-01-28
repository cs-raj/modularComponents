class Timer{
    constructor(){
        var head = document.getElementsByTagName('HEAD')[0];
        var link = document.createElement('link');
        // set the attributes for link element
        link.rel = 'stylesheet';
            
        link.type = 'text/css';
        link.href = '../style/timer.css';
        head.appendChild(link);
        this.second = 0;
        this.minute = 0;
        this.minuteSecondtens = 0;
        this.intervalId = 0;
    }

    startTimerFun(){
        this.intervalId = setInterval(this.timerCounter.bind(this),1000);
    }
    stopTimerFun(){
        document.getElementById('start').addEventListener('click',this.startTimerFun.bind(this),{once : true});
        clearInterval(this.intervalId);
    }
    resetTimerFun(){
        clearInterval(this.intervalId); //Stopping the timer
        //Setting it to zero
        this.second = 0;
        this.minute = 0;
        const timerClock = document.querySelector('.timerClock');
        timerClock.innerText = `Timer : ${this.minuteSecondtens}${this.minute} : ${this.minuteSecondtens}${this.second}`;
    }
    timerCounter(){
        const timerClock = document.querySelector('.timerClock');
        if(this.second<10){
            this.second = this.second + 1;
            if(this.minute>=10){
                timerClock.innerText = `Timer : ${this.minute} : ${this.minuteSecondtens}${this.second}`;
            }
            else{
                timerClock.innerText = `Timer : ${this.minuteSecondtens}${this.minute} : ${this.minuteSecondtens}${this.second}`;
            }
        }
        if(this.second>=10){
            this.second = this.second + 1;
            if(this.second===60){
                this.second=0;
                this.minute = this.minute + 1;
                if(this.minute>=10){
                    timerClock.innerText = `Timer : ${this.minute} : ${this.minuteSecondtens}${this.second}`; 
                }
                else{
                    timerClock.innerText = `Timer : ${this.minuteSecondtens}${this.minute} : ${this.minuteSecondtens}${this.second}`;
                }
            }
            else{
                if(this.minute>=10){
                    timerClock.innerText = `Timer : ${this.minute} : ${this.second}`;
                }
                else{
                    timerClock.innerText = `Timer : ${this.minuteSecondtens}${this.minute} : ${this.second}`;
                }
            }
        }
    }
    render(){
            const timerContainer = document.createElement('div'); //To access the buttons of the element
            const timerHeader = document.createElement('div');
            const timerClock = document.createElement('div');
            const timerButton = document.createElement('div');
            const startTimer = document.createElement('button');
            const stopTimer = document.createElement('button');
            const resetTimer = document.createElement('button');

            //Adding class and id to element
            
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
            timerClock.innerText = `Timer : ${this.minuteSecondtens}${this.minute} : ${this.minuteSecondtens}${this.second}`;

            timerContainer.appendChild(timerHeader);
            timerContainer.appendChild(timerClock);
            timerContainer.appendChild(timerButton);
            timerButton.appendChild(startTimer);
            timerButton.appendChild(stopTimer);
            timerButton.appendChild(resetTimer);
            startTimer.addEventListener('click',this.startTimerFun.bind(this),{once : true});
            //startTimer.onclick = this.startTimerFun.bind(this);
            stopTimer.onclick = this.stopTimerFun.bind(this);
            resetTimer.onclick = this.resetTimerFun.bind(this);
            return timerContainer;
    }
    mount(parentElement){
        if(parentElement){
            console.log(parentElement);
            console.log(this);
            parentElement.appendChild(this.render());
            return;
        }
        document.body.appendChild(this.render);
        return;
    }
}
// var head = document.getElementsByTagName('HEAD')[0];
// var link = document.createElement('link');
// // set the attributes for link element
// link.rel = 'stylesheet';
     
// link.type = 'text/css';
// link.href = '../style/timer.css';
// head.appendChild(link);


// let second = 0;
// let minute = 0;
// let minuteSecondtens = 0;
// let intervalId = 0; // This will store setInterval Id used to stop the timer
// //Getting the id of the element to be updated

// //Start timer function
// function tc(){
   
// }

// //Resetting the Timer
// const resetTimerFun = () =>{
    
// }
 
// const timer = () =>{
   
// }

// //Calling to start
// //timer();
export {Timer};