import React from "react";
import { useHistory } from "react-router-dom";

export const globalStore = React.createContext(null);

export const UserContext = (props) => {
  const [auth, setAuth] = React.useState(null);
  let history = useHistory();
  const redirect = (location) => {
    history.push(location);
  };
  const reject = () => {};
  const resolve = (data) => {};
  console.log(auth);

  return (
    <globalStore.Provider value={{ auth, setAuth }}>
      {props.children}
    </globalStore.Provider>
  );
};
