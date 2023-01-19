import { Routes, Route } from "react-router-dom";
import { useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase/firebase.utils';
import { setCurrentUser } from './store/user/user.action';
import Login from "./routes/login/login.component";
import Home from "./routes/home/home.component";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubsribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubsribe;
  }, [dispatch]);

  return (
    <Fragment>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="/" element={ <Home />}/>
      </Routes>
    </Fragment>
  );
}

export default App;
