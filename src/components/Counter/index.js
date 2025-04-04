import {Component} from 'react'
import {GrPowerReset} from 'react-icons/gr'
import {IoIosAddCircle} from 'react-icons/io'
import {FaMinusCircle} from 'react-icons/fa'
import './index.css'

class Counter extends Component {
  state = {
    count: 0,
  }

  onIncrement = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }

  onDecrement = () => {
    this.setState(prevState => {
      return {count: prevState.count - 1}
    })
  }

  onReset = () => {
    this.setState({count: 0})
  }

  render() {
    const {count} = this.state

    let countColor = '#2e3e4e'
    if (count > 0) countColor = '#4caf50'
    if (count < 0) countColor = '#f44336'

    return (
      <div className="container">
        <div className="counter-card">
          <div className="counter-header">
            <h1 className="heading">Interactive Counter</h1>
          </div>

          <div className="count-display">
            <div className="count-background">
              <p className="count" style={{color: countColor}}>
                {count}
              </p>
            </div>
          </div>

          <div className="buttons-container">
            <button
              className="button button-decrease"
              onClick={this.onDecrement}
            >
              <FaMinusCircle />
              Decrease
            </button>

            <button className="button button-reset" onClick={this.onReset}>
              <GrPowerReset />
              Reset
            </button>

            <button
              className="button button-increase"
              onClick={this.onIncrement}
            >
              <IoIosAddCircle />
              Increase
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter
