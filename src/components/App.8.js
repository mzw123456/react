import React, { Component } from  'react'
class App extends Component {
  constructor (props) {
    super(props)
    console.log(1,this)
  }
  fn () {
    console.log(2,this)
  }
  render () {
    return (
      <div>
        <button onClick={this.fn.bind(this)}>我是一个按钮</button>
      </div>
    )
  }
}
export default App