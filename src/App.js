import React from 'react'

import CartList from './containers/CartList'
import CategoryChenge from './containers/CategoryChenge'
import FilterChenge from './containers/FilterChenge'
import SortList from './containers/SortList'


function App() {

  return (
    <>
      <CartList />
      <CategoryChenge />
      <FilterChenge />
      <SortList />
    </>
  );
}

export default App;
