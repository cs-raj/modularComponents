//This will countain the class for creating the counter and the requried css for the same

class Counter{
    constructor(counterValueId){
        this.count = 0;
        this.counterValueId = counterValueId;
        var link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', './style/counter.css');
        document.head.appendChild(link);
    }
    incrementCounter(){
        this.count = this.count + 1;
        this.updateCounter();
    }
    decrementCounter(){
        this.count = this.count - 1;
        this.updateCounter();
    }
    updateCounter(){
        document.getElementById(this.counterValueId).innerText = `count : ${this.count}`;
    }
    render(){
        //Creating the component
        const counterContainer = document.createElement('div');
        const counterHeading = document.createElement('h1');
        const counterValue = document.createElement('p');
        const incrementButton = document.createElement('button');
        const decrementButton = document.createElement('button');
        const buttonContainer = document.createElement('div');
        //Adding class labels and ids
        counterContainer.classList.add('counterContainer');
        counterHeading.classList.add('counterHeading');
        counterValue.id = this.counterValueId;
        incrementButton.id = 'incrementButton';
        decrementButton.id = 'decrementButton';
        counterValue.classList.add('counterValue');
        buttonContainer.classList.add('buttonContainer');
        //Adding the Inner HTMl
        counterHeading.innerText = 'Counter';
        counterValue.innerText = `Count : ${this.count}`;
        incrementButton.innerText = "+";
        decrementButton.innerText = "-";

        //Adding components
        counterContainer.appendChild(counterHeading);
        counterContainer.appendChild(counterValue);
        buttonContainer.appendChild(incrementButton);
        buttonContainer.appendChild(decrementButton);
        counterContainer.appendChild(buttonContainer);
        incrementButton.onclick = this.incrementCounter.bind(this);
        decrementButton.onclick = this.decrementCounter.bind(this);
        return counterContainer;
    }
    mount(parentElement){

        //To avoid adding duplicate counter
        if(parentElement){
            if(parentElement.querySelector('.counterContainer')===null){
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
export {Counter};