import {createStore} from 'redux'
const reducer = (state={prolist:[],bannerlist:[]}, action) => {
  const { type,data }=action;
  if (type === 'changeProlist') {
    state.prolist=data;
    return state
  }else  if (type === 'changeBannerlist') {
    state.bannerlist=data;
    return state
  } else {
    return state;
  }
}
const store = createStore(reducer)
export default store;