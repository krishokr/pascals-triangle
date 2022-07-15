import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import PascalTriangle from './PascalTriangle';
import './mainview.css';

export default function MainView() {
    const [error, seterror] = useState('');
    const [userInput, setuserInput] = useState(0);

    function updateError(input) {

        if (input > 35) {
            return seterror('Must be less than 100!');
        }

        if (isNaN(input)) {
            return seterror('No strings allowed!');
        }

        if (input < 0) {
            return seterror('Must be greater than 0!');
        }
        return seterror(null);
      }

     function handleChange(value) {
         if (value > 35) return setuserInput(35);
         return setuserInput(value);
     }

      useEffect(() => updateError(userInput), [userInput])

  return (
    <div className='main-container'>
        <Form className='form-container'>
            <Form.Group>
                <Form.Label>Enter triangle length: </Form.Label>
                <Form.Control value={userInput} onChange={e => handleChange(e.target.value)} />
                <p className='error'>{error}</p>
            </Form.Group>
         </Form>

         <PascalTriangle length={userInput} />
    </div>
  )
}
