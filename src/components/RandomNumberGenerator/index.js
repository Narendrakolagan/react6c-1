import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    Number: 0,
  }

  onGenerateNumber = () => {
    this.setState(prevState => ({
      Number: prevState + Math.ceil(Math.random() * 100) + 1,
    }))
  }
  render() {
    const {Number} = this.state

    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.onGenerateNumber}
          >
            Generate
          </button>
          <p className="text-count">{Number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
