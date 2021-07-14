import React, { Component } from 'react'
import { Switch, Route, Redirect, } from "react-router-dom";
import Popular from '../pages/Popular.jsx';
import Battle from '../pages/Battle.jsx';
import BattleResult from '../pages/BattleResult.jsx';
//内容部分
export default class Content extends Component {
  render() {
    return (
      <div>
        {/* 注册路由 */}
        <Switch>
          <Route path="/Popular" component={Popular} />
          <Route path="/Battle" component={Battle} />
          <Route path="/BattleResult" component={BattleResult} />
          <Route exact path="/">
          <Redirect from="/" to="/Popular" />
          </Route>
        </Switch>
      </div>
    );
  }
}