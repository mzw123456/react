import React from 'react'
class App extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      list: ['a','b','c','e']  //单层循环,先解析后渲染
    }
  }
  render () {
    let arr = []
    this.state.list.map((item, index)=> {
      arr.push(<li key={index}>{item}</li>)
    })
    return (
      <ul>
        {arr}
      </ul>
    )
  }
}
export default App