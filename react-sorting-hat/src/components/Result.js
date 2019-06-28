import React from 'react';
import { houses } from '../api/Questions';

const Result = (props) => {
  let resultsArr = props.results;
  let counts = {};
  let compare = 0;
  let mostFrequent, house;
  for (let i = 0; i < resultsArr.length; i++) {
    let word = resultsArr[i];
    if (counts[word] === undefined) {
      counts[word] = 1;
    } else {
      counts[word] = counts[word] + 1;
    }
    if (counts[word] > compare) {
      compare = counts[word];
      mostFrequent = resultsArr[i];
    }
  }
  house = houses.filter(item => item.house === mostFrequent);
  
  return (
    <div>
      <div className='result'>
        <div className='result-img'>
          <img src={house[0].imageURL} alt='house logo'/>
        </div>
        <div className='result-text'>
          <div>You belong to the <strong>{house[0].house}</strong> house.</div>
          <div>{house[0].facts}</div>
          <div>Famous wizards of this house include:{house[0].famousWizards.map(item => ' ' + item).join()} </div>
        </div>
      </div>
      <button id='to-home' onClick={props.resetQuiz}>Return to home</button>
    </div>
  )
}

export default Result;