import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={() => <h1>Pagina Não Encontrada</h1>} />
      </Switch>
    </BrowserRouter>
  );
};
