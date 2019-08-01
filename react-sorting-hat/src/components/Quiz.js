import React from 'react';

class Quiz extends React.Component {

  render() {
    return (
      <div className='quiz-content'>
        <h2>{this.props.questions[this.props.index].question}</h2>
        <form onSubmit={this.props.submitHandler}>
          <div className="radio">
            <label>
              <input type="radio" name='answer' value="0" onChange={this.props.changeHandler} checked={this.props.input === 0}/>
              <span className='checkbox-custom'></span>
              {this.props.questions[this.props.index].answers[0].type}
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" name='answer' value="1" onChange={this.props.changeHandler} checked={this.props.input === 1}/>
              <span className='checkbox-custom'></span>
              {this.props.questions[this.props.index].answers[1].type}
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" name='answer' value="2" onChange={this.props.changeHandler} checked={this.props.input === 2}/>
              <span className='checkbox-custom'></span>
              {this.props.questions[this.props.index].answers[2].type}
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" name='answer' value="3" onChange={this.props.changeHandler} checked={this.props.input === 3}/>
              <span className='checkbox-custom'></span>
              {this.props.questions[this.props.index].answers[3].type}
            </label>
          </div>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Quiz;