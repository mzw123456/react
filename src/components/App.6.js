import React from 'react'
class App extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      list: [
        {
          title: '冰淇凌',
          data: ['草莓味冰淇凌','蓝莓味冰淇凌','苹果味冰淇凌','柠檬味冰淇凌']
        },{
          title: '水果',
          data: ['苹果','西瓜','草莓','蓝莓']
        }
      ]
      
    }
  }
  render () {
    let arr = [];
    this.state.list.map((item, index) => {
      let arr2 = []
      item.data.map((itm, idx) => {
        arr2.push (<li key={ idx }>{itm}</li>) 
      })
      let oli = (<li key={ index }>{item.title}<ul>{arr2}</ul></li>)
      arr.push(oli)
    })
    return (
      <ul>
          {arr}
      </ul>
    )
  }
}
export default App