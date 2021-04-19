import React from 'react';
import Menu from './Menu';

const Layout = (props) => {
  return(
    <>
      <Menu/>
      {props.children}
    </>
  )
}

export default Layout;