import React, { useEffect, useState } from "react";
import './App.css';
import SigninForm from "./SigninForm";
import LearnReact from "./LearnReact";
import Office from "./context-example/Office";
import { GiftsContext } from "./context-example/store/GiftsContext";

function App() {

  return (
    <div>
      {/* <LearnReact />
      <SigninForm /> */}
      <Office />
    </div>
  )
}

export default App;
