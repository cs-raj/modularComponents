Title: timer.js file
Description: This file contains the code for the timer element of the website. 

* Global Variables
    * second -- To count the seconds
    * minute -- To Count the minutes
    * minuteSecondtens -- To have the tens digit
    * intervalId -- To store the setIntervalId inorder to pause the timer

* Functions

* tc() -- This function increments the clock timer it is triggered using setInterval Fucntion 
* startTimerFun(function_to_be_called, interval_in_miliseconds) -- this function is starts the timer.
* stopTimerFun() -- This function stops the timer and triggered using click event on stop button. It also resets the property of start button of object {once:true}
* resetTimerFun() -- this sets the minutes and seconds to zero and resets the property of start button of object {once:true}.
* timer() -- This function creates the timerContainer and returns it.
