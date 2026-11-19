import ReactDOM from "react-dom/client";

import "./styles/font.css";
import "./styles/index.css";

import App from "./App";

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

import { ThemeProvider } from "@mui/material";
import theme from "./Mui/theme";

const client = new ApolloClient({
  link: new HttpLink({ uri: process.env.REACT_APP_GRAPHCMS_URI }),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>,
);
