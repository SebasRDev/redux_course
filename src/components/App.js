import React from 'react';
import { BrowserRouter, Switch , Route} from 'react-router-dom';
import Userslist from './usuarios/Userslist';
import Layout from './Layout';


const App = () => {
  return(
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/usuarios' component={Userslist}/>
          <Route path='/usuarios' component={Userslist}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
