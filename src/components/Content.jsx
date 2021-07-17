import React, { Component, Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
// import Popular from '@/pages/Popular.jsx';
// import BattleResult from '@/pages/BattleResult.jsx';
// import Battle from '@/pages/Battle.jsx';
export default class Content extends Component {
  render() {
    const Popular = React.lazy(() => import('@/pages/Popular.jsx'));
    const BattleResult = React.lazy(() => import('@/pages/BattleResult.jsx'));
    const Battle = React.lazy(() => import('@/pages/Battle.jsx'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/Popular" component={Popular} />
          <Route path="/Battle" component={Battle} />
          <Route path="/BattleResult" component={BattleResult} />
          <Route><Redirect from="/" to="/Popular" /></Route>
        </Switch>
      </Suspense>
    );
  }
}