import React from 'react';
import background from '../images/background.jpg';

const Start = (props) => {
  return (
    <div className='start' onClick={props.startQuiz}>
      <img src={background} alt='hogwarts houses'/>
    </div>
  )
}

export default Start;