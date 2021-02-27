import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";
import { BuurtenProvider } from "./contexts/BuurtenContext";
import BuurtDetails from "./pages/BuurtDetails";
import BuurtenOverzicht from "./pages/BuurtenOverzicht";

const App: React.FC = () => (
  <BuurtenProvider>
    <Layout>
      <header>
        <h1>Buurt Tagger</h1>
      </header>
      <main>
        <Router basename="/buurt-tagger">
          <Switch>
            <Route path="/:buurtName">
              <BuurtDetails />
            </Route>
            <Route exact path="/">
              <BuurtenOverzicht />
            </Route>
          </Switch>
        </Router>
      </main>
    </Layout>
  </BuurtenProvider>
);

export default App;
