import React, { useEffect, useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import PascalTriangle from './PascalTriangle';
import './mainview.css';

export default function MainView() {
    const [error, setError] = useState('');
    const [userInput, setUserInput] = useState(0);


    const [timerID, setTimerID] = useState(null);
    const [finished, setFinished] = useState(false);
    const [performanceTime, setPerformanceTime] = useState(0);

    const input = useRef(null);


    //Checks if user input for length of triangle is valid.
    function isValid(length) {
        setError('');

        if (isNaN(length)) {
            setError('No strings allowed!');
            return false;
        }

        if (length < 0) {
            setError('Must be greater than 0!');
            return false;
        }
        return true;
    }

    //Handles the popup
    function handlePopup() {

        //Confirm popup is synchronous, so function will continue to run if user selects continue.
        //If user selects cancel, the userInput is reset to 0.

        if (window.confirm("Do you wish to continue?")) {
            console.log('yes');
        } else {
            setUserInput(0);
            clearTimeout(timerID);
            console.log('no')
        }
    }
   
        //Called once user selects Submit
        function handleClick(e) {
            e.preventDefault();
            
            //Ensures input is not a string or a negative number
            if (isValid(input.current.value)) {
                //Begins timer
                // const timer = setTimeout(() => handlePopup(), 5);
                //Updates state with a timer id for clearing
                // setTimerID(timer);

                // if (finished) clearTimeout(timer);
                
                //Sets userInput state for length of triangle
                return setUserInput(input.current.value);
            }
            
        }

        //If render is complete in PascalTriangle Component, timeout is cleared.
        useEffect(() => {
            //Finished state is updated in PascalTriangle once render is complete.
            if (finished) {
                clearTimeout(timerID);
                console.log('cleared!!!');
                setFinished(false);
            }

            console.log('FINISHED: '+finished);
        }, [finished]);


        //Resets the error state and userInput state when Reset Button is selected.
        function reset(e) {
            e.preventDefault();
            setError('');
            // input.current.reset();
            return setUserInput(0);
        }


       


  return ( 
    <div className='main-container'>
        <form className='form-container'>
            <div className=''>
                <p>Enter triangle length: </p>
                <input ref={input} />
                <div className='buttons-container'>
              
                    <button className='form-button' onClick={(e) => handleClick(e)}>Submit</button>
                    <button className='form-button' onClick={(e) => reset(e)}>Reset</button>
                </div>
                
                <p className='error'>{error}</p>
            </div>
            
            
            <h1>Completed in: {performanceTime} ms.</h1>
        </form>
        


        <PascalTriangle updatePerformanceTime={setPerformanceTime} length={userInput} finished={setFinished}/>
         
    </div>
  )
}
