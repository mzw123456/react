//生命周期钩子函数修改状态，数据请求
import React, { Component } from  'react'
class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      list: []
    }
  }
componentDidMount () {
  fetch ('http://www.daxunxun.com/douban').then(res => res.json()).then(data=> {
    console.log(data)
    this.setState({
      list: data
    })
  })
}




  render () {
    return (
      <ul>
        {
          this.state.list.map(item=> {
            return (<li key={item.id}>{item.title}</li>)
          })
        }
      </ul>
    )
  }
}

export default App