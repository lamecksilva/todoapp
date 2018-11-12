import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import { createStore } from "redux";
import React from "react";

import reducers from "./reducers";
const store = createStore(reducers);

const reduxx = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => reduxx);
