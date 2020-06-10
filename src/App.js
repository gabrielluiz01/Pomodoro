import React, { Component } from 'react';

class App extends Component {

  state = {
    timer: 1500,
    count: null,
    textButton: 'PLAY',
    timeEnd: false,
    start: false,
  }


  playTimer = () => { 
    if(this.state.count == null){
			this.state.count = setInterval(() => {
				this.state.timer -= 1
        this.setState(this.state);
        this.setState({
          start: true,
        })
        if (this.state.timer < 0) {
          clearInterval(this.state.count)
          this.setState({
            timer: 0,
            timeEnd: true,
            textButton: 'PLAY'
          })
        } else {
          this.setState({
            timeEnd: false,
            textButton: 'PAUSE',
            
          })
        }
      
      }, 1000);
      this.setState({
        textButton: 'PAUSE'
      })
      
    } else {
      clearInterval(this.state.count);
      this.setState({
        count: null,
      })
      this.state.textButton = 'PLAY'
    }
  }

  stopTimer = () => {
    if (this.state.count === null || this.state.count !== null) {
			clearInterval(this.state.count);
      this.setState({
        timer: 1500,
        textButton: 'PLAY',
        count: null,
        timeEnd: false,
        start: false,
      })
		}
  }

  render() {
    const sec = this.state.timer % 60;
    const min = parseInt(this.state.timer / 60);
    return (
      <div className="App">
        {this.state.timeEnd && <p className="time-end">ACABOU SEU TEMPO</p>}
        <div className="pomodoro">
          <div className="timer">
            <p onChange={(ev) => this.setState({ timer: ev.target.value })}>
              {this.state.start ? `${min}:${sec}` : '25:00'}
            </p>
          <span className="box-buttons">
            <button onClick={this.playTimer} className="button">{this.state.textButton}</button>
            <button onClick={this.stopTimer} className="button">STOP</button>
          </span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
