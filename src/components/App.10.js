import React, { Component } from 'react';

class Com extends Component {
  constructor (props) {
    super(props);
    console.log('1', this); 
  }

  btnClickFn (event, id) {
    console.log(event,id);
  }

  /**
   * <button onClick = { function (e) {return this.btnClickFn(e) } }>react按钮</button>
   */
  render () {
    // const _this = this
    return (
      <div>
        <button onClick = { (e) => this.btnClickFn(e, 22) }>react按钮</button>
      </div>
    )
  }
}
// const com = new Com()
// com.btnClickFn()
export default Com;
