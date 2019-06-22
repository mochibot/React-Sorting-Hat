import React from 'react';
import './App.css';
import { quizQuestions } from './api/Questions';
import Quiz from './components/Quiz';
import Result from './components/Result';


class App extends React.Component {
 constructor() {
    super(); 
    this.state = {
      questions: quizQuestions,
      index: 0,
      results: [], 
      input: ''
    }
 }

  changeHandler = (event) => {
    let num = parseInt(event.target.value, 10);
    this.setState({
      input: num
    })
  }

  submitHandler = (event) => {
    event.preventDefault();
    if (this.state.input === '') {
      alert("Please select an answer");
    } else {
      let result = quizQuestions[this.state.index].answers[this.state.input].content;
      this.setState(prevState => {
        return {
          results: [...prevState.results, result],
          index: prevState.index + 1,
          input: ''
        }
      })
   }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Sorting hat quiz
        </header>
        {this.state.index < 6 && <Quiz index={this.state.index} input={this.state.input} questions={this.state.questions} 
          changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>}
        {this.state.index >= 6 && <Result results={this.state.results}/>}
      </div>
    );
  }
}

export default App;
