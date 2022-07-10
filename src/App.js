// eslint-disable-next-line
import React, { useContext } from "react";
import "./App.css";

import Main from "./components/Main";
import { Appprovider } from "./context";

function App() {
  return (
    <>
      <Appprovider>
        <Main />
      </Appprovider>
    </>
  );
}

export default App;
