import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/layout/Layout';
import BurgerBuilder from '../src/containers/burger-builder/BurgerBuilder';
import Checkout from './containers/checkout/checkout';
import Orders from './containers/orders/Orders';


function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/" exact component={BurgerBuilder} />
        </Switch>
        {/* <BurgerBuilder />
        <Checkout /> */}
     </Layout>
    </div>
  );
}

export default App;
