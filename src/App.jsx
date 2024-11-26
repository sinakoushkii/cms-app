import React from "react";
import router from "./routes";
import store from "./app/store";
import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux'


const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
};

export default App;
