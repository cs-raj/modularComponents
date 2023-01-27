//This will countain the class for creating the counter and the requried css for the same

class Counter{
    constructor(){
        this.count = 0;
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
        document.getElementById('counterValue').innerText = `count : ${this.count}`;
    }
    render(){
        //Creating the component
        const counterContainer = document.createElement('div');
        const counterHeading = document.createElement('h1');
        const counterValue = document.createElement('p');
        const incrementButton = document.createElement('button');
        const decrementButton = document.createElement('button');

        //Adding class labels and ids
        counterContainer.classList.add('counterContainer');
        counterHeading.classList.add('counterHeading');
        counterValue.id = 'counterValue';
        incrementButton.id = 'incrementButton';
        decrementButton.id = 'decrementButton';

        //Adding the Inner HTMl
        counterHeading.innerText = 'Counter';
        counterValue.innerText = `count : ${this.count}`;
        incrementButton.innerText = "+";
        decrementButton.innerText = "-";

        //Adding components
        counterContainer.appendChild(counterHeading);
        counterContainer.appendChild(counterValue);
        counterContainer.appendChild(incrementButton);
        counterContainer.appendChild(decrementButton);

        incrementButton.onclick = this.incrementCounter.bind(this);
        return counterContainer;
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
export {Counter};