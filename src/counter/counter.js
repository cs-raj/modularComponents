/*
 * Document is object representation of Markup
 * We change the Object using javaScript
 * DOM can be anything that I want
 * We can also use python to manipulate the html object once converted to document
 * Create Element
 * Update Styles
 * Select element
 * Link Files
 * There are multiple ways of selecting an element
 * Inner html will give all the child elment within that html tag
 * Inner text will give the text
 * Try to use inner text of the page rahter than innerHTMl as there you are changing the structure of the page
 * Whenvever attaching an event handler in Js just pass the reference do not call the function
 * 
*/

let count = 0; //To keep track of count
function incrementCount(){
    let countValue = document.getElementById("countValue"); //For accessing the countValue

    count  = count + 1;
    updateCount();
}

function decrementCount(){
    let countValue = document.getElementById("countValue"); //For accessing the countValue

    count  = count - 1;
    updateCount();
}

function updateCount(){
    countValue.innerText = `count : ${count}`;
}

// decrementButton.onclick = decrementCount;

// incrementButton.addEventListener('click',incrementCount);
//Attaching fucntion to button
//Use onClick
//defer waits till body completely loads
//If we don't use defer we will have to put script after body

/*
 * Creating the element using dom
 * Creating the increment and decrement button
 * Query Selector will take css type identifier
 * Creating the entire container using Dom
*/

/*
    * Creating Element using DOM
    * First Create the Element
    * Assign ID or Class to it
    * Then Modify the innerHTML text
    * use querySelector to get the class under which to append the child
    * Then append that element using appendChild Method
    * Add the counterContainer to the body
*/
//Adding the css as file to the JS element
var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', './style/counter.css');
document.head.appendChild(link);

const createCounterFromScratch=()=>{
    //Creating the elements of the counter
    const counterContainer = document.createElement('div');
    const counterHeading = document.createElement('h1');
    const paragraph = document.createElement('p');
    const incrementButton = document.createElement('button');
    const decrementButton = document.createElement('button');
    const buttonContainer = document.createElement('div');

    //Adding class and ID to the elements
    counterContainer.classList.add('counterContainer');
    counterHeading.classList.add('counterHeading');
    paragraph.id = "countValue";
    incrementButton.id = "increment";
    decrementButton.id = "decrement";
    buttonContainer.classList.add('buttonContainer');
    //Inner HTML
    counterHeading.innerText = "Counter";
    paragraph.innerText = `Count : ${count}`;
    incrementButton.innerText = "+";
    decrementButton.innerText = "-";

    counterContainer.appendChild(counterHeading);
    counterContainer.appendChild(paragraph);
    counterContainer.appendChild(buttonContainer);
    buttonContainer.appendChild(incrementButton);
    buttonContainer.appendChild(decrementButton);
   // document.body.appendChild(counterContainer);
    incrementButton.onclick = incrementCount;
    decrementButton.addEventListener('click',decrementCount);

    //Creating the root component for 
    const root = document.createElement('div');
    root.id = 'root';
    //root.appendChild(counterContainer);//Appending container to root
    //document.body.appendChild(root);
    return counterContainer;
}