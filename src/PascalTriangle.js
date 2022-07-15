import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Row from './Row';

export default function PascalTriangle(props) {
    const [pascalArr, setPascalArr] = useState([]);
  
    useEffect(() => setPascalArr(getPascal(props.length)),[props.length]);

    function getPascal(numRows) {
   
        let pascal = [[1]];   
        let row = [];
        let numIndex = 0;
        let rowIndex = 0;
    
        while (rowIndex < numRows-1) {
         
            //Current row exists since not at beginning of pascal
            let currentRow = pascal[rowIndex];
      
            //Set currentNum to 0 if at end of row
            //Otherwise, set to current value in row
            let atEnd = numIndex === currentRow.length;
      
            let currentNum = (atEnd) ? 0 : currentRow[numIndex];
            
            //Set previousNum to 0 if at beginning of row
            //Otherwise, set to previous value in row
            let atBeginning = numIndex === 0;
            let previousNum = (atBeginning) ? 0 : currentRow[numIndex - 1];
            
            //Add sum of currentNum and previousNum
            row.push(currentNum + previousNum);      
            
            if (atEnd) {
                pascal.push(row);
                row = [];
                numIndex = 0;
                rowIndex += 1;
            } else {
                numIndex += 1;
            }
        }
      
        return pascal;
      };

      console.log('length: '+props.length)
  return (
    <div className='pascal-triangle-container'>
        <div>
          {(props.length === 0 || props.length === '') ? '' : pascalArr.map(arr => <Row row={arr} length={props.length} key={arr.length}/>)}
        </div>
    </div>
  )
}
