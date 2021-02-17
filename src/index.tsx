import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import App from "./App";
import "./index.css";
import ConnectedIntlProvider from "./providers/ConnectedIntlProvider";
import ConnectedThemeProvider from "./providers/ConnectedThemeProvider";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedThemeProvider>
      <ConnectedIntlProvider>
        <App />
      </ConnectedIntlProvider>
    </ConnectedThemeProvider>
  </Provider>,
  document.getElementById("root")
);
