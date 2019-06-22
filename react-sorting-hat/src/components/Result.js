import React from 'react';

const Result = (props) => {
  let resultsArr = props.results;
  let counts = {};
  let compare = 0;
  let mostFrequent;
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

  return (
    <div>You got {mostFrequent}!</div>
  )
}

export default Result;