//生命周期钩子函数修改状态，数据请求,带有样式
import React, { Component } from  'react'
import '@/main.scss'
import Banner from './Banner'
import store from '../store'
class App extends Component {
  componentDidMount () {
    fetch ('http://www.daxunxun.com/douban').then(res => res.json()).then(data=> {
      console.log(data)
     store.dispatch ({
       type: 'changeProlist',
       data:data
     })
    })
    fetch('http://www.daxunxun.com/banner').then(res => res.json()).then(data => {
      store.dispatch({
        type: 'changeBannerlist',
        data: data
      })
    })
  }
  render () {
    return (
      <ul className='list'>
      <Banner bannerlist = { store.getState().bannerlist }/>
        {
          store.getState().prolist.map(item=> {
            return (<li key={item.id}>{item.title}</li>)
          })
        }
      </ul>
    )
  }
}

export default App