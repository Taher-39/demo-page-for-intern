import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AccountSettings from "./components/AcountSettings/AccountSettings";
import DailyGoal from "./components/DailyGoal/DailyGoal";
import Home from "./components/Home/Home";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/dailyGoal">
            <DailyGoal />
          </Route>
          <Route path="/accountSettings">
            <AccountSettings></AccountSettings>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
    </Router>
  );
}
