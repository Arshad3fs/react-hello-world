import React, { useEffect, useState } from "react";
import './App.css';
import SigninForm from "./SigninForm";
import LearnReact from "./LearnReact";
import Office from "./context-example/Office";
import { GiftsContext } from "./context-example/store/GiftsContext";

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Employee from "./context-example/Employee";
import ContractEmployee from "./context-example/Contract-Employee";
import EmployeeAddress from "./context-example/EmployeeAddress";

function App() {

  return (
    <div>
      {/* <Office /> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/employee">
            <Employee />
          </Route>
          <Route path="/contract-employee">
            <ContractEmployee />
          </Route>
          <Route path="/address">
            <EmployeeAddress />
          </Route>
          <Route exact path="/">
            <Office />
          </Route>
          <Route path="*">
            <EmployeeAddress />
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  )
}

export default App;
