import { Counter } from "./modularCounter/counter.js";
import { Timer } from "./timer/timer.js";
import { generateUniqueId } from "./uniqueID.js";

class TimerCounterApp{
    constructor(){
        //Attaching the Style sheets
        var link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', './style/style.css');
        document.head.appendChild(link);

        // //Adding the Root Element
        // this.root = document.createElement('div');
        // this.root.classList.add('root');
    }
    
    timerCheckFun (){
        let counterCheck = document.querySelector('.counterContainer');
        let timerCheck = document.querySelector('.timerContainer');
        if(counterCheck!==null)
        {
            root.removeChild(counterCheck);
        }
        if(timerCheck===null)
        {

            const newTimer = new Timer(generateUniqueId("timerClock"),generateUniqueId("start"),generateUniqueId('stop'),generateUniqueId('reset'));
            newTimer.mount(document.getElementById('root'));
        }
    }

    counterCheckFun (){
        let timerCheck = document.querySelector('.timerContainer');
        let counterCheck = document.querySelector('.counterContainer');
        if(timerCheck!==null)
        {
            //document.body.removeChild(rootCount);
            root.removeChild(timerCheck);
        }
        if(counterCheck===null)
        {
            const newCounter = new Counter(generateUniqueId("newCounter"));

            newCounter.mount(document.getElementById('root'));
        }
    }
    render(){
        //Creating the element
        //const root = document.createElement('div');
        const homeClockContainer = document.createElement('div');
        const homeForm = document.createElement('form');
        const buttonGroup = document.createElement('div');
        const timerButtonContainer = document.createElement('div');
        const counterButtonContainer = document.createElement('div');    
        const timerButton = document.createElement('input');
        const counterButton = document.createElement('input');
        const timerLabel = document.createElement('label');
        const counterLabel = document.createElement('label');
        //Assigning Id and classes

        timerButton.id = 'timer';
        counterButton.id = 'counter';
        timerButton.type = 'radio';
        counterButton.type = 'radio';
        timerButton.name = 'switchType';
        counterButton.name = 'switchType';
        timerButton.value = 'timer';
        counterButton.value = 'counter';
        timerLabel.for = 'timer';
        counterLabel.for = 'counter';
        timerLabel.innerText = "Timer";
        counterLabel.innerText = "Counter";
        timerButtonContainer.classList.add('timerButtonContainer');
        counterButtonContainer.classList.add('counterButtonContainer');
        buttonGroup.classList.add('buttonGroup'); //To house the buttons
        homeForm.name = 'switchForm';
        homeForm.action = '';
        homeForm.method = "GET";
        homeClockContainer.classList.add('homeClockContainer');

        homeClockContainer.appendChild(homeForm);
        homeForm.appendChild(buttonGroup);

        timerButtonContainer.appendChild(timerButton);
        timerButtonContainer.appendChild(timerLabel);

        counterButtonContainer.appendChild(counterButton);
        counterButtonContainer.appendChild(counterLabel);
        buttonGroup.appendChild(counterButtonContainer);
        buttonGroup.appendChild(timerButtonContainer);
        timerButton.addEventListener('click',this.timerCheckFun.bind(this));
        counterButton.addEventListener('click',this.counterCheckFun.bind(this));
        return homeClockContainer;
    }

    mount(el){
        if(el){
            el.appendChild(this.render());
        }
        //document.body.appendChild(this.render());
    }
}

const newTCA = new TimerCounterApp();
newTCA.mount(document.getElementById('root'));

// const newTimer22 = new Timer(generateUniqueId("timerClock"),generateUniqueId("start"),generateUniqueId('stop'),generateUniqueId('reset'));
// newTimer22.mount(document.getElementById('root'));
// const newTimer2 = new Timer(generateUniqueId("timerClock"),generateUniqueId("start"),generateUniqueId('stop'),generateUniqueId('reset'));
// newTimer2.mount(document.getElementById('root'));