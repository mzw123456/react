import React, { Component } from  'react'
class App extends Component {
  constructor (props) {
    super(props)
    console.log(1,this)
  }
  fn (id) {
    console.log(2,this,id)
  }
  render () {
    return (
      <div>
        <button onClick={this.fn.bind(this, 1)}>我是一个按钮</button>
      </div>
    )
  }
}
export default App