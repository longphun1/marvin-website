import { Routes, Route } from "react-router-dom";
import { useEffect, Fragment } from "react";
import { useDispatch } from "react";

import Home from "./routes/home/home.component";

function App() {
  return (
    <Fragment>
      <Routes>
        
        <Route path="/" element={ <Home />}/>
      </Routes>
    </Fragment>
  );
}

export default App;
