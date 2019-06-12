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
    return (
      <ul>
        {
          this.state.list.map((item, index)=> {
            return (
            <li key={ index }>
            { item.title }
              <ul>
                {
                  item.data.map((itm, idx) => {
                    return (<li key={ idx }>{ itm }</li>)
                  })
                }
              </ul>
            </li>)
          })
        }
      </ul>
    )
  }
}
export default App