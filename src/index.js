import React from 'react';
import ReactDom from 'react-dom';
import App from '@/components/App';
import store from './store'

function renderFn () {
  ReactDom.render(
    <App />,
    document.getElementById('root')
  )
}
renderFn ()
store.subscribe(renderFn)