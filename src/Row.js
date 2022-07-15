import React from 'react';
import './row.css';

export default function Row(props) {

  
    function getColor(num) {

        if (num%10===0) {
            return '#F9968B'
        }
        if (num%10===1) {
            return '#F27348'
        }
        if (num%10===2) {
            return '#26474E'
        }
        if (num%10===3) {
            return '#76CDCD'
        }
        if (num%10===4) {
            return '#2CCED2'
        }
        if (num%10===5) {
            return '#C54B6C'
        }
        if (num%10===6) {
            return '#E5B3BB'
        }
        if (num%10===7) {
            return '#C47482'
        }
        if (num%10===8) {
            return '#A4CCE3'
        }
        if (num%10===9) {
            return '#B8E0F6'
        }
       
    }
    
    const style = {
        container : {
            display: 'flex',
            justifyContent: 'center'
        },
        numbers: {
            color: '#000',
            borderRadius: '10px'
        }
    }

  return (
    <div className='row-container' style={style.container}>
        {props.row.map((num, index) => <div key={index} className='num-container'>
            <p style={{backgroundColor: getColor(num), 
            fontSize: (props.length > 27) ? '10%' : '' }} 
            className='num'>{num}</p>
        </div>)}
    </div>
  )
}
