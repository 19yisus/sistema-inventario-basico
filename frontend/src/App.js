import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import HomeDashboard from './componentes/ComponentHomeDashboard'

// PRODUCTO
import ComponentProducto from './componentes/producto/ComponentProducto'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeDashboard} />
        <Route exact path="/producto" component={ComponentProducto}/>
      </Switch>
    </Router>
  );
}

export default App;
