import React from 'react'
class App extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      msg: '你在哪里啊'
    }
  }
  render () {
    return (
      <div>
        {
          this.state.msg
        }
      </div>
    )
  }
}
export default App