import React from 'react'
import Dashboard from '../ComponentDashboard'

class ComponentProducto extends React.Component{

  render(){
    const jsx_producto = (
        <>
          <h1>Vista producto</h1>
        </>
    )
    return (
      <Dashboard componente={jsx_producto}/>
    )
  }
}

export default ComponentProducto;
