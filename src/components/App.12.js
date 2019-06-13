//通过事件去修改状态
import React, { Component } from 'react'
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      msg: 'hello world'
    }
  }
  changeData () {
    this.setState ({
      msg: 'hello msg'
    })
  }
  render () {
    return (
      <div>
      { this.state.msg }
      <button onClick ={(e) => this.changeData(e)}>点击我改变状态</button>          
      </div>
    )
  }
}
export default App
