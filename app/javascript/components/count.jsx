import React, {Component} from 'react'

export default class Count extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  handleUp = () => {
    this.setState({
      count: ++this.state.count
    })
  }

  handleDown = () => {
    this.setState({
      count: --this.state.count
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.handleUp}>+</button>
        <button onClick={this.handleDown}>-</button>
      </div>
    )
  }
}
