class Timer{
    constructor(timerClockId,startId, stopId, resetId){
        var links = document.createElement('link');
        links.setAttribute('rel', 'stylesheet');
        links.setAttribute('href', './style/timer.css');
        document.head.appendChild(links);
        this.second = 0;
        this.minute = 0;
        this.minuteSecondtens = 0;
        this.intervalId = 0;
        this.timerClockId = "_"+timerClockId;
        this.start = '_'+startId;
        this.stop = '_'+stopId;
        this.reset = '_'+resetId;
        this.checkStartAddEvent = 0;
    }

    startTimerFun(){
        this.intervalId = setInterval(this.timerCounter.bind(this),1000);
        document.querySelector('.'+this.start).innerText = 'Stop';
        document.querySelector('.'+this.start).addEventListener('click',this.stopTimerFun.bind(this));
    }
    stopTimerFun(){
        clearInterval(this.intervalId);
        document.querySelector('.'+this.start).innerText = 'Start';
        document.querySelector('.'+this.start).addEventListener('click',this.startTimerFun.bind(this),{once:true});       
    }
    resetTimerFun(){
        clearInterval(this.intervalId);
        this.second = 0;
        this.minute = 0;
        const timerClock = document.querySelector('.'+this.timerClockId);
        timerClock.innerText = `Timer : ${this.minuteSecondtens}${this.minute} : ${this.minuteSecondtens}${this.second}`;
        if(document.querySelector('.'+this.start).innerText==='Stop')
        {
            document.querySelector('.'+this.start).innerText = 'Start';
            document.querySelector('.'+this.start).addEventListener('click',this.startTimerFun.bind(this),{once:true});       
        }
    }
    timerCounter(){
        const timerClock = document.querySelector('.'+this.timerClockId);
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
            const resetTimer = document.createElement('button');

            //Adding class and id to element
            
            startTimer.id = 'start';
            resetTimer.id = 'reset';
            startTimer.classList.add(this.start);
            resetTimer.classList.add(this.reset);
            timerContainer.classList.add('timerContainer');
            timerHeader.classList.add('timerHeader');
            timerClock.classList.add(this.timerClockId,'timerClock');
            timerButton.classList.add('timerButton');

            //Adding the inner html
            timerHeader.innerText = "Timer MM : SS";
            startTimer.innerText = "Start";
            resetTimer.innerText = "Reset";
            timerClock.innerText = `Timer : ${this.minuteSecondtens}${this.minute} : ${this.minuteSecondtens}${this.second}`;

            timerContainer.appendChild(timerHeader);
            timerContainer.appendChild(timerClock);
            timerContainer.appendChild(timerButton);
            timerButton.appendChild(startTimer);
            timerButton.appendChild(resetTimer);
            startTimer.addEventListener('click',this.startTimerFun.bind(this),{once : true});
            resetTimer.addEventListener('click',this.resetTimerFun.bind(this));
            return timerContainer;
    }
    mount(parentElement){
        if(parentElement){
            if(parentElement.querySelector('.timerContainer')===null){
                parentElement.appendChild(this.render());
                return;
            }
            else
            {
                return;
            }
        }
        document.body.appendChild(this.render);
        return;
    }
}
export {Timer};
