import ReactDOM from "react-dom/client";

import "./styles/font.css";
import "./styles/index.css";

import App from "./App";

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

import { ThemeProvider } from "@mui/material";
import theme from "./Mui/theme";

import createCache from "@emotion/cache";

import { CacheProvider } from "@emotion/react";

import { prefixer } from "stylis";
import rtlPlugin from "@mui/stylis-plugin-rtl";


const client = new ApolloClient({
  link: new HttpLink({ uri: process.env.REACT_APP_GRAPHCMS_URI }),
  cache: new InMemoryCache(),
});


const rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </CacheProvider>
  </ApolloProvider>,
);
